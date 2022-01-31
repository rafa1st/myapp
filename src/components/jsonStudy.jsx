import { useState } from "react";

const options = { msg1: "message1", msg2: "message2", msg3: "message3 teste de mensagem colocando muita coisa aqui" };

export default function ThirteenFriday() {
  const [message, setMessage] = useState(options);
  

  /*const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
 */
  return (
    <>
      <h1>Json test</h1>
      <p>{message.msg3}</p>
      {/*       <select name="select" value={message} onChange={handleChange}>
        <option value="">Selecione uma mensagem</option>
        {options.map((message) => (
          <option key={message.items} value={message.text}>
            {message}
          </option>
        ))}
      </select>
 */}
    </>
  );
}
