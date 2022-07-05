const Home = () => {
  return (
    <div className="main">
      <div className="home-page" id='home'>
      <h2 className="page-heading">Home</h2>
      </div>
      <div className="about-page" id='about'>
        <h2 className="page-heading">About</h2>
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
      <div className="projects-page" id='projects'>
        <h2 className="page-heading">Projects</h2>
        <p>Project 1</p>
        <p>Project 2</p>
        <p>Project 3</p>
        <p>Project 4</p>
      </div>
      <div className="skills-page" id='skills'>
        <h2 className="page-heading">Skills</h2>
        <p>Languages</p>
        <p>Stylesheets</p>
        <p>Soft skills</p>
      </div>
      <div className="contact-page" id='contact'>
        <h2 className="page-heading">Contact</h2>
        <p>Email</p>
        <p>GitHub</p>
        <p>LinkedIn</p>
      </div>
    </div>
  );
};

export default Home;
