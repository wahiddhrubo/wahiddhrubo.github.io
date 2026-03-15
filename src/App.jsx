import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import PapersPage from "./pages/papers";
import Navbar from "./components/navbar";
import ProjectsPage from "./pages/projects";

function App() {
  return (
    <div className="dark:bg-[#0F172A] text-sm md:text-base dark:text-white bg-white scroll-smooth">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/papers/:paperId" element={<PapersPage />} />
          <Route path="/projects/:projectId" element={<ProjectsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
