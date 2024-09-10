import React, { useState } from "react";
import { useTodo } from "../context/todocontext";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTodos } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addTodos({
        id: Date.now,
        text: { title, description },
        completed: false,
      });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="flex flex-row gap-2 min-h-20 bg-rose-200 my-10 mx-20 p-10 rounded-lg">
      <input type="checkbox" checked={false} />
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter Title"
          className="bg-red-200"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Description"
          className="bg-red-200"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Add Todo
      </button>
    </div>
  );
}
