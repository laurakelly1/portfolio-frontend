import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h4>Laura Kelly</h4>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
