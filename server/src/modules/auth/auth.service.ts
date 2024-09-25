import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_EXPIRE_IN, JWT_SECRET } from "@/lib/constants";
import { UsersService } from "@/modules/users/users.service";
import { BadRequestException } from "@/lib/exceptions";
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import ForgotPassword from '@/emails/forgot-password';
import { mailService } from '@/lib/mail.service';
import { User } from "@prisma/client";
import { comparePassword, genSalt, hashPassword } from "@/helpers/password";
export class AuthService {
  static createToken({ userId }: { userId: string }) {
    return jwt.sign({ userId: userId }, JWT_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRE_IN,
    });
  }
  static async forgotPassword(email: string) {
    const user = await UsersService.getUserByEmail(email);
    
    if (!user) {
      throw new BadRequestException(`User with email ${email} not found`); 
    }

    const accessToken = AuthService.createToken({ userId: user.id });

    const emailHtml = await render(ForgotPassword({ url: `http://localhost:3000/reset-password?token=${accessToken}` }));

    await mailService.sendMail({
      to: email,
      html: emailHtml,
      subject: 'Reset password',
    });

  }

  static async resetPassword(user: User, newPassword: string) {
    const isSamePassword = await comparePassword(newPassword, user.password);

    if (isSamePassword) {
      throw new BadRequestException('New password cannot be the same as the old one');
    }

    const salt = genSalt();
    const hashedPassword = await hashPassword(newPassword, salt);

    await UsersService.updateNewPassword(user.id, hashedPassword );
  }
}
