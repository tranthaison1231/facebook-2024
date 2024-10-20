import { UnauthorizedException } from "@/lib/exceptions";
import { Context, Next } from "hono";
import jwt from "jsonwebtoken";
import { prisma } from "@/prisma/db";
import { redisService } from "@/helpers/redis";

export const verifyToken = async (token: string) => {
  try {
    const { userId } = jwt.decode(token) as { userId: string };

    const publicKey = await redisService.get(`public-key:${userId}`);

    jwt.verify(token, publicKey);

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  } catch (err) {
    console.log("err", err);
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
