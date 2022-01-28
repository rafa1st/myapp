import { useState } from "react";
import CounterContext from "../context/Context";
//components
import ButtonIncrease from "./ButtonIncrease";
import ButtonDecrease from "./ButtonDecrease";
import ButtonReset from "./ButtonReset";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={[counter, setCounter]}>
      <h1>Contador: {counter}</h1>
      <ButtonIncrease />
      <ButtonReset />
      <ButtonDecrease />
    </CounterContext.Provider>
  );
}
