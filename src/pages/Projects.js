import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

const Projects = () => {
    const containerVariants = {
        hidden: {
            ocapcity: 0,
            x: '-100vw'
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            x: '-100vw',
            transition: { ease: 'easeInOut'}
        }
    }
  return (
    <motion.div className="main"
    variants = {containerVariants}
    initial='hidden'
    animate='visible'
    exit='exit'>
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
