import { ComponentProps } from "react";
import { useTodoContext } from "../../context/todo.context";
import { Todo } from "../../types";
import Button from "../button";

interface CardProps extends ComponentProps<"div"> {
  todo: Todo;
}

function Card({ todo, ...props }: CardProps) {
  const { toggle, remove } = useTodoContext();
  const handleToggle = () => toggle(todo.id);
  const handleRemove = () => remove(todo.id);

  return (
    <div
      {...props}
      className="flex h-60 w-60 flex-col rounded-md border-2 border-blue-500"
    >
      <li className="relative h-full w-full p-4 text-blue-600">
        <h2 className="mb-4 text-xl font-bold">{todo.title}</h2>
        <p>{todo.content}</p>
        <div className="absolute bottom-0 right-0 flex w-full items-center justify-center gap-2 p-3">
          <Button onClick={handleToggle} type="button">
            {todo.isDone ? "취소" : "완료"}
          </Button>
          <Button onClick={handleRemove} type="button">
            삭제
          </Button>
        </div>
      </li>
    </div>
  );
}

export default Card;
