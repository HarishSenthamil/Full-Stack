// TodoList.js
import React, { useState } from 'react';
import AddTodo from './AddTodo';

const TodoList = () => {
  // State to hold the list of to-dos
  const [todos, setTodos] = useState([]);

  // Function to add a new to-do item
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo onAddTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
