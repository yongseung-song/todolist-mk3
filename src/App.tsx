import TodoProvider from "./context/todo.context";
import Homepage from "./pages/homepage";

function App() {
  return (
    <TodoProvider>
      <Homepage />
    </TodoProvider>
  );
}
export default App;
