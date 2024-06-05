import { ComponentProps } from "react";
import { Todo } from "../../types";
import Button from "../button";

interface CardProps extends ComponentProps<"div"> {
  todo: Todo;
}

function Card({ todo, ...props }: CardProps) {
  return (
    <div
      {...props}
      className="flex h-60 w-60 flex-col rounded-md border-2 border-blue-500"
    >
      <li className="text-blue-600">
        <h2>{todo.title}</h2>
        <p>{todo.content}</p>
        <div className="">
          <Button type="button">완료</Button>
          <Button type="button">삭제</Button>
        </div>
      </li>
    </div>
  );
}

export default Card;
