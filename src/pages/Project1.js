import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Project1 = () => {
  return (
    <motion.div
      className="project-main"
      initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          ease: [0.61, 1, 0.88, 1],
        },
      }}
    >
      <div className="project-text">
        <h2>Applied</h2>
        <h3>
          Technologies: React JS, Express JS, HTML/CSS, JavaScript, MongoDB and
          Mongoose, Heroku, Netlify
        </h3>
        <h3>Role: Project Manager</h3>
        <div className="buttons">
          <a
            href="https://appliedjobtracker.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Live Site</button>
          </a>
          <a
            href="https://github.com/peterkimm/applied_frontend"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>
        </div>
        <p>Job application tracker with easy follow-up capabilities</p>
        <p>
          Full CRUD application built with a React JS frontend and Express JS
          and MongoDB backend. Built a mobile-first application for ease of use
          using SASS and CSS, with ability to filter jobs by time applied and
          are cooler coded for recognition. Utilized Google Firebase for login
          and session capabilities.
        </p>
        <p>
          I acted as Project Manager for a team of four, operating as task
          delegator, debugging expert and vision manager.
        </p>
        <a
          href="https://appliedjobtracker.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-images">
            <img
              src="https://github.com/laurakelly1/portfolio-frontend/blob/main/src/images/applied-d-1.png?raw=true"
              alt="Desktop screenshot"
              className="desktop"
            ></img>
            <div className="mobile-images">
              <img
                src="https://github.com/laurakelly1/portfolio-frontend/blob/main/src/images/applied-m-1.png?raw=true"
                alt="Mobile screenshots"
                className="mobile"
              ></img>
            </div>
          </div>
        </a>
      </div>
      <div className="next">
        <Link to="/flowerbox"><i className="fa-solid fa-angles-right"></i></Link>
      </div>
    </motion.div>
  );
};

export default Project1;
