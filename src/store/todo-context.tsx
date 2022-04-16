import { useState, createContext, useEffect } from "react";
import React from "react";
import { useLocalStorage } from 'usehooks-ts'

type TodosContextObj = {
  items: Todo[];
  addToDo: (text: string) => void;
  removeToDo: (id: string) => void;
  editToDo: (id: string, description: string) => void;
};

type Todo = {
  description: string;
  id: string;
};

type Props = {
  children?: React.ReactNode;
};

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addToDo: () => {},
  removeToDo: (id: string) => {},
  editToDo: (id: string, description: string) => {},
});

const TodosContextProvider: React.FC<Props> = (props) => {
  const [toDos, setToDos] = useLocalStorage<Todo[]>('todos', []);
//   const toDosStorage = useReadLocalStorage<Todo[]>('todos');
  
//   const [storageToDos, setStorageToDos] = useLocalStorage('todos', '')

//   useEffect(() => {
//     if(toDosStorage) setToDos(toDosStorage)
//   }, [toDosStorage])

  const addTodoHandler = (description: string) => {
    const newToDo: Todo = {
      id: new Date().toISOString(),
      description,
    };

    setToDos((prevTodos) => {
      return prevTodos.concat(newToDo);
    });
  };

  const removeTodoHandler = (id: string) => {
    setToDos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const editTodoHandler = (id: string, description: string) => {
    const newToDoList: Todo[] = toDos.map((todo) => {
      if (todo.id === id) {
        return {
          id,
          description,
        };
      }
      return todo;
    });
    setToDos(newToDoList);
  };

  const contextValue: TodosContextObj = {
    items: toDos,
    addToDo: addTodoHandler,
    removeToDo: removeTodoHandler,
    editToDo: editTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
