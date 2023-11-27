import React from "react";
import TodoIcon from "./TodoIcon";

function DeleteIcon({ OnDelete }) {
  return <TodoIcon type="delete" color="gray" onClick={OnDelete} />;
}

export default DeleteIcon;
