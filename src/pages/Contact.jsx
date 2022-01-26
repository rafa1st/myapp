import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Call me</h1>
      <p>My contact phone</p>
      <ul>
        <li>
          <Link to="/">voltar</Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
