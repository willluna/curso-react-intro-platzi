import { ReactComponent as CHECKSVG } from "./check.svg";
import { ReactComponent as DELETESVG } from "./delete.svg";

const iconTypes = {
  check: <CHECKSVG />,
  delete: <DELETESVG />,
};

function TodoIcon({ type }) {
  return (
    <span className={`Icon Icon-svg Icon-${type}`}>{iconTypes[type]}</span>
  );
}

export default TodoIcon;
