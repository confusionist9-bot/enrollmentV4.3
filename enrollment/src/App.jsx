import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import StudentList from "./pages/StudentList.jsx";
import Curriculum from "./pages/Curriculum.jsx";
import SectionList from "./pages/SectionList.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/students" element={<StudentList />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/section" element={<SectionList />} />
    </Routes>
  );
}

export default App