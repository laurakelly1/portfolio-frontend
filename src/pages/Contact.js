import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Contact = () => {
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
        <Link to="/projects" className="project-nav">
          Projects
        </Link>
        <Link to="/skills" className="skills-nav">
          Skills
        </Link>
      </div>
      <div className="contact-page">
        <h2>Contact</h2>
        <p>Email</p>
        <p>GitHub</p>
        <p>LinkedIn</p>
      </div>
      <div className="sidebar-right">
        <Link to="/contact" className="contact-nav">
          Contact
        </Link>
      </div>
    </motion.div>
  );
};

export default Contact;
