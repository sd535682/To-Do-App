import React, { useCallback, useRef, useState } from "react";
import { useTodo } from "../context/todocontext";

export default function AddTodo() {
  const { todos, addTodos } = useTodo();
  const titleRef = useRef();
  const descriptionRef = useRef();

  console.log(todos);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const title = titleRef.current.value;
      const description = descriptionRef.current.value;
      if (title && description) {
        addTodos(title, description);
        titleRef.current.value = "";
        descriptionRef.current.value = "";
      }
    },
    [addTodos]
  );

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between md:my-10 md:mx-20 gap-4"
      >
        <input
          type="text"
          placeholder="Enter Title"
          ref={titleRef}
          required
          className="flex flex-1 rounded-lg p-4"
        />
        <input
          type="text"
          placeholder="Enter Description"
          ref={descriptionRef}
          required
          className="flex flex-1 rounded-lg p-4"
        />
        <button
          onClick={handleSubmit}
          className="flex flex-1 rounded-lg p-4 bg-red-600 justify-center text-white text-lg font-bold"
        >
          Add Todo
        </button>
      </form>
    </>
  );
}
