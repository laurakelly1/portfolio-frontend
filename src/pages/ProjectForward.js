import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectForward = () => {
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
      <div className="previous"></div>
      <div className="project-text">
        <h2>Project Forward</h2>
        <h3>
          Technologies: Python, Django, PostgreSQL, Materialize, HTML/CSS,
          Javascript, Google Fonts, Heroku
        </h3>
        <h3>Role: Full Stack Developer</h3>
        <div className="buttons">
          <a
            href="https://project-forward.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Live Site</button>
          </a>
          <a
            href="https://github.com/laurakelly1/project-forward"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>
        </div>
        <p>Web-design companion to help you track color codes and other design data</p>
        <p>
        At Project Forward, we've designed the perfect app to log all your creative tools. Never forget a color code again!
        </p>
        <p>
           
        </p>
        <a
          href="https://project-forward.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-images">
            <img
              src="https://github.com/laurakelly1/portfolio-frontend/blob/main/src/images/projectforward-d-1.png?raw=true"
              alt="Desktop screenshot"
              className="desktop"
            ></img>
            <div className="mobile-images">
              <img
                src="https://github.com/laurakelly1/portfolio-frontend/blob/main/src/images/projectforward-m-1.png?raw=true"
                alt="Mobile screenshots"
                className="mobile"
              ></img>
            </div>
          </div>
        </a>
      </div>
      <div className="next">
        <Link to="/applied">
          <i className="fa-solid fa-angles-right"></i>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectForward;
