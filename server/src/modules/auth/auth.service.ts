import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_EXPIRE_IN, JWT_SECRET, WEB_URL } from "@/lib/constants";
import { mailService } from "@/helpers/email";
import { User } from "@prisma/client";
import { render } from "@react-email/components";
import { ForgotPassword } from "@/emails/forgot-password";

export class AuthService {
  static createToken({ userId }: { userId: string }) {
    return jwt.sign({ userId: userId }, JWT_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRE_IN,
    });
  }

  static async forgotPassword(user: User) {
    const accessToken = AuthService.createToken({ userId: user.id });

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
