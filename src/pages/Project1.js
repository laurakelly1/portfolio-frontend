import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Project1 = () => {
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
      <h1>Applied</h1>
      <h3>Technologies: React JS, Express JS, HTML/CSS, JavaScript, MongoDB and Mongoose, Heroku, Netlify</h3>
      <h3>Role: Project Manager</h3>
      <a href="https://appliedjobtracker.netlify.app/" target="_blank"><button>Live Site</button></a>
      <a href='https://github.com/peterkimm/applied_frontend' target="_blank"><button>GitHub</button></a>
      
      <p>
      Job application tracker with easy follow-up capabilities 
        </p>
        <p>
        Full CRUD application built with a React JS frontend and Express JS and MongoDB backend. Built a mobile-first application for ease of use using SASS and CSS, with ability to filter jobs by
time applied and are cooler coded for recognition. Utilized Google Firebase for login and session capabilities.
        </p>
        <p>
        I acted as Project Manager for a team of four, operating as task delegator, debugging expert and vision manager.
      </p>
      <img alt='desktop screenshot'></img>
      <br/>
      <img alt='Mobile screenshots'></img>
      <br/>
      <Link to='/flowerbox'>Next Project</Link>
    </motion.div>
  );
};

export default Project1;
