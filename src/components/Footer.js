import { HashLink as Link} from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-c1">
        <h3>Laura <br/>Kelly</h3>
      </div>
      <div className="footer-c2">
        <h3>Explore the site</h3>
        <Link to="/#about" smooth>
          <p>About</p>
        </Link>
        <Link to="/#projects" smooth>
        <p>Projects</p>
        </Link>
        <Link to="/#contact" smooth>
        <p>Contact</p>
        </Link>
      </div>
      <div className="footer-c3">
        <h3>Connect</h3>
        <a href='mailto:lkelly.laura@gmail.com'><p>Email</p></a>
        <a href='https://github.com/laurakelly1'><p>GitHub</p></a>
        <a href='https://www.linkedin.com/in/lkelly-laura/'><p>LinkedIn</p></a>
      </div>
      <div className="footer-c4">
        <p id='plan'>Plan</p>
        <p id='create'>Create</p>
        <p id='refine'>Refine</p>
      </div>
    </div>
  );
};

export default Footer;
