import { Outlet, Link } from "react-router-dom";

import "../style/BasicStyle.css";

const Layout = () => {
  return (
    <>
      <nav className="BasicStyle">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Testpage">Test Page</Link>
          </li>
          <li>
            <Link to="/todo">TodoApp</Link>
          </li>
          <li>
            <Link to="/whatsapp">Whatsapp</Link>
          </li>
          <li>
            <Link to="/select">Select</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>            
          </li>
          <li>
            <Link style={{float: "right"}}to="#">Menu</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export default Layout;
