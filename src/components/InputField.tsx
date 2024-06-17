import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  return (
    <form className="flex w-[90%] relative items-center" onSubmit={handleAdd}>
      <input
        className="w-[95%] md:w-full rounded-full py-5 px-8 text-2xl transition duration-200 border-none shadow-lg focus:shadow-xl outline-none"
        type="input"
        placeholder="Enter a task"
        value={todo}
        onChange={onChange}
      />
      <button
        className="absolute w-12 h-12 mr-10  md:m-3 rounded-full right-0 border-none text-xl font-semibold bg-[#2f74c0] text-white transition duration-200 shadow-lg hover:bg-[#388ae2] active:scale-[0.3]"
        type="submit"
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
