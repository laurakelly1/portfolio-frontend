import { HashLink as Link} from "react-router-hash-link";
const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <Link to="#home" smooth>Home</Link>
        <Link to="#about" smooth>About</Link>
        <Link to="#projects" smooth>Projects</Link>
        <Link to="#skills" smooth>Skills</Link>
        <Link to="#contact" smooth>Contact</Link>
      </div>
    </div>
  );
};

export default Header;
