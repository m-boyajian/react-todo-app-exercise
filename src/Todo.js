import React from 'react';
import './Todo.css';

const Todo = ({ task, removeTodo }) => {
  return (
    <div className="todo">
      <span>{task}</span>
      <button onClick={removeTodo}>X</button>
    </div>
  );
};

export default Todo;
