import MissionsList from "./components/MissionsList";
import Rockets from "./components/Rockets";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MissionsList />} />
        <Route path="/:id" element={<Rockets />} />
      </Routes>
    </div>
  );
}

export default App;
