import { useState } from 'react';
import "../style/Counter.css";
import ButtonIncrease from "./ButtonIncrease";
import ButtonDecrease from "./ButtonDecrease";
import ButtonReset from "./ButtonReset";

function Counter() {  
  const [ counter ] = useState(250);

  return (
    <>
      <h1>Contador: {counter}</h1>
      <ButtonIncrease value={ counter }/>
      <ButtonReset value={ counter }/>
      <ButtonDecrease value={ counter }/>
    </>
  );
}

export default Counter;
