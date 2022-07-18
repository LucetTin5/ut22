import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../App";
import logout from "../functions/signout";

const Navbar = () => {
  const isLogin = useContext(LoginContext);
  useEffect(() => {}, [isLogin]);
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
            <li>
              <Link to="/" onClick={logout}>
                Logout
              </Link>
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
