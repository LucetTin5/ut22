import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/search">
            <i className="fas fa-search"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
