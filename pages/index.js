import { useState, useEffect } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  // Fetch the initial list of todos from the backend when the component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:3001/todos");
      const data = await response.json();
      setTodos(data); // Set the fetched todos
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const createTodo = async () => {
    if (!title) {
      alert("Title is required");
      return;
    }

    const response = await fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        userId: 1, // Hardcoded user for example purposes
      }),
    });

    if (response.ok) {
      const newTodo = await response.json();
      setTodos([...todos, newTodo]); // Append the new to-do to the list
      setTitle(""); // Reset the title field
      setDescription(""); // Reset the description field
    } else {
      console.error("Error creating to-do:", await response.json());
    }
  };

  return (
    <div>
      <h1>Create a New To-Do</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={createTodo}>Create</button>

      <h2>To-Do List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li> // Ensure each to-do has a unique key
        ))}
      </ul>
    </div>
  );
}
