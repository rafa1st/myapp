import { Outlet, Link } from "react-router-dom";

import "../style/Layout.css";

const Layout = () => {
  return (
    <>
      <nav className="NavBar">
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
          <li style={{float: "right", background: "#6495ed"}}>
            <Link to="#">Menu</Link>
          </li>
        </ul>
      </nav>
      
      <Outlet />
    </>
  );
};

export default Layout;
