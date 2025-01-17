import { Prisma } from "@prisma/client";
import { prisma } from "@/prisma/db";

export class UsersService {
  static async createUser(userDto: Prisma.UserCreateInput) {
    return prisma.user.create({
      data: userDto,
    });
  }

  static async getUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  static async getUserById(id: string) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  static async updateById(id: string, userDto: Prisma.UserUpdateInput) {
    return prisma.user.update({
      where: {
        id,
      },
      data: userDto,
    });
  }

  static async updateUser(id: string, userDto: Prisma.UserUpdateInput) {
    return prisma.user.update({
      where: {
        id,
      },
      data: userDto,
    });
  }
}
