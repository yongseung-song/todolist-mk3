import { Todo } from "../../types";
import Card from "../card";
import EmptyList from "../emptyList/EmptyList";

interface ListProps {
  title: string;
  todos: Todo[];
}

function List({ todos, title }: ListProps) {
  return (
    <section className="mb-4 p-3">
      <h1 className="mb-3 px-4 text-2xl font-bold text-blue-600">{title}</h1>
      <div className="box-border w-full overflow-x-scroll">
        <ul
          className={`${todos.length ? "w-fit" : "w-screen justify-center"} flex h-60 items-center gap-3`}
        >
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
