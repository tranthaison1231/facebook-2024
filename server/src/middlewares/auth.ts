import { UnauthorizedException } from "@/lib/exceptions";
import { Context, Next } from "hono";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@/lib/constants";
import { prisma } from "@/prisma/db";

export const verifyToken = async (token: string) => {
  try {
    const data = jwt.verify(token, JWT_SECRET) as { userId: string };

    const user = await prisma.user.findUnique({
      where: {
        id: data.userId,
      },
    });
    return user;
  } catch (err) {
    throw new UnauthorizedException("Unauthorized");
  }
};

export const auth = async (c: Context, next: Next) => {
  try {
    const authHeader = c.req.header("Authorization");
    const token = authHeader?.split(" ")[1];
    if (!token) {
      throw new UnauthorizedException("Unauthorized");
    }

    const user = await verifyToken(token);

    c.set("user", user);

    await next();
  } catch (error) {
    if (error instanceof UnauthorizedException) {
      return c.json({ message: error.message }, 401);
    }
  }
};
