import { Link } from "react-router-dom";

function NavMenu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About</Link>
        </li>
        <li>
          <Link to="/users">Users List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
