import { HashLink as Link } from "react-router-hash-link";
import Pdf from "../LAURAKELLY-RESUMEPDF.pdf"

const Nav = () => {
  return (
    <div className="nav">
      <div className="navbar">
        <Link to="/#home" smooth>
          Home
        </Link>
        <Link to="/#about" smooth>
          About
        </Link>
        <Link to="/#projects" smooth>
          Projects
        </Link>
        <Link to="/#skills" smooth>
          Skills
        </Link>
        <Link to="/#contact" smooth>
          Contact
        </Link>
        <a href={Pdf} target="_blank">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Nav;
