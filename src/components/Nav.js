import { HashLink as Link } from "react-router-hash-link";
const Nav = () => {
  return (
    <div className="nav">
      <div className="navbar">
        <Link to="/#about" smooth>
          About
        </Link>
        <Link to="/#projects" smooth>
          Projects
        </Link>
        <Link to='/#skills' smooth>
          Skills
        </Link>
        <Link to="/#contact" smooth>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Nav;
