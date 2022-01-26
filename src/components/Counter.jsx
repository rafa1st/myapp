import { useState, createContext } from "react";
import "../style/Counter.css";
import ButtonIncrease from "./ButtonIncrease";
import ButtonDecrease from "./ButtonDecrease";
import ButtonReset from "./ButtonReset";

const CounterContext = createContext();

function Counter() {
  const [counter, setCounter] = useState(250);

  return (
    <CounterContext.Provider value={counter} setProps={setCounter}>
      <h1>Contador: {counter}</h1>
      <ButtonIncrease />
      <ButtonReset />
      <ButtonDecrease />
    </CounterContext.Provider>
  );
}

export default Counter;
