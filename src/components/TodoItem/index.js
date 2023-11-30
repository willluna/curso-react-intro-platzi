import React from "react";
import TodoIcon from "../TodoIcon"; // Importa el componente TodoIcon

import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <TodoIcon type="check" color="green" onClick={props.onComplete} />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <TodoIcon type="delete" color="red" onClick={props.onDelete} />
    </li>
  );
}

export default TodoItem;
