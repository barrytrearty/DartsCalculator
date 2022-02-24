// import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Start from "./pages/Start";

function App() {
  useEffect(() => {
    document.body.style = "background: #0B0914;";
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Dunmore Darts</h1>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="game/:score/:legs" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
