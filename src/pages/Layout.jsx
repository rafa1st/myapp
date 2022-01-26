import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/TestPage">Test Page</Link>
          </li>
          <li>
            <Link to="/todo">TodoApp</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export default Layout;
