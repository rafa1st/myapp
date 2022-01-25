import { useState } from "react";
import "../style/DefaultStyle.css";

export default function MyComponent() {
  const [field, setField] = useState("Frase inicial");

  return (
    <div className="BasicStyle">
      <p>Nome {field}</p>
      <button
        type="button"
        onClick={() => setField("outra frase a ser mostrada.")}
      >
        Troca o Campo
      </button>
    </div>
  );
}
