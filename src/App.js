// import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Start from "./pages/Start";
import { GameProvider } from "./pages/GameContext";

function App() {
  useEffect(() => {
    document.body.style = "background: #0B0914;";
  }, []);

  return (
    <GameProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="game" element={<Game />} />
          </Routes>
        </div>
      </Router>
    </GameProvider>
  );
}

export default App;
