import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="main">
      <div className="sidebar-left">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
      </div>
      <div className="main-page">
        <h2>Contact</h2>
        <p>Email</p>
        <p>GitHub</p>
        <p>LinkedIn</p>
      </div>
      <div className="sidebar-right">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Contact;
