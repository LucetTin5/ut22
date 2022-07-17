import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Headers = () => {
  return (
    <header>
      <Link to="/">
        <i className="fas fa-home"></i>
      </Link>
      <Navbar />
    </header>
  );
};

export default Headers;
