import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Project4 = () => {
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
        <Link to="/plantanullius">
          <i className="fa-solid fa-angles-left"></i>
        </Link>
      </div>
      <div className="project-text">
        <h2>Still Wall</h2>
        <h3>
          Technologies: HTML5, CSS3, JavaScript, jQuery, Google Fonts, Art
          Institute of Chicago, Font Awesome
        </h3>
        <h3>Role: Frontend Developer</h3>
        <div className="buttons">
          <a
            href="https://laurakelly1.github.io/wall-art-app/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Live Site</button>
          </a>
          <a
            href="https://github.com/laurakelly1/wall-art-app"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>
        </div>
        <p>Test-driving art on your living room wall</p>
        <p>
          There are currently no artworks hanging in my home! Along with the
          interior design commitment issues I have, I struggled to imagine the
          chosen artwork bringing my living room alive. Enter: Still Wall. This
          website allows users to search through the Art Institute of Chicago's
          database and see their chosen image displayed on a mockup of a wall at
          home. It makes choosing easy!
        </p>
        <p>
          Utilized jQuery, Vanilla Javascript, CSS3, and HTML5 to create the
          application and style the aesthetic. Pulled from an external API to
          produce images and info from open access artworks. Used CSS animation
          to create a modern search bar. Employed Git control during the
          production of the application with frequent commits until deployment.
        </p>
        <a
          href="https://laurakelly1.github.io/wall-art-app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-images">
            <img
              src="https://github.com/laurakelly1/portfolio-frontend/blob/main/src/images/stillwall-d-1.png?raw=true"
              alt="Desktop screenshot"
              className="desktop"
            ></img>
            <div className="mobile-images">
              <img
                src="https://github.com/laurakelly1/portfolio-frontend/blob/main/src/images/stillwall-m-1.png?raw=true"
                alt="Mobile screenshots"
                className="mobile"
              ></img>
            </div>
          </div>
        </a>
      </div>
      <div className="next"></div>
    </motion.div>
  );
};

export default Project4;
