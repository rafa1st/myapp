import { useState } from "react";

export default function TodoFuncional() {
  const [task, setTask] = useState({
    items: [],
    text: "",
  });

  const handleChange = (e) => {
    setTask({ text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      text: task.text,
      id: Date.now(),
    };
    setTask(() => ({
      items: task.items.concat(newItem),
      text: "",
    }));
  };
  return (
    <div>
      <form submit={handleSubmit}>
        <h1>Todo Funcional</h1>
        <p>O que precisa ser feito?</p>
        <input
          type="text"
          id="new-todo"
          value={task.text}
          onChange={handleChange}
        />
        <button>Adicionar # {task.items + 1}</button>
        <p>Tarefas:</p>
        <ol></ol>
      </form>
    </div>
  );
}
