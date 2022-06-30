import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="main">
      <div className="sidebar-left">
        <Link to="/" className="home-nav">Home</Link>
        <Link to="/about" className="about-nav">About</Link>
      </div>
      <div className="projects-page">
        <h2>Projects</h2>
        <p>Project 1</p>
        <p>Project 2</p>
        <p>Project 3</p>
        <p>Project 4</p>
      </div>
      <div className="sidebar-right">
        <Link to="/projects" className="project-nav">Projects</Link>
        <Link to="/skills" className="skills-nav">Skills</Link>
        <Link to="/contact" className="contact-nav">Contact</Link>
      </div>
    </div>
  );
};

export default Projects;
