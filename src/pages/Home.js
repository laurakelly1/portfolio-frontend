import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <div className="main-page">
        <div className="home-top">
          <h4>Location</h4>
          <h4>Keywords</h4>
          <h4>Smiley Face</h4>
        </div>
        <div className="home-center">
          <h2>CREATIVE DEVELOPER</h2>
          <h2>LAURA KELLY</h2>
          <h3>'tiny little quote about me to draw you in'</h3>
        </div>
      </div>
      <div className="sidebar-right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Home;
