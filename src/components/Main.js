import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Project from "../pages/Project";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
};

export default Main;
