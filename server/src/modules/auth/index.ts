import { Hono } from "hono";

export const router = new Hono();

router
  .post("/login", async (c) => {
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
  .get("/users/me", async (c) => {
    return c.json({
      fullName: "Hieu Nguyen",
      avatar:
        "data:image/webp;base64,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",
    });
  });
