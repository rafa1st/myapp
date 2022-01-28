import { useContext } from "react";
import CounterContext from "../context/Context";
//styles
import "../style/Button.css";

export default function ButtonReset() {
  //eslint-disable-next-line
  const [value, setValue] = useContext(CounterContext);

  const reset = () => {
    setValue(0);
  };
  return (
    <button type="button" className="buttonReset" onClick={reset}>
      reset
    </button>
  );
}
