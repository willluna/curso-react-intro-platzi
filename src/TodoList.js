function TodoList(props) {
  return (
    <ul>
      {props.children.map((child, index) => (
        <li key={index}>{child}</li>
      ))}
    </ul>
  );
}

export default TodoList;
