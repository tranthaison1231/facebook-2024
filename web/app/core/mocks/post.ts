export const postsMock = [
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
]