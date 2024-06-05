import { Todo } from "../../types";
import Card from "../card";
import EmptyList from "../emptyList/EmptyList";

interface ListProps {
  title: string;
  todos: Todo[];
}

function List({ todos, title }: ListProps) {
  return (
    <section className="w-full p-3">
      <h1 className="mb-3 text-2xl font-bold text-blue-600">{title}</h1>
      <div className="w-full overflow-x-scroll">
        <ul className="flex h-60 w-fit items-center gap-3">
          {todos.length ? (
            todos.map((todo) => <Card key={todo.id} todo={todo} />)
          ) : (
            <EmptyList />
          )}
        </ul>
      </div>
    </section>
  );
}

export default List;
