import React from 'react';
import './TodoList.css';

interface TodoListProps {
  items: { id: string; text: string }[];
  onRemoveTodo: (id: string) => void;
}

// ! <TodoListProps> - generic
const TodoList: React.FC<TodoListProps> = ({ items, onRemoveTodo }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => onRemoveTodo(todo.id)}>Delete todo</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
