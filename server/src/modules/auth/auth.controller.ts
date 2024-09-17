import { Hono } from "hono";
import { UsersService } from "../users/users.service";
import { comparePassword, hashPassword } from "../../helpers/password";
import { AuthService } from "./auth.service";

export const router = new Hono();

router
  .post("/login", async (c) => {
    const { email, password } = await c.req.json();

    const user = await UsersService.getUserByEmail(email);

    if (!user) {
      return c.json({ message: "User not found!", status: 404 }, 404);
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return c.json({ message: "Invalid password!", status: 401 }, 401);
    }

    const token = AuthService.createToken({ userId: user.id });

    return c.json({ token: token });
  })
  .post("/sign-up", async (c) => {
    const { email, password, firstName, lastName } = await c.req.json();
    try {
      const hashedPassword = await hashPassword(password);

      await UsersService.createUser({
        email,
        password: hashedPassword,
        firstName,
        lastName,
      });
      return c.json({ message: "User created successfully!" });
    } catch (error) {
      if (error.code === "P2002") {
        return c.json({ message: "Email already exists!", status: 400 }, 400);
      }
      return c.json({ message: "An error occurred!", status: 500 }, 500);
    }
  });
