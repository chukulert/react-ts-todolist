import { useState, useContext, useRef } from "react";
import { TodosContext } from "../store/todo-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDoItem: React.FC<{
  id: string;
  description: string;
  removeToDo: () => void;
}> = (props) => {
  const toDoContext = useContext(TodosContext);
  const [editing, setEditing] = useState<boolean>(false);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const { description, removeToDo, id } = props;

  library.add(faPen, faTrash);

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
    <li className="flex justify-between p-3 border-b last:border-none text-center text-justify">
      {editing && (
        <form onSubmit={handleSaveEdit} className="flex justify-between w-full">
          <input
            type="text"
            id="text"
            ref={todoTextInputRef}
            defaultValue={description}
            className="underline-solid border-b-2 p-1 rounded-lg grow"
          />

          <div className="grow-0 ml-2">
            <button className="border-solid border border-sky-500 rounded-lg px-2 mr-2 hover:bg-sky-500 hover:text-white flex-none">
              Save Changes
            </button>
            <button
              onClick={handleUnDoChangeClick}
              className="border-solid border border-sky-500 rounded-lg px-2 hover:bg-sky-500 hover:text-white flex-none"
            >
              Undo Changes
            </button>
          </div>
        </form>
      )}
      {!editing && description}
      {!editing && (
        <div className="ml-2 ">
          <button
            onClick={handleEditClick}
            className="text-sky-500 mr-2 hover:bg-slate-200 rounded-lg p-1"
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button
            onClick={removeToDo}
            className="text-red-600 hover:bg-slate-200 rounded-lg p-1"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </li>
  );
};

export default ToDoItem;
