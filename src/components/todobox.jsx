import { useRef, useEffect } from "react";
import { useTodo } from "../context/todocontext";

export default function TodoBox() {
  const { todos, removeTodos, toggleTodos } = useTodo();
  const todoState = useRef();
  useEffect(() => {
    todoState.current = todos;
  });

  return (
    <ul className="flex flex-col gap-4 my-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`flex flex-row justify-between items-center gap-2 min-h-20  ${
            todo.completed ? "bg-rose-800" : "bg-rose-200"
          } md:mx-20 p-4 rounded-lg`}
        >
          <div className="flex flex-row items-center gap-4">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodos(todo.id)}
              className="h-5 w-5"
            />
            <div className="flex flex-col">
              <h1
                className={`text-lg font-bold  ${
                  todo.completed ? "text-white" : "text-red-900"
                }`}
              >
                {todo.title}
              </h1>
              <h1
                className={`text-lg font-bold  ${
                  todo.completed ? "text-slate-200" : "text-red-700"
                }`}
              >
                {todo.description}
              </h1>
            </div>
          </div>
          <button
            onClick={() => removeTodos(todo.id)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
}
