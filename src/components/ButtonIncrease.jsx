import { useContext } from "react";
import CounterContext from "../context/Context";
//styles
import "../style/Button.css";

export default function ButtonIncrease() {
  const [value, setValue] = useContext(CounterContext);

  const increment = () => {
    setValue(value + 1);
  };
  return (
    <>
      <p>esse é o valor que ele pega = {value}</p>
      <button type="button" className="buttonIncrease" onClick={increment}>
        +
      </button>
    </>
  );
}
