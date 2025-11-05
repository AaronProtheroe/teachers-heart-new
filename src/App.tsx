import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { AppShell } from "./layout";
import Emotions from "./pages/Emotions";
import StressResponse from "./pages/StressResponse";
import SomaticResponses from "./pages/SomaticResponses";
import SomaticExercises from "./pages/SomaticExercises";
import Technique from "./pages/Technique";
import Affirmations from "./pages/Affimrations";
import Burnout from "./pages/Burnout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<Home />} />
          <Route path="/emotions" element={<Emotions />} />
          <Route path="/stress" element={<StressResponse />} />
          <Route path="/somatic-reponse" element={<SomaticResponses />} />
          <Route path="/somatic-exercises" element={<SomaticExercises />} />
          <Route path="/54321-technique" element={<Technique />} />
          <Route path="/affirmations" element={<Affirmations />} />
          <Route path="/burnout" element={<Burnout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
