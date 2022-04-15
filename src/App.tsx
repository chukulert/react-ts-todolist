import "./App.css";
import ToDoContextProvider from "./store/todo-context";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/TodoList";

function App() {
  return (
    <ToDoContextProvider>
      <NewToDo />
      <ToDoList />
    </ToDoContextProvider>
  );
}

export default App;
