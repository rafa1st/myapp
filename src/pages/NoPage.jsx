import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div>
      <h1>404</h1>
      <ul>
        <li>
          <Link to="/">voltar</Link>
        </li>
      </ul>
    </div>
  );
};

export default NoPage;
