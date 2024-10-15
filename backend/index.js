const express = require("express"); // Import Express
const { PrismaClient } = require("@prisma/client"); // Import Prisma Client
const cors = require("cors"); // Import CORS for cross-origin resource sharing

// Initialize Express app
const app = express();
const prisma = new PrismaClient(); // Initialize Prisma client

// Middleware to parse JSON and allow CORS
app.use(express.json());
app.use(cors());

// Example route to create a new to-do item
app.post("/todos", async (req, res) => {
  const { title, description, userId } = req.body;
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
    res
      .status(500)
      .json({ error: "An error occurred while creating the to-do item." });
  }
});

// Example route to get all to-do items for a user
app.get("/users/:userId/todos", async (req, res) => {
  const { userId } = req.params;
  try {
    const todos = await prisma.toDo.findMany({
      where: { userId: Number(userId) },
    });
    res.json(todos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the to-do items." });
  }
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
