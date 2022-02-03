export default function Nota(props) {
  return (
    <div>
      <legend>Informe a nota: {props.id}</legend>
      <input
        type="text"
        id={props.id}
        value={props.nota}
        onChange={props.onChange}
      />
    </div>
  );
}
