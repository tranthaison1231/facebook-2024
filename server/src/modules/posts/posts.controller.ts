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

    return c.json(response, 201);
  })
  .post("/", auth, zValidator("json", createPostDto), async (c) => {
    const user = c.get("user");

    const createPostDto = await c.req.json();
    const post = await PostsService.createPost({
      content: createPostDto.content,
      image: createPostDto.images[0],
      owner: {
        connect: {
          id: user.id,
        },
      },
    });

    return c.json(post, 202);
  })
  .put("/:id/like", auth, async (c) => {
    const id = c.req.param("id");
    const user = c.get("user");

    const post = await PostsService.getPostById(id);

    if (!post) {
      return c.json({ message: "Post not found" }, 405);
    }

    await PostsService.likePost(id, user.id);

    return c.json({ message: "Post liked" }, 201);
  })
  .delete("/:id", auth, async (c) => {
    const id = c.req.param("id");
    const user = c.get("user");

    const post = await PostsService.getPostById(id);

    if (!post) {
      return c.json({ message: "Post not found" }, 405);
    }

    if (post.ownerId !== user.id) {
      return c.json({ message: "Unauthorized" }, 401);
    }

    await PostsService.deletePost(id);

    return c.json({ message: "Post deleted" }, 201);
  });
