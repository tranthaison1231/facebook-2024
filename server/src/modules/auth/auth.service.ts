import jwt from "jsonwebtoken";
import {
  ACCESS_TOKEN_EXPIRE_IN,
  JWT_SECRET,
  WEB_URL,
  REFRESH_TOKEN_EXPIRE_IN,
} from "@/lib/constants";
import { mailService } from "@/helpers/email";
import { User } from "@prisma/client";
import { render } from "@react-email/components";
import { ForgotPassword } from "@/emails/forgot-password";
import { redisService } from "@/helpers/redis";
import { generateOpaqueToken } from "@/helpers/token";
import { UnauthorizedException } from "@/lib/exceptions";

export class AuthService {
  static createAccessToken({ userId }: { userId: string }) {
    return jwt.sign({ userId: userId }, JWT_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRE_IN,
    });
  }

  static async createRefreshToken({ userID }: { userID: string }) {
    const refreshToken = generateOpaqueToken();

    await redisService.set(
      `refresh-token:${userID}`,
      refreshToken,
      "EX",
      REFRESH_TOKEN_EXPIRE_IN,
    );

    console.log("refreshToken", refreshToken, userID);

    return refreshToken;
  }

  static async refreshToken(refreshToken: string, userID: string) {
    const redisRefreshToken = await redisService.get(`refresh-token:${userID}`);

    if (redisRefreshToken !== refreshToken)
      throw new UnauthorizedException("Invalid refresh token");
    const accessToken = AuthService.createAccessToken({
      userId: userID.toString(),
    });
    const newRefreshToken = await AuthService.createRefreshToken({
      userID: userID.toString(),
    });
    return {
      accessToken,
      refreshToken: newRefreshToken,
      expiresIn: ACCESS_TOKEN_EXPIRE_IN,
    };
  }

  static async forgotPassword(user: User) {
    const accessToken = AuthService.createAccessToken({ userId: user.id });

    const emailHtml = await render(
      ForgotPassword({
        url: `${WEB_URL}/reset-password?access-token=${accessToken}`,
        fullName: user.firstName + " " + user.lastName,
      }),
    );

    return await mailService.sendMail({
      to: user.email,
      subject: "Forgot password",
      html: emailHtml,
    });
  }
}
