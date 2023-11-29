import CompleteIcon from "../TodoIcon";
import DeleteIcon from "../TodoIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        CompleteIcon={props.completed}
        onComplete={props.onComplete}
      />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export default TodoItem;
