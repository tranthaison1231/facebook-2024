import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_EXPIRE_IN, JWT_SECRET, WEB_URL } from "@/lib/constants";
import { mailService } from "@/helpers/email";
import { User } from "@prisma/client";

export class AuthService {
  static createToken({ userId }: { userId: string }) {
    return jwt.sign({ userId: userId }, JWT_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRE_IN,
    });
  }

  static async forgotPassword(user: User) {
    const accessToken = AuthService.createToken({ userId: user.id });

    return await mailService.sendMail({
      to: user.email,
      subject: "Forgot password",
      html: `
            <div>
              Please click <a href="${WEB_URL}/reset-password?access-token=${accessToken}">here</a> to reset your password
            </div>`,
    });
  }
}
