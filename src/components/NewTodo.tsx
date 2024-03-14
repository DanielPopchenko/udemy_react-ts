import React, { useRef } from 'react';
import './NewTodo.css';

type NewTodoProps = {
  onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  // <HTMLInputElement> - generic type, (null) - default value.
  const textRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // !  textRef.current! here we are saying that textRef.current won`t definately be null
    const enteredText = textRef.current!.value;
    onAddTodo(enteredText);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Todo text
        <input type="text" ref={textRef} />
      </label>
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
