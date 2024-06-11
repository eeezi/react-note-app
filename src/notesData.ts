import { v4 } from "uuid";

const notes = [
    {
        title: "Note 1 title",
        content: "Note 1 content",
        tags: [{ tag: "coding", id: v4() }],
        color: "#cce0ff",
        priority: "high",
        isPinned: true,
        isRead: false,
        date: "10/06/24 1.55 AM",
        createdAt: new Date("Sun Jun 10 2024 01:55:00").getTime(),
        editedAt: null,
        id: v4(),
    },
    {
        title: "Note 2 title",
        content: "Note 2 content",
        tags: [{ tag: "exercise", id: v4() }],
        color: "#ffcccc",
        priority: "high",
        isPinned: true,
        isRead: false,
        date: "10/06/24 1.58 AM",
        createdAt: new Date("Sun Jun 10 2024 01:58:00").getTime(),
        editedAt: null,
        id: v4(),
    },
]

export default notes;