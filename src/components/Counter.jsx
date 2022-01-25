import { useState, createContext } from 'react';
import "../style/Counter.css";
import ButtonIncrease from "./ButtonIncrease";
import ButtonDecrease from "./ButtonDecrease";
import ButtonReset from "./ButtonReset";

const CounterContext = createContext();


function Counter() {  
  const [ counter ] = useState(250);

  return (
    <CounterContext.Provider value={counter}>
      <h1>Contador: {counter}</h1>
      <ButtonIncrease value={ counter }/>
      <ButtonReset value={ counter }/>
      <ButtonDecrease value={ counter }/>
    </CounterContext.Provider>
  );
}

export default Counter;
