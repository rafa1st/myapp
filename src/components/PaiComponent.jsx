import { useState } from "react";
import Select from "./Select";
import '../style/Body.css';

export default function PaiCompnent() {
  const [pai, setPai] = useState("");

  return (
    <div className="Body">
      <p>PaiComponent</p>
      <h1>{pai}</h1>
      <Select setProps={setPai} value={pai} />
    </div>
  );
}
