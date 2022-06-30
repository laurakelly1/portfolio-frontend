import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div className="main">
        <div className="sidebar-left">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="main-page">
        <h2>Projects</h2>
        <p>Project 1</p>
        <p>Project 2</p>
        <p>Project 3</p>
        <p>Project 4</p>
      </div>
      <div className="sidebar-right">
        
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
    )
}

export default Projects;