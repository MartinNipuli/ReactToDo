import React from "react";
import Button from "react-bootstrap/Button"

function Todoinput ({ todo, setTodo, addTodos }) {

  const handleChange = (event) => {
    setTodo(event.target.value)
  }

  return (
    <div>
      <input 
        name="todo"
        type="text" 
        value={todo} 
        placeholder="Enter todo"
        onChange={handleChange}
      />
      <Button variant="primary" onClick={addTodos}>Add</Button>
    </div>
  );
}

export default Todoinput;