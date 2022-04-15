import { useState, useContext, useRef } from "react";
import { TodosContext } from "../store/todo-context";

const ToDoItem: React.FC<{
  id: string;
  description: string;
  removeToDo: () => void;
}> = (props) => {
  const toDoContext = useContext(TodosContext);
  const { description, removeToDo, id } = props;

  const [editing, setEditing] = useState<boolean>(false);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleUnDoChangeClick = (event: React.FormEvent) => {
    event?.preventDefault();
    todoTextInputRef.current!.value = description;
  };

  const handleSaveEdit = (event: React.FormEvent) => {
    event?.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) return;

    toDoContext.editToDo(id, enteredText);
    setEditing(false);
  };

  return (
    <li>
      {!editing && description}
      {editing && (
        <form onSubmit={handleSaveEdit}>
          <input
            type="text"
            id="text"
            ref={todoTextInputRef}
            defaultValue={description}
          />
          <button>Save Changes</button>
          <button onClick={handleUnDoChangeClick}>Undo Changes</button>
        </form>
      )}
      {!editing && (
        <div>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={removeToDo}>Remove</button>
        </div>
      )}
    </li>
  );
};

export default ToDoItem;
