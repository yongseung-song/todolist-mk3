import { Todo } from "../../types";
import Card from "../card";

const sampleTodo: Todo[] = [
  {
    id: "1",
    title: "sample",
    content: " todo sample",
    isDone: false,
  },
];

interface ListProps {
  title: string;
  // todos: Todo[]
}

function List({ title }: ListProps) {
  return (
    <section className="w-screen p-3">
      <h1 className="text-2xl font-bold text-blue-600">{title}</h1>
      <ul className="h-fit w-fit overflow-scroll">
        {sampleTodo.map((todo) => (
          <Card key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}

export default List;
