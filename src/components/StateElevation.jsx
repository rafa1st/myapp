import { useState } from "react";
import Nota from "./Nota";
import Resultado from "./Resultado";

export default function StateElevation() {
  const [notas, setNotas] = useState({
    nota1: 0,
    nota2: 0,
    nota3: 0,
    nota4: 0,
  });
  /*  const [nota1, setNota1] = useState();
  const [nota2, setNota2] = useState();
  const [nota3, setNota3] = useState();
  const [nota4, setNota4] = useState(); */

  const handleChange = (e) => {
    if (e.target.getAttribute("id") === "1") {
      setNotas({
        nota1: e.target.value,
        nota2: notas.nota2,
        nota3: notas.nota3,
        nota4: notas.nota4,
      });
    } else if (e.target.getAttribute("id") === "2") {
      setNotas({
        nota1: notas.nota1,
        nota2: e.target.value,
        nota3: notas.nota3,
        nota4: notas.nota4,
      });
    } else if (e.target.getAttribute("id") === "3") {
      setNotas({
        nota1: notas.nota1,
        nota2: notas.nota2,
        nota3: e.target.value,
        nota4: notas.nota4,
      });
    } else if (e.target.getAttribute("id") === "4") {
      setNotas({
        nota1: notas.nota1,
        nota2: notas.nota2,
        nota3: notas.nota3,
        nota4: e.target.value,
      });
    };
  };

  const total =
    parseFloat(notas.nota1) +
    parseFloat(notas.nota2) +
    parseFloat(notas.nota3) +
    parseFloat(notas.nota4);

  return (
    <>
      <h1>State Elevation</h1>
      <Nota id={1} nota={notas.nota1} onChange={handleChange} />
      <Nota id={2} nota={notas.nota2} onChange={handleChange} />
      <Nota id={3} nota={notas.nota3} onChange={handleChange} />
      <Nota id={4} nota={notas.nota4} onChange={handleChange} />
      <Resultado somaNotas={total} />
    </>
  );
}
