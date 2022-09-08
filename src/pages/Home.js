import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const Home = () => {
  return (
    <motion.div
      className="main"
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="home-page" id="home">
        <div className="home-block">
          <div className="page-heading">
            <div className="bounce-title">
              <h2 className="l">L</h2>
              <h2 className="a">a</h2>
              <h2 className="u">u</h2>
              <h2 className="r">r</h2>
              <h2 className="a2">a&nbsp;</h2>
              <h2 className="k">K</h2>
              <h2 className="e">e</h2>
              <h2 className="l2">l</h2>
              <h2 className="l3">l</h2>
              <h2 className="y">y</h2>
            </div>
          </div>
          <div className="sub-heading">
            <h3 className="c">C</h3>
            <h3 className="r2">r</h3>
            <h3 className="e2">e</h3>
            <h3 className="a3">a</h3>
            <h3 className="t">t</h3>
            <h3 className="i">i</h3>
            <h3 className="v">v</h3>
            <h3 className="e3">e&nbsp;</h3>
            <h3 className="d">D</h3>
            <h3 className="e4">e</h3>
            <h3 className="v2">v</h3>
            <h3 className="e5">e</h3>
            <h3 className="l4">l</h3>
            <h3 className="o">o</h3>
            <h3 className="p">p</h3>
            <h3 className="e6">e</h3>
            <h3 className="r3">r</h3>
          </div>
        </div>
      </div>
      <div className="about-page" id="about">
        <FadeInSection>
          <h2 className="about-page-heading">Based in Norfolk, Virginia</h2>
          <div className="profile-content">
            <div className="profile-image"></div>
            <div className="profile-text">
              <h3 className="about-page-subheading">
                I'm a full-stack developer with a deep appreciation for the
                design process.
              </h3>
              <p>
                With formal training in Pure Mathematics and two years of
                publishing textbooks for Oxford University Press, I understand
                what it takes for cross-functional teams to be successful.
                <br />
                <br />
                My love for mathematics and problem solving drew me to a career
                in software development.
                <br />
                <br />
                When I'm not coding, you can find me hiking up mountains or
                sipping cappuccinos in my local coffee house.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
      <div className="projects-page" id="projects">
        <FadeInSection>
          <h2 className="page-heading">Projects</h2>
          <div className="project-tiles">
            <a href="/projectforward">
              <div className="project-tile" id="projectforward"></div>
            </a>
            <a href="/applied">
              <div className="project-tile" id="project-1"></div>
            </a>
            <a href="/flowerbox">
              <div className="project-tile" id="project-2"></div>
            </a>
            <a href="/plantanullius">
              <div className="project-tile" id="project-3"></div>
            </a>
            <a href="/stillwall">
              <div className="project-tile" id="project-4"></div>
            </a>
          </div>
        </FadeInSection>
      </div>
      <div className="skills-page" id="skills">
        <FadeInSection>
          <div className="skill-total-block">
            <h2 className="skills-page-heading">Skills</h2>
            <hr />
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
                <p>Angular JS</p>
                <p>django</p>
              </div>
              <div className="skills-block">
                <h3>Libraries</h3>
                <p>jQuery</p>
                <p>Material UI</p>
                <p>Materialize</p>
                <p>Bootstrap</p>
                <p>SASS</p>
              </div>
              <div className="skills-block">
                <h3>Databases</h3>
                <p>MongoDB</p>
                <p>Mongoose</p>
                <p>PostgreSQL</p>
                <p>AWS S3</p>
                <p>Google Firebase</p>
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
        </FadeInSection>
      </div>
    </motion.div>
  );
};

export default Home;
