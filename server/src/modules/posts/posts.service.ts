import { Prisma } from "@prisma/client";
import { prisma } from "../../prisma/db";

export class PostsService {
  static async getPosts(page: number, limit: number) {
    const items = await prisma.post.findMany({
      take: limit,
      skip: (page - 1) * limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    const total = prisma.post.count();

    return {
      items,
      total,
      page,
      limit,
    };
  }

  static async createPost(data: Prisma.PostCreateInput) {
    return prisma.post.create({ data });
  }

  static getPostById(id: string) {
    return prisma.post.findUnique({
      where: {
        id,
      },
    });
  }

  static deletePost(id: string) {
    return prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
