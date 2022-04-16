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

  return (
    <ul className="p-2 border-2 border-solid border-grey mt-2 rounded-lg">
      {toDoItems.length !== 0 && toDoItems}
      {!toDoItems.length && (
        <div className="text-center">No items in the list.</div>
      )}
    </ul>
  );
};

export default ToDoList;
