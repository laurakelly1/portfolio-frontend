import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: {
      ocapcity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      className="main"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="sidebar-left">
        <Link to="/" className="home-nav">
          Home
        </Link>
      </div>
      <div className="about-page">
        <h2>About</h2>
        <p>
          Hello! My name is Laura. I recently completed a coding boot camp where
          I spent time learning skills necessary for software engineering. I
          enjoyed the fast-paced learning environment and the opportunity to
          spend time creating content that interests me. My formal training is
          in Pure Mathematics, and prior to this career change I was a
          mathematics publisher. My love of math drew me to a career in coding
          due to the logical problem-solving aspects. I also am excited to
          transfer my design skills to this new medium.
        </p>
        <img src='src/images/profile_pic.JPG' alt="portrait laura kelly"/>
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
