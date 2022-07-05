const Home = () => {
  return (
    <div className="main">
      <div className="home-page">
        HOME
      </div>
      <div className="about-page">
        <h2>About</h2>
        <img
          src="https://github.com/laurakelly1/portfolio-frontend/blob/main/src/images/profile_pic.JPG?raw=true"
          alt="portrait laura kelly"
        />
        <p>
          Hello! My name is Laura. I recently completed a coding boot camp where
          I spent time learning skills necessary for software engineering. I
          enjoyed the fast-paced learning environment and the opportunity to
          spend time creating content that interests me. My formal training is
          in Pure Mathematics, and prior to this career change I was a
          mathematics publisher. My love of math drew me to a career in coding
          due to the logical problem-solving aspects. I also am excited to
          transfer my design skills to this new medium.
        </p>
      </div>
      <div className="projects-page">
        <h2>Projects</h2>
        <p>Project 1</p>
        <p>Project 2</p>
        <p>Project 3</p>
        <p>Project 4</p>
      </div>
      <div className="skills-page">
        <h2>Skills</h2>
        <p>Languages</p>
        <p>Stylesheets</p>
        <p>Soft skills</p>
      </div>
      <div className="contact-page">
        <h2>Contact</h2>
        <p>Email</p>
        <p>GitHub</p>
        <p>LinkedIn</p>
      </div>
    </div>
  );
};

export default Home;
