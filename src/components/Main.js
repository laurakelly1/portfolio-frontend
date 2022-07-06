import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Project1 from "../pages/Project1";
import Project2 from "../pages/Project2";
import Project3 from "../pages/Project3";
import Project4 from "../pages/Project4";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/project1" element={<Project1 />} />
      <Route path="/project2" element={<Project2 />} />
      <Route path="/project3" element={<Project3 />} />
      <Route path="/project4" element={<Project4 />} />
    </Routes>
  );
};

export default Main;
