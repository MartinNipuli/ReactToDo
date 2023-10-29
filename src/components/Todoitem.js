import React from "react";
import Button from "react-bootstrap/Button"

function Todoitem({ todo, index, deleteTodo }) {
    return (
      <>
        <tr key={index}>
          <td style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <div style={{display: "flex"}}>
              <div>
                <input type="checkbox"/>
              </div>
              <div>
                {todo}
              </div>
            </div>
            <div>
              <Button variant="danger" onClick={() => deleteTodo(index)}>
                Delete
              </Button>
            </div>
          </td>
        </tr>
      </>
    )
}

export default Todoitem;