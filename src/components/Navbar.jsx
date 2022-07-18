import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../App";

const Navbar = () => {
  const isLogin = useContext(LoginContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/search">
            <i className="fas fa-search"></i>
          </Link>
        </li>
        {isLogin ? (
          <>
            <li>
              <Link to="/videos/upload">Upload Video</Link>
            </li>
            <li>
              <Link to="/user/profile">See profile</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/join"> Join</Link>
            </li>
            <li>
              <Link to="/Login"> Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
