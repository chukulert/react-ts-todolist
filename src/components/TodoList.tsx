import ToDoItem from "./ToDoItem";
import { useContext } from "react";
import { TodosContext } from "../store/todo-context";


const ToDoList: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const toDoItems = todosCtx.items.map((item) => (
    <ToDoItem
      key={item.id}
      id={item.id}
      description={item.description}
      removeToDo={todosCtx.removeToDo.bind(null, item.id)}
    />
  ));

  return <ul>{toDoItems}</ul>;
};

export default ToDoList;
