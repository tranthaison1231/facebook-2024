import { comparePassword, hashPassword } from "@/helpers/password";
import { errorMessages, successMessages } from "@/lib/messages";
import { auth } from "@/middlewares/auth";
import { zValidator } from "@hono/zod-validator";
import { Prisma } from "@prisma/client";
import { Context, Hono } from "hono";
import { getCookie, setCookie } from "hono/cookie";
import { UsersService } from "../users/users.service";
import { AuthService } from "./auth.service";
import {
  forgotPasswordDto,
  resetPasswordDto,
  signInDto,
  signUpDto,
} from "./dtos/auth.dto";

import jwt from "jsonwebtoken";
import { REFRESH_TOKEN_EXPIRE_IN } from "@/lib/constants";

export const router = new Hono();

router
  .post("/login", zValidator("json", signInDto), async (c: Context) => {
    const { email, password } = await c.req.json();

    const user = await UsersService.getUserByEmail(email);

    if (!user) {
      return c.json({ message: errorMessages.userNotFound, status: 404 }, 404);
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return c.json(
        { message: errorMessages.invalidPassword, status: 401 },
        401,
      );
    }

    const accessToken = AuthService.createAccessToken({ userId: user.id });
    const refreshToken = await AuthService.createRefreshToken({
      userId: user.id,
    });

    console.log("refreshToken", refreshToken);

    setCookie(c, "refreshToken", refreshToken, {
      maxAge: REFRESH_TOKEN_EXPIRE_IN * 12,
      sameSite: "None",
      httpOnly: true,
      secure: true,
      path: "/api/refresh-token",
    });

    return c.json({ accessToken: accessToken });
  })
  .post("/sign-up", zValidator("json", signUpDto), async (c) => {
    const { email, password, firstName, lastName } = await c.req.json();

    try {
      const hashedPassword = await hashPassword(password);

      await UsersService.createUser({
        email,
        password: hashedPassword,
        firstName,
        lastName,
      });
      return c.json({ message: successMessages.userCreate });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        return c.json(
          { message: errorMessages.existingEmail, status: 400 },
          400,
        );
      }
      return c.json({ message: "An error occurred!", status: 500 }, 500);
    }
  })
  .post(
    "/forgot-password",
    zValidator("json", forgotPasswordDto),
    async (c) => {
      try {
        const { email } = await c.req.json();

        const user = await UsersService.getUserByEmail(email);

        if (!user)
          return c.json(
            { message: errorMessages.userNotFound, status: 404 },
            404,
          );

        await AuthService.forgotPassword(user);

        return c.json({ message: successMessages.forgotPassword });
      } catch (error) {
        console.log(error);
        return c.json({ message: "An error occurred!", status: 500 }, 500);
      }
    },
  )
  .post(
    "/reset-password",
    auth,
    zValidator("json", resetPasswordDto),
    async (c) => {
      const user = c.get("user");

      const { password } = await c.req.json();

      const hashedPassword = await hashPassword(password);

      await UsersService.updateUser(user.id, { password: hashedPassword });
      return c.json({ message: "Reset password!" });
    },
  )
  .post("/refresh-token", async (c) => {
    const refreshToken = getCookie(c, "refreshToken");

    const authHeader = c.req.raw.headers.get("Authorization");
    const token = authHeader && authHeader.split(" ")[1];
    const jwtObject = jwt.decode(token) as { userId: string };

    const userID = jwtObject?.userId;
    console.log("userID", userID, refreshToken, getCookie(c));

    if (!userID || !refreshToken)
      return c.json({ message: "Invalid token!", status: 500 }, 500);

    const { accessToken, refreshToken: newRefreshToken } =
      await AuthService.refreshToken(refreshToken, userID as string);

    return c.json({ accessToken, refreshToken: newRefreshToken });
  });
