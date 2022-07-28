import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer-c1">
        <h3>Laura</h3>
        <h3> Kelly</h3>
      </div>
      <div className="footer-c2">
        <h3>Explore the site</h3>
        <Link to="/#about" smooth>
          <p>About</p>
        </Link>
        <Link to="/#projects" smooth>
          <p>Projects</p>
        </Link>
        <Link to="/#skills" smooth>
          <p>Skills</p>
        </Link>
      </div>
      <div className="footer-c3">
        <h3>Connect</h3>
        <a href="mailto:lkelly.laura@gmail.com">
          <p>Email</p>
        </a>
        <a
          href="https://github.com/laurakelly1"
          target="_blank"
          rel="noreferrer"
        >
          <p>GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/lkelly-laura/"
          target="_blank"
          rel="noreferrer"
        >
          <p>LinkedIn</p>
        </a>
      </div>
      <div className="footer-c4">
        <p id="plan">Plan</p>
        <p id="create">Create</p>
        <p id="refine">Refine</p>
      </div>
    </div>
  );
};

export default Footer;
