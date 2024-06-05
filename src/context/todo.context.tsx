import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { Todo } from "../types";

type TodoContext = {
  activeTodos: Todo[];
  completedTodos: Todo[];
  add: (todo: Todo) => void;
  toggle: (id: string) => void;
  remove: (id: string) => void;
  reset: () => void;
};

const initialTodoContext: TodoContext = {
  activeTodos: [],
  completedTodos: [],
  add: () => {},
  toggle: () => {},
  remove: () => {},
  reset: () => {},
};

const todoContext = createContext<TodoContext>(initialTodoContext);

export const useTodoContext = () => useContext(todoContext);

function TodoProvider({ children }: { children: ReactNode }) {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);
  const [activeTodos, setActiveTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const updateList = useCallback((todos: Todo[]) => {
    const { activeTodos, completedTodos } = todos.reduce<{
      activeTodos: Todo[];
      completedTodos: Todo[];
    }>(
      (acc, todo) => {
        if (todo.isDone) {
          acc.completedTodos.push(todo);
        } else {
          acc.activeTodos.push(todo);
        }
        return acc;
      },
      { activeTodos: [], completedTodos: [] },
    );

    setActiveTodos(activeTodos);
    setCompletedTodos(completedTodos);
  }, []);

  const add = useCallback(
    (newTodo: Todo) => {
      const newTodoItems = [...todoItems, newTodo];
      console.log(newTodoItems);
      setTodoItems(newTodoItems);
      updateList(newTodoItems);
    },
    [todoItems, updateList],
  );

  const remove = useCallback(
    (id: string) => {
      const newTodoItems = todoItems.filter((todo) => todo.id !== id);
      setTodoItems(newTodoItems);
      updateList(newTodoItems);
    },
    [todoItems, updateList],
  );

  const toggle = useCallback(
    (id: string) => {
      const newTodoItems = todoItems.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
      setTodoItems(newTodoItems);
      updateList(newTodoItems);
    },
    [todoItems, updateList],
  );

  const reset = useCallback(() => {
    setTodoItems([]);
    updateList([]);
  }, [updateList]);

  const value = { activeTodos, completedTodos, add, remove, toggle, reset };
  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
}

export default TodoProvider;
