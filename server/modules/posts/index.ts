import { Hono } from "hono";

export const router = new Hono();

interface Comment {
  id: number;
  content: string;
  user: {
    id: number;
    fullName: string;
    avatar: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
interface Post {
  id: number;
  title: string;
  content: string;
  totalLikes: number;
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
}

const getPosts = async (): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Hello World",
          content: "This is a test post 1",
          totalLikes: 10,
          comments: [
            {
              id: 1,
              content: "This is a test comment",
              user: {
                id: 1,
                fullName: "Hieu Nguyen",
                avatar: "https://avatars.githubusercontent.com/u/54213161?v=4",
              },
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              content: "This is a test comment 2",
              user: {
                id: 2,
                fullName: "Hieu Nguyen",
                avatar: "https://avatars.githubusercontent.com/u/54213161?v=4",
              },
              createdAt: new Date(),
              updatedAt: new Date(),
            }
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "Hello World 2",
          content: "This is a test post 2",
          totalLikes: 10,
          comments: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "Hello World 3",
          content: "This is a test post 3",
          totalLikes: 10,
          comments: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: "Hello World 4",
          content: "This is a test post 4",
          totalLikes: 10,
          comments: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          title: "Hello World 5",
          content: "This is a test post 5",
          totalLikes: 10,
          comments: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          title: "Hello World 6",
          content: "This is a test post 6",
          totalLikes: 10,
          comments: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          title: "Hello World 7",
          content: "This is a test post 7",
          totalLikes: 10,
          comments: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          title: "Hello World 8",
          content: "This is a test post 8",
          totalLikes: 10,
          comments: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          title: "Hello World 9",
          content: "This is a test post 9",
          totalLikes: 10,
          comments: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          title: "Hello World 10",
          content: "This is a test post 10",
          totalLikes: 10,
          comments: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }, 3000);
  });
}




router
  .get("/", async (c) => {
    const page = Number(c.req.query("page"));
    const limit = Number(c.req.query("limit"));
    const posts = await getPosts();

    const items = posts.slice((page - 1) * limit, page * limit);

    return c.json({
      items,
      total: posts.length,
      page,
      limit,
    }, 200);
  })
  .post("/", async (c) => {
    const body = await c.req.json();

    return c.json({ message: "Post created successfully", status: 201 }, 201);
  });
