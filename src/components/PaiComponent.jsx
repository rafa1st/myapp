import { useState } from "react";
import Select from "./Select";
import '../style/Body.css';

export default function PaiComponent() {
  const [pai, setPai] = useState("");

  return (
    <div className="Body">
      <p>PaiComponent</p>
      <h2>aqui? {pai}</h2>
      <Select setProps={setPai} value={pai} />
    </div>
  );
}
