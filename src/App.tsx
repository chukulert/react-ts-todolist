import "./App.css";
import ToDoContextProvider from "./store/todo-context";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/TodoList";
import PageContainer from "./components/PageContainer";

function App() {
  return (
    <ToDoContextProvider>
      <PageContainer>
        <div className='max-w-fit min-w-360'>
        <NewToDo />
        <ToDoList />
        </div>
      </PageContainer>
    </ToDoContextProvider>
  );
}

export default App;
