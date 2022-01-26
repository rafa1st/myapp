//import { useState, useContext } from 'react';
import "../style/Button.css";

export default function ButtonIncrease({setProps, value}) {
  const increment = () => {setProps(value+1)};
  return (
    <>
      <p>esse é o valor que ele pega = {value}</p>
      <p>esse é o valor do counter = </p>
      <button
        type="button"
        className="buttonIncrease"
        onClick={increment}
      >
        +
      </button>
    </>
  );
}