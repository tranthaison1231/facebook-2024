import { Hono } from "hono";
import { PostsService } from "./posts.service";
import { auth } from "@/middlewares/auth";
import { createPostDto } from "./dtos/create-post.dto";
import { zValidator } from "@hono/zod-validator";

export const router = new Hono();

router
  .get("/", auth, async (c) => {
    const page = Number(c.req.query("page"));
    const limit = Number(c.req.query("limit"));
    const response = await PostsService.getPosts(page, limit);

    return c.json(response, 200);
  })
  .post("/", auth, zValidator("json", createPostDto), async (c) => {
    const user = c.get("user");

    const createPostDto = await c.req.json();
    const post = await PostsService.createPost({
      content: createPostDto.content,
      owner: {
        connect: {
          id: user.id,
        },
      },
    });

    return c.json(post, 201);
  });
