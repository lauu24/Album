import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PlayerDetail from './pages/PlayerDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/jugador/:id" element={<PlayerDetail />} />
    </Routes>
  );
}

export default App;
