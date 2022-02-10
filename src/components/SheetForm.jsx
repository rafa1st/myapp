export default function SheetForm() {
  const result = []; //const que vai armazenar a array com os dados
  const line = 41; //const que dá o valor inicial a linha
  const loop = 30; //const que dá a quantidade de ciclos do laço
  const columnA = "(E"; //const referente a coluna A
  const columnB = "($I"; //const referente a coluna B
  let lineUp = 0; //variável que aumenta o valor da linha inicial

  for (let i = 0; i < loop; i++) {
    lineUp = line + i;
    result.push(columnA + lineUp + ")*" + columnB + lineUp + ")+");
  }

  return (
    <div>
      <h1>Form para Planilha Excel</h1>
      <p>{result}</p>
      <ul>
        {result.map((number) => (
          <li key={number.toString()}>{number}</li>
        ))}
      </ul>
    </div>
  );
}
