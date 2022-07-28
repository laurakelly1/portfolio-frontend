import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import Home from "../pages/Home";
import Project1 from "../pages/Project1";
import Project2 from "../pages/Project2";
import Project3 from "../pages/Project3";
import Project4 from "../pages/Project4";
import ProjectForward from "../pages/ProjectForward";

const Main = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path='/projectforward' element={<ProjectForward /> }/>
        <Route path="/applied" element={<Project1 />} />
        <Route path="/flowerbox" element={<Project2 />} />
        <Route path="/plantanullius" element={<Project3 />} />
        <Route path="/stillwall" element={<Project4 />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Main;
