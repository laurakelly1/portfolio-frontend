import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Contact = () => {
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
