const Home = () => {
  return (
    <div className="main">
      <div className="home-page">
        <div className="home-block">
          <h2 className="page-heading">Laura Kelly</h2>
          <h3 className="sub-heading">Creative Developer</h3>
        </div>
      </div>
      <div className="about-page" id="about">
        <h2 className="page-heading">Based in Norfolk, Virginia</h2>
        <div className="profile-content">
          <div className="profile-image"></div>
          <div className="profile-text">
            <h3>
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
          <a href="/project">
            <div className="project-tile" id="project-1">
              <p>Project 1</p>
            </div>
          </a>
          <a href="/project">
            <div className="project-tile" id="project-2">
              <p>Project 2</p>
            </div>
          </a>
          <a href="/project">
            <div className="project-tile" id="project-3">
              <p>Project 3</p>
            </div>
          </a>
          <a href="/project">
            <div className="project-tile" id="project-4">
              <p>Project 4</p>
            </div>
          </a>
        </div>
      </div>
      <div className="contact-page" id="contact">
        <h2 className="page-heading">Contact</h2>
        <a href='mailto:lkelly.laura@gmail.com'><p>Email</p></a>
        <a href='https://github.com/laurakelly1'><p>GitHub</p></a>
        <a href='https://www.linkedin.com/in/lkelly-laura/'><p>LinkedIn</p></a>
      </div>
    </div>
  );
};

export default Home;
