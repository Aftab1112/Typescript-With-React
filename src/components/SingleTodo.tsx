import React, { useEffect, useRef, useState } from "react";
import { Todo } from "./model";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { MdOutlineDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id! == id));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo(e.target.value);
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="flex items-center justify-center w-full md:w-[40%] font-semibold  h-[55%]  rounded-lg p-5 mt-4  bg-[url('https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg')] bg-cover bg-center"
      onSubmit={(e: React.FormEvent) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input ref={inputRef} value={editTodo} onChange={onChange} />
      ) : todo.isDone ? (
        <s className="flex-1 p-1 text-xl border-none ">{todo.todo}</s>
      ) : (
        <span className="flex-1 p-1 text-xl border-none ">{todo.todo}</span>
      )}

      <div className="flex">
        <span
          className="icons"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <FaRegEdit />
        </span>
        <span className="icons" onClick={() => handleDelete(todo.id)}>
          <RiDeleteBin3Fill />
        </span>
        <span className="icons" onClick={() => handleDone(todo.id)}>
          <MdOutlineDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
