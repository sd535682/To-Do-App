import { useTodo } from "../context/todocontext";

export default function TodoBox() {
  const { todos } = useTodo();

  return (
    <ul>
      {todos.map((todo) => (
        <div className="flex flex-row gap-2 min-h-20 bg-rose-200 my-10 mx-20 p-10 rounded-lg">
          <h1>{todo.text.title}</h1>
          <h1>{todo.text.description}</h1>
        </div>
      ))}
    </ul>
  );
}
