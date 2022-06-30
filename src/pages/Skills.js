import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="main">
      <div className="sidebar-left">
        <Link to="/" className="home-nav">Home</Link>
        <Link to="/about" className="about-nav">About</Link>
        <Link to="/projects" className="project-nav">Projects</Link>
      </div>
      <div className="skills-page">
        <h2>Skills</h2>
        <p>Languages</p>
        <p>Stylesheets</p>
        <p>Soft skills</p>
      </div>
      <div className="sidebar-right">
        <Link to="/skills" className="skills-nav">Skills</Link>
        <Link to="/contact" className="contact-nav">Contact</Link>
      </div>
    </div>
  );
};

export default Skills;
