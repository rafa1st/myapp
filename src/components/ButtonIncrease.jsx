import { useState } from 'react';
import "../style/Button.css";

export default function ButtonIncrease(props) {
  const value = props.value;
  const [ counter, setCounter ] = useState(value);
  return (
    <>
    <p>esse é o valor que ele pega = {value}</p>
    <p>esse é o valor do counter = {counter}</p>
    <button
      type="button"
      className="buttonIncrease"
      onClick={ () => setCounter(counter + 1)}>
      Adicionar +
    </button>
    </>
  );
}
