import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Project4 = () => {
  return (
    <motion.div className="project-main"
    initial={{opacity: 0, y: 8 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.61, 1, 0.88, 1],
      }
    }}
  >
      <h1>Still Wall</h1>
      <h3>Technologies</h3>
      <h3>Role</h3>
      <button>Live Site</button>
      <button>GitHub</button>
      <p>Line about the app</p>
      <p>Functionality of the app/ how it solves a problem</p>
      <p>My methodology.</p>
      <img alt="desktop screenshot"></img>
      <br />
      <img alt="Mobile screenshots"></img>
      <br/>
      <Link to='/plantanullius'>Previous Project</Link>
    </motion.div>
  );
};

export default Project4;
