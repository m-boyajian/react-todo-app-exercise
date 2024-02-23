import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm'

const TodoList = () => {
  console.log("TodoList rendered");
  const INITIAL_STATE= [];
  const [todos, setTodos] = useState(INITIAL_STATE);

  const addTodo = (newTodo) => {
    console.log("New Todo:", newTodo);
    setTodos(todos => [...todos, { id: uuidv4(), ...newTodo }]);
  }
  
  const removeTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      <div>
        {todos.map(({ id, task }) => 
            <Todo key={id} task={task} removeTodo={() => removeTodo(id)} />)}
      </div>
    </div>
  );
};

export default TodoList;