import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PicketFence from './pages/PicketFence';
import Starshot from './pages/Starshot';
import Catphan from './pages/Catphan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/picketfence" element={<PicketFence />} />
        <Route path="/starshot" element={<Starshot />} />
        <Route path="/catphan" element={<Catphan />} />
      </Routes>
    </Router>
  );
}

export default App;
