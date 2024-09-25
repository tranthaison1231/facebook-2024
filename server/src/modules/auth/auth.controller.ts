import { Context, Hono } from 'hono';
import { UsersService } from '../users/users.service';
import { comparePassword, hashPassword } from '@/helpers/password';
import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';
import { zValidator } from '@hono/zod-validator';
import { signInDto, signUpDto } from './dtos/auth.dto';
import { errorMessages, successMessages } from '@/lib/messages';
import { auth } from '@/middlewares/auth';

export const router = new Hono();

router
  .post('/login', zValidator('json', signInDto), async (c: Context) => {
    const { email, password } = await c.req.json();

    const user = await UsersService.getUserByEmail(email);

    if (!user) {
      return c.json({ message: errorMessages.userNotFound, status: 404 }, 404);
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return c.json(
        { message: errorMessages.invalidPassword, status: 401 },
        401
      );
    }

    const token = AuthService.createToken({ userId: user.id });

    return c.json({ token: token });
  })
  .post('/sign-up', zValidator('json', signUpDto), async (c) => {
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
        error.code === 'P2002'
      ) {
        return c.json(
          { message: errorMessages.existingEmail, status: 400 },
          400
        );
      }
      return c.json({ message: 'An error occurred!', status: 500 }, 500);
    }
  })
  .post('/forgot-password', async (c) => {
    const { email } = await c.req.json();

    await AuthService.forgotPassword(email);

    return c.json(
      {
        message:
          'We have sent a password reset link to your email. Please check your email.',
        status: 200,
      },
      200
    );
  })
  .put('/reset-password', auth, async (c) => {
    const user = await c.get('user');
    const { password } = await c.req.json();

    await AuthService.resetPassword(user, password);

    return c.json(
      {
        message:
          'Your password has been reset successfully. Please login with your new password.',
      },
      200
    );
  });
