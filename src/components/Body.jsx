import { useState } from "react";

export default function Body() {
  const [form, setForm] = useState({
    nome: "",
    curso: "",
    ano: "",
  });

  const handleChange = (e) => {
    if (e.target.getAttribute("name") === "nome") {
      setForm({ nome: e.target.value, curso: form.curso, ano: form.ano });
    } else if (e.target.getAttribute("name") === "curso") {
      setForm({ nome: form.nome, curso: e.target.value, ano: form.ano });
    } else if (e.target.getAttribute("name") === "ano") {
      setForm({ nome: form.nome, curso: form.curso, ano: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nome: form.nome, curso: form.curso, ano: form.ano });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />{" "}
        <br />
        <label>Curso:</label>
        <input
          type="text"
          name="curso"
          value={form.curso}
          onChange={handleChange}
        />{" "}
        <br />
        <label>Ano:</label>
        <input
          type="text"
          name="ano"
          value={form.ano}
          onChange={handleChange}
        />{" "}
        <br />
        <input type="submit" />
        <br />
        <p>Nome digitado: {form.nome}</p>
        <p>Curso digitado: {form.curso}</p>
        <p>Ano digitado: {form.ano}</p>
      </form>
    </div>
  );
}
