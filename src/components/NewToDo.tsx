import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todo-context";

const NewToDo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const toDosCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) return;

    toDosCtx.addToDo(enteredText);
    todoTextInputRef.current!.value = "";
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex justify-between border-solid border-2 border-grey rounded-lg p-5"
    >
      <input
        type="text"
        id="text"
        ref={todoTextInputRef}
        placeholder="Add a new Todo!"
        className="p-2 underline-solid border-b-2 grow rounded-lg"
      />
      <button className="border-solid border border-sky-500 rounded-lg p-2 ml-2 hover:bg-sky-500 hover:text-white flex-none">
        Add Todo
      </button>
    </form>
  );
};

export default NewToDo;
