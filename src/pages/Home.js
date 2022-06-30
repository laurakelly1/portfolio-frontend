import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Home;
