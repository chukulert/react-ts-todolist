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
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewToDo;
