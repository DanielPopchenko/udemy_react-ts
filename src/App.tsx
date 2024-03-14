import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
// ! importing our interface
import { Todo } from './components/todo.model';

// FC - functional component
const App: React.FC = () => {
  // ! <Todo[]> - we are saying to useState to expect thiskind of value
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prevState) => [
      ...prevState,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      // ! here we are returning filtered array
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
};

export default App;
