import { useState } from "react";
import messages from "../messages.json";

const messageList = messages;

export default function ThirteenFriday() {
  const [message, setMessage] = useState("sem mensagem");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(message);
  };

  return (
    <>
      <h1>Json test</h1>
      <h2>Text="{message}"</h2>
      <form onSubmit={handleSubmit}>
        <select
        name="select"
        value={message}
        onChange={handleChange}>
          <option>selecione a mensagem</option>
          {messageList.map((message) => (
            <option key={message} value={message}>
              {message}
            </option>
          ))}
        </select>
        <input type="submit" />
      </form>
    </>
  );
}
