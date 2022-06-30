import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="main">
      <div className="sidebar-left">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
      <div className="main-page">
        <h2>Skils</h2>
        <p>Languages</p>
        <p>Stylesheets</p>
        <p>Soft skills</p>
      </div>
      <div className="sidebar-right">
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Skills;
