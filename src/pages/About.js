import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="main">
        <div className="sidebar-left">
        <Link to="/">Home</Link>
      </div>
      <div className="main-page">
        <h2>About</h2>
        <p>Text about me</p>
      </div>
      <div className="sidebar-right">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default About;
