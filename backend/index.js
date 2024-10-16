const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

// Create a new to-do item
app.post("/todos", async (req, res) => {
  const { title, description, userId } = req.body;

  if (!title || !userId) {
    return res.status(400).json({ error: "Title and userId are required." });
  }

  try {
    const newToDo = await prisma.toDo.create({
      data: {
        title,
        description,
        user: { connect: { id: userId } },
      },
    });
    res.json(newToDo);
  } catch (error) {
    console.error("Error creating to-do:", error); // This will log the detailed error in the backend console
    res.status(500).json({ error: "Failed to create the to-do." });
  }
});

// Fetch all to-do items
app.get("/todos", async (req, res) => {
  try {
    const todos = await prisma.toDo.findMany();
    res.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Failed to fetch to-dos." });
  }
});

app.post("/create-user", async (req, res) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        email: "test@example.com",
        password: "password", // Example password
        name: "Test User",
      },
    });
    res.json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create the user." });
  }
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
