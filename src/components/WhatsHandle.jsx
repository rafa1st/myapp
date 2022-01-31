import { useState } from "react";

export default function WhatsHandle() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(
      `https://api.whatsapp.com/send?phone=5551${inputs.phone}&text=${inputs.message}&source=&data="`
    );
  };

  return (
    <div>      
      <form onSubmit={handleSubmit}>
        <label>Número:</label>
        <input
          type="number"
          name="phone"
          value={inputs.phone || ""}
          placeHolder="Insira o número"
          onChange={handleChange}
        />
        <label>Mensagem:</label>
        <input
          type="text"
          name="message"
          value={inputs.message || ""}
          placeHolder="Insira seu texto"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
