export default function SheetForm() {
  const cores = [];
  let element = 1;

  for (let i = 0; i < 30; i++) {
      console.log(cores)
      cores.push(1);
      element = cores + 1;
      
      
  }

  return (
    <div>
      <h1>Hello World</h1>
      <p>Linha {element}</p>

      <ul>
        {cores.map((cores) => (
          <li key={cores.id}>{cores}</li>
        ))}
      </ul>
    </div>
  );
}
