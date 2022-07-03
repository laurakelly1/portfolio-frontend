import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const About = () => {
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
      </div>
      <div className="about-page">
        <h2>About</h2>
        <p>Text about me</p>
      </div>
      <div className="sidebar-right">
        <Link to="/about" className="about-nav">
          About
        </Link>
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

export default About;
