export default function Resultado(props) {
  return (
    <>
      <p>Soma das notas: {props.somaNotas}</p>
      <p>{props.somaNotas >= 60 ? "Aprovado" : "Reprovado"}</p>
    </>
  );
}
