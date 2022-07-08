import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="main"
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
            </div>
          </a>
          <a href="/flowerbox">
            <div className="project-tile" id="project-2">
            </div>
          </a>
          <a href="/plantanullius">
            <div className="project-tile" id="project-3">
            </div>
          </a>
          <a href="/stillwall">
            <div className="project-tile" id="project-4">
            </div>
          </a>
        </div>
      </div>
      <div className="skills-page" id="skills">
        <div className='skill-total-block'>
        <h2 className="skills-page-heading">Skills</h2>
        <div className="skill-lists">
          <div className="skills-block">
          <h3>Languages</h3>
            <p>JavaScript</p>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>ES6</p>
            <p>Python</p>
          </div>
          <div className="skills-block">
          <h3>Frameworks</h3>
            <p>React JS</p>
            <p>Express JS</p>
            <p>Node JS</p>
            <p>django</p>
          </div>
          <div className="skills-block">
            <h3>Libraries</h3>
            <p>jQuery</p>
            <p>Materialize</p>
            <p>Bootstrap</p>
            <p>Bcrypt</p>
            <p>Skeleton</p>
            <p>SASS</p>
          </div>
          <div className="skills-block">
            <h3>Databases</h3>
            <p>MongoDB</p>
            <p>Mongoose</p>
            <p>PostgreSQL</p>
            <p>AWS S3</p>
            <p>Google OAuth</p>
          </div>
          <div className="skills-block">
            <h3>Deployment</h3>
            <p>Heroku</p>
            <p>Netlify</p>
            <p>GitHub Pages</p>
          </div>
          <div className="skills-block">
            <h3>Version Control</h3>
            <p>Git</p>
            <p>GitHub</p>
          </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
