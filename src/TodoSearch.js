import "./TodoSearch.css";

function TodoSearch() {
  return (
    <input
      placeholder="Cortar Cebolla"
      className="TodoSearch"
      onChange={(event) => {
        console.log("Escribiste en el todoSearch");
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}
    />
  );
}

export default TodoSearch;
