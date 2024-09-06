import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home";
import { Projects } from "../pages/projects";
import { Tech } from "../pages/technologies";
import { About } from "../pages/about";

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/tech" element={<Tech />}/>
    </Routes>
  )
  
}