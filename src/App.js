// import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Start from "./pages/Start";
import { GameProvider } from "./pages/GameContext";

function App() {
  // useEffect(() => {
  //   document.body.style = "background: #0B0914;";
  // }, []);

  const setBg = {
    image: {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1580894328141-6f3421a182a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGFydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')",
      height: "100vh",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    content: {
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(11, 9, 20, 0.8)",
    },
  };

  return (
    <GameProvider>
      <Router>
        <div style={setBg.image}>
          <div style={setBg.content}>
            <div className="App">
              <Routes>
                <Route path="/" element={<Start />} />
                <Route path="game" element={<Game />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </GameProvider>
  );
}

export default App;
