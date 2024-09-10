import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      text: {
        title: "Welcome to Todo",
        description: "Create,Remove, Mark your Todos",
      },
      completed: false,
    },
  ],
  addTodos: (text) => {},
  removeTodos: (id) => {},
  toggleTodos: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
