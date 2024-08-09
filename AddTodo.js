import React, { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
  // State to hold the current value of the input field
  const [inputValue, setInputValue] = useState('');

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // Pass the new to-do item to the parent component
      onAddTodo(inputValue);
      // Clear the input field
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;