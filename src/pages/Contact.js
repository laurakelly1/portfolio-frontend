import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="main">
      <div className="sidebar-left">
        <Link to="/" className="home-nav">Home</Link>
        <Link to="/about" className="about-nav">About</Link>
        <Link to="/projects" className="project-nav">Projects</Link>
        <Link to="/skills" className="skills-nav">Skills</Link>
      </div>
      <div className="contact-page">
        <h2>Contact</h2>
        <p>Email</p>
        <p>GitHub</p>
        <p>LinkedIn</p>
      </div>
      <div className="sidebar-right">
        <Link to="/contact" className="contact-nav">Contact</Link>
      </div>
    </div>
  );
};

export default Contact;
