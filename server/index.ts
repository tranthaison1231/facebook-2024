import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { router as authRouter } from "./modules/auth";
import { router as postsRouter } from "./modules/posts";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);

app.route("/", authRouter);
app.route("/posts", postsRouter);

serve({ fetch: app.fetch, port: 5000 });
