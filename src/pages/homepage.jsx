import { useState } from "react";
import TodoBox from "../components/todobox";
import { TodoProvider } from "../context/todocontext";
import AddTodo from "../components/addtodo";

export default function HomePage() {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    setTodos((previous) => [...previous, { id: Date.now(), ...todo }]);
  };

  const removeTodos = (id) => {
    setTodos((previous) => previous.filter((todo) => todo.id !== id));
  };

  const toggleTodos = (id) => {
    setTodos((previous) =>
      previous.map((todo) =>
        todo.id !== id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoProvider value={{ todos, addTodos, removeTodos, toggleTodos }}>
      <div className="grid sm:grid-cols-12 gap-4 m-4">
        <div className="bg-red-300 col-span-3 hidden sm:block h-screen rounded-lg p-4">
          Nav Menu
        </div>
        <div className="bg-red-50 col-span-9 h-screen rounded-lg p-4">
          <AddTodo />
          <TodoBox />
        </div>
      </div>
    </TodoProvider>
  );
}
