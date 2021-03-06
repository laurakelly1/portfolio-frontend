import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Project3 = () => {
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
        <Link to="/flowerbox"><i className="fa-solid fa-angles-left"></i></Link>
      </div>
      <div className="project-text">
        <h2>Planta Nullius</h2>
        <h3>
          Technologies: Express JS, Node JS, CSS3, JavaScript, Materialize,
          Google Fonts, MongoDB and Mongoose, Heroku
        </h3>
        <h3>Role: Full Stack Developer</h3>
        <div className="buttons">
          <a
            href="https://planta-nullius.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Live Site</button>
          </a>
          <a
            href="https://github.com/laurakelly1/plant_shop"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>
        </div>
        <p>Ecommerce website for house plants.</p>
        <p>
          The name is Latin for 'no one's plant'. That's what we sell, plants
          without an owner!! Shop all our healthy and fresh plants and add your
          favourites to the cart.
        </p>
        <p>
          Utilized Express JS and Node JS to build a full CRUD application with
          authentication. Adopted the MVC setup with express to ensure organized
          and clear code. Implemented models on MongoDB and applied functions to
          the data using Mongoose. Styled with CSS and Materialize to reflect a
          modern virtual storefront.
        </p>
        <a
          href="https://planta-nullius.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-images">
            <img
              src="https://github.com/laurakelly1/portfolio-frontend/blob/main/src/images/planta-d-1.png?raw=true"
              alt="Desktop screenshot"
              className="desktop"
            ></img>
            <div className="mobile-images">
              <img
                src="https://github.com/laurakelly1/portfolio-frontend/blob/main/src/images/planta-m-1.png?raw=true"
                alt="Mobile screenshots"
                className="mobile"
              ></img>
            </div>
          </div>
        </a>
      </div>
      <div className="next">
        <Link to="/stillwall"><i className="fa-solid fa-angles-right"></i></Link>
      </div>
    </motion.div>
  );
};

export default Project3;
