import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Statecollege from './components/Statecollege';
import Collegedetails from "./components/Collegedetails";
import Studentdetails from "./components/Studentdetails";
import PieState from "./components/Piestate";
import Collegelist from "./components/Collegelist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<PieState/>} />
          <Route path=":State" element={<Statecollege />} />
          <Route path="College/:CollegeId" element={<Collegedetails />} />
          <Route path="Student/:StudentId" element={<Studentdetails/>} />
          <Route path="Colleg/:Name" element={<Collegelist />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
