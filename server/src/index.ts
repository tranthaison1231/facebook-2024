import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { router as authRouter } from "./modules/auth/auth.controller";
import { router as postsRouter } from "./modules/posts/posts.controller";
import { router as usersRouter } from "./modules/users/users.controller";

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
app.route("/users", usersRouter);

serve({ fetch: app.fetch, port: 5000 });
