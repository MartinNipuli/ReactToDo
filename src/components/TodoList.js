import React from "react";
import Todoitem from "./Todoitem";

function TodoList ({ todos, deleteTodo }) {
  return (
    <>
      <table style={{width: "100%"}}>
        <tbody>
          {todos.map((todo, index) => {
            return (
              <Todoitem 
                index={index}
                todo={todo}
                deleteTodo={deleteTodo}
              />
            )  
          })}
        </tbody>
      </table>
    </> 
  );
}

export default TodoList;