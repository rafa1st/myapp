import { useState } from "react";
import Select from "./Select";


export default function PaiComponent() {
  const [pai, setPai] = useState("");

  return (
    <>
      <p>PaiComponent</p>
      <h2>aqui? {pai}</h2>
      <Select setProps={setPai} value={pai} />
    </>
  );
}
