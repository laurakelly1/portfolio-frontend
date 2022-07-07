import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="main"
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
  >
      <div className="home-page">
        <div className="home-block">
          <h2 className="page-heading">Laura Kelly</h2>
          <h3 className="sub-heading">Creative Developer</h3>
        </div>
      </div>
      <div className="about-page" id="about">
        <h2 className="about-page-heading">Based in Norfolk, Virginia</h2>
        <div className="profile-content">
          <div className="profile-image"></div>
          <div className="profile-text">
            <h3 className="about-page-subheading">
              I'm a full-stack developer with a deep appreciation for the design
              process.
            </h3>
            <p>
              With formal training in Pure Mathematics and two years of
              publishing textbooks for Oxford University Press, I understand
              what it takes for cross-functional teams to be successful.
              <br />
              <br />
              My love for mathematics and problem solving drew me to a career in
              software development.
              <br />
              <br />
              When I'm not coding, you can find me hiking up mountains or
              sipping cappuccinos in my local coffee house.
            </p>
          </div>
        </div>
      </div>
      <div className="projects-page" id="projects">
        <h2 className="page-heading">Projects</h2>
        <div className="project-tiles">
          <a href="/applied">
            <div className="project-tile" id="project-1">
              <p>Applied</p>
            </div>
          </a>
          <a href="/flowerbox">
            <div className="project-tile" id="project-2">
              <p>Flowerbox</p>
            </div>
          </a>
          <a href="/plantanullius">
            <div className="project-tile" id="project-3">
              <p>PLanta Nullius</p>
            </div>
          </a>
          <a href="/stillwall">
            <div className="project-tile" id="project-4">
              <p>Still Wall</p>
            </div>
          </a>
        </div>
      </div>
      {/* <div className="contact-page" id="contact">
        <h2 className="page-heading">Contact</h2>
        <a href='mailto:lkelly.laura@gmail.com'><p>Email</p></a>
        <a href='https://github.com/laurakelly1'><p>GitHub</p></a>
        <a href='https://www.linkedin.com/in/lkelly-laura/'><p>LinkedIn</p></a>
      </div> */}
    </motion.div>
  );
};

export default Home;
