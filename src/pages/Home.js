import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
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
      <div className="home-page">
        <div className="home-top">
          <h4>Norfolk, Virginia</h4>
          <h4>Keywords</h4>
          <h4>Smiley Face</h4>
        </div>
        <div className="home-center">
          <div className="title-upper">
            <h2 className="heading1">CREATIVE</h2>
            <h2 className="heading1">DEVELOPER</h2>
          </div>
          <div className="title-lower">
            <h3 className="quote">
              'tiny little quote about me to draw you in'
            </h3>
            <div>
              <h2 className="heading2">LAURA</h2>
              <h2 className="heading2">KELLY</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-right">
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
        <Link to="/contact" className="contact-nav">
          Contact
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
