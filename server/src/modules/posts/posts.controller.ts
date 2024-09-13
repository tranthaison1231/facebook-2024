import { Hono } from "hono";
import { PostsService } from "./posts.service";

export const router = new Hono();

router.get("/", async (c) => {
  const page = Number(c.req.query("page"));
  const limit = Number(c.req.query("limit"));
  const items = await PostsService.getPosts();

  return c.json(
    {
      items,
      total: 10,
      page,
      limit,
    },
    200,
  );
});
