import { Hono } from "hono";

export const router = new Hono();

router
  .get("/", async (c) => {
    const { email, password } = await c.req.json();
    if (email === "admin@gmail.com" && password === "admin12345") {
      return c.json({ token: "1225125125125125125", status: 200 }, 200);
    } else {
      return c.json(
        { message: "Invalid username and password!", status: 401 },
        401,
      );
    }
  })
  .post("/", async (c) => {
    const body = await c.req.json();
    console.log(body);

    return c.json({ message: "Post created successfully", status: 201 }, 201);
  });
