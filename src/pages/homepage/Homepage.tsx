import Form from "../../components/form";
import List from "../../components/list";
import Page from "../../components/page";
import { useTodoContext } from "../../context/todo.context";

function Homepage() {
  const { activeTodos, completedTodos } = useTodoContext();
  return (
    <Page>
      <Form />
      <List todos={activeTodos} title="in progress..." />
      <List todos={completedTodos} title="Done!" />
    </Page>
  );
}

export default Homepage;
