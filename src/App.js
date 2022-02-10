// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Start from "./pages/Start";

function App() {
  return (
    <Router className="App">
      <h1>Dunmore Darts</h1>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="game/:score" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
