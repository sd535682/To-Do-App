import {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodos = useCallback((title, description) => {
    setTodos((previous) => [
      ...previous,
      {
        id: Date.now(),
        title: title,
        description: description,
        completed: false,
      },
    ]);
  }, []);

  const removeTodos = useCallback((id) => {
    setTodos((previous) => previous.filter((todo) => todo.id !== id));
  }, []);

  const toggleTodos = useCallback((id) => {
    setTodos((previous) =>
      previous.map((eachtodo) =>
        eachtodo.id === id
          ? { ...eachtodo, completed: !eachtodo.completed }
          : eachtodo
      )
    );
  }, []);

  const sortTodos = useCallback(() => {
    setTodos((previous) => {
      const sortedTodos = [...previous];
      if (sortBy === "A-B") {
        return sortedTodos.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortBy === "Status") {
        return sortedTodos.sort(
          (a, b) => Number(a.completed) - Number(b.completed)
        );
      }
      return previous;
    });
  }, [sortBy]);

  useEffect(() => {
    sortTodos();
  }, [sortBy, sortTodos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodos,
        removeTodos,
        toggleTodos,
        sortBy,
        setSortBy,
        sortTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
