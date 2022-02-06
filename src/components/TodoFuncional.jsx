import { useState } from "react";

export default function TodoFuncional() {
  const [task, setTask] = useState({
    id: [],
    text: "",
  });

  const handleChange = (e) => {
    setTask({ text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

        <button>Adicionar # {task.id}</button>
        <p>Tarefas:</p>
        <ol>
          <li>
            {task.text} {task.id}
          </li>
          <li>tarefa2</li>
          <li>tarefa3</li>
        </ol>
      </form>
    </div>
  );
}
