import { useState } from "react";

//styles
//import "../style/BasicStyle.css";

export default function Whatsapp() {
  const [data, setData] = useState({});
  const handleChange = (event) => {
    const number = event.target.number;
    const text = event.target.text;
    setData((values) => ({ ...values, [number]: text }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(
      `https://api.whatsapp.com/send?phone=5551&text=&source=&data="`
    );
  };

  return (
    <div className="">
      <h1>hello World!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Coloque o número:
          <input
            type="text"
            name="number"
            value={data.number || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Coloque sua mensagem:
          <input
            type="text"
            name="text"
            value={data.text || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
      <p>
        "https://api.whatsapp.com/send?phone=5551{""}&text={"Olá"}
        &source=&data="
      </p>
    </div>
  );
}
