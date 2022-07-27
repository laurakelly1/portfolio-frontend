import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Project2 = () => {
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
      <div className="previous">
        <Link to="/applied"><i className="fa-solid fa-angles-left"></i></Link>
      </div>
      <div className="project-text">
        <h2>Flowerbox</h2>
        <h3>
          Technologies: React JS, SASS, CSS Animations, Google Fonts, IonIcons
        </h3>
        <h3>Role: Frontend Developer</h3>
        <div className="buttons">
          <a
            href="https://flower-box.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Live Site</button>
          </a>
          <a
            href="https://github.com/laurakelly1/flowerbox"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>
        </div>
        <p>Frontend florist website with animation</p>
        <p>
          Implemented pages and components to efficiently built the website in
          React JS. Styled using SASS and CSS animations, including a bounce
          effect on the title.
        </p>
        <p>
          Fully responsive and interactive, designed with the user's experience
          in mind.
        </p>
        <a
          href="https://flower-box.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-images">
            <img
              src="https://github.com/laurakelly1/portfolio-frontend/blob/main/src/images/flowerbox-d-1.png?raw=true"
              alt="Desktop screenshot"
              className="desktop"
            ></img>
            <div className="mobile-images">
              <img
                src="https://github.com/laurakelly1/portfolio-frontend/blob/main/src/images/flowerbox-m-1.png?raw=true"
                alt="Mobile screenshots"
                className="mobile"
              ></img>
            </div>
          </div>
        </a>
      </div>
      <div className="next">
        <Link to="/plantanullius"><i className="fa-solid fa-angles-right"></i></Link>
      </div>
    </motion.div>
  );
};

export default Project2;
