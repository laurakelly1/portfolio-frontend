import { HashLink as Link } from "react-router-hash-link";
import Pdf from "../LAURAKELLY-RESUMEPDF.pdf"

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
          <p className="grow">About</p>
        </Link>
        <Link to="/#projects" smooth>
          <p className="grow">Projects</p>
        </Link>
        <Link to="/#skills" smooth>
          <p className="grow">Skills</p>
        </Link>
        <a href={Pdf}>
          <p className="grow" target='_blank'>Resume</p>
        </a>
      </div>
      <div className="footer-c3">
        <h3>Connect</h3>
        <a href="mailto:lkelly.laura@gmail.com">
          <p className="grow">Email</p>
        </a>
        <a
          href="https://github.com/laurakelly1"
          target="_blank"
          rel="noreferrer"
        >
          <p className="grow">GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/lkelly-laura/"
          target="_blank"
          rel="noreferrer"
          
        >
          <p className="grow">LinkedIn</p>
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
