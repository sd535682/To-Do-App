import TodoBox from "../components/todobox";
import { TodoProvider } from "../context/todocontext";
import AddTodo from "../components/addtodo";
import Sort from "../components/sort";

export default function HomePage() {
  return (
    <TodoProvider>
      <div className="grid grid-cols-12 gap-4 m-4">
        <div className="flex flex-col gap-6 bg-red-300 col-span-12 md:col-span-2 h-fit rounded-lg p-4">
          <h1 className="text-2xl md:text-3xl font-bold text-red-700">
            Todo-List
          </h1>
          <Sort />
        </div>
        <div className="bg-red-50 col-span-12 md:col-span-10 h-fit rounded-lg p-4">
          <AddTodo />
          <TodoBox />
        </div>
      </div>
    </TodoProvider>
  );
}
