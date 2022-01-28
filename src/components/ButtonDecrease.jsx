import { useContext } from "react";
import CounterContext from "../context/Context";
//styles
import "../style/Button.css";

export default function ButtonDecrease() {
  const [value, setValue] = useContext(CounterContext);

  const decrement = () => {
    setValue(value - 1);
  };
  return (
    <button type="button" className="buttonDecrease" onClick={decrement}>
      -
    </button>
  );
}
