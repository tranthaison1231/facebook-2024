import { Hono } from "hono";
import { PostsService } from "./posts.service";
import { auth } from "@/middlewares/auth";

export const router = new Hono();

router
  .get("/", auth, async (c) => {
    const page = Number(c.req.query("page"));
    const limit = Number(c.req.query("limit"));
    const response = await PostsService.getPosts(page, limit);

    return c.json(response, 200);
  })
  .post("/", auth, async (c) => {
    const createPostDto = await c.req.json();
    const post = await PostsService.createPost(createPostDto);

    return c.json(post, 201);
  });
