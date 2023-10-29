import "./App.css"
import React, { useState } from "react"
import Todoinput from './components/Todoinput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodos = () => {
    if (todo === "") return

    setTodos([...todos, todo])
    setTodo("")
  };

  const deleteTodo = (rowIndex) => {
    setTodos(todos.filter((_, index) => index !== rowIndex)) 
  };
  
  return (
    <div className="Container">
      <h1>
        Todo List
      </h1>
      <div>
        <Todoinput todo={todo} setTodo={setTodo} addTodos={addTodos}/>
      </div>
      <div>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
      </div>
    </div>
 ) 
}

export default App;
