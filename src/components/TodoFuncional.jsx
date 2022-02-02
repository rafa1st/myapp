import { useState } from "react";

export default function TodoFuncional() {
  const { state, setState } = useState({});

  const handleChange = (e) => {
    const name = e.target.items;
    const value = e.target.text;
    setState((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.text.length === 0) {
      return;
    }
    const newItem = {
      text: state.text,
      id: Date.now(),
    };
    setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  };

  return (
    <div>
      <h1>Todo-App(funcional)</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">O que precisa ser feito?</label>
        <br />
        <input
          id="new-todo"
          name="text"
          OnChange={handleChange}
          value={state.text || ""}
        />
        <button type="submit">adicionar {state.items.length + 1}</button>
      </form>

      <h3>Tarefas</h3>

      <ol>
        {state.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ol>
    </div>
  );
}
