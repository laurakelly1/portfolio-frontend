import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

const Projects = () => {
  return (
    <motion.div className="main"
    initial={{ width:0 }}
    animate={{ width:'100%', transition:{duration: 1, delay:0}}}
    exit={{width:0, transition:{duration: 1, delay:0}}}>
      <div className="sidebar-left">
        <Link to="/" className="home-nav">
          Home
        </Link>
        <Link to="/about" className="about-nav">
          About
        </Link>
      </div>
      <div className="projects-page">
        <h2>Projects</h2>
        <p>Project 1</p>
        <p>Project 2</p>
        <p>Project 3</p>
        <p>Project 4</p>
      </div>
      <div className="sidebar-right">
        <Link to="/projects" className="project-nav">
          Projects
        </Link>
        <Link to="/skills" className="skills-nav">
          Skills
        </Link>
        <Link to="/contact" className="contact-nav">
          Contact
        </Link>
      </div>
    </motion.div>
  );
};

export default Projects;
