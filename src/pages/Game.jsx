// import { useParams } from "react-router-dom";
import { useEffect, useState, useToggle, useContext, useRef } from "react";
import { GameContext } from "./GameContext";

const Game = () => {
  // const params = useParams();
  // let score = params.score;

  const [score, legs] = useContext(GameContext);

  const [player1Score, setPlayer1Score] = useState(score);
  const [player2Score, setPlayer2Score] = useState(score);
  const [selectedPlayer, setSelectedPlayer] = useState(true);

  const [playerThrow, setPlayerThrow] = useState("");

  const writeScore = (value) => {
    if (playerThrow === "") {
      setPlayerThrow(value);
      console.log(playerThrow);
    } else {
      // console.log(playerThrow);
      // let checkLength = playerThrow.length;
      // console.log(checkLength);
      // if (checkLength.length < 3) {
      setPlayerThrow(`${playerThrow}` + value);
      console.log(playerThrow);
      // }
    }
  };

  //   const switchPlayer = () => {
  //     setSelectedPlayer(!selectedPlayer);
  //   };

  const player1 = useRef();
  const player2 = useRef();

  const button1 = useRef();

  const deleteDigit = () => {
    if (playerThrow === "-" || playerThrow === "") {
      console.log("no digit");
    } else {
      console.log(playerThrow.length);
      if (playerThrow.length === undefined) {
        setPlayerThrow("");
      } else {
        const throwArray = playerThrow.split("");
        console.log(throwArray);
        throwArray.pop("");
        console.log(throwArray);
        const finalThrow = throwArray.join("");
        setPlayerThrow(finalThrow);
        console.log(finalThrow);
      }
    }
  };

  const switchHighlight = () => {
    player1.current.classList.toggle("active-player-score");
    player2.current.classList.toggle("active-player-score");
  };

  const applyDone = () => {
    if (selectedPlayer) {
      setPlayer1Score(player1Score - playerThrow);
      switchHighlight();
    } else {
      setPlayer2Score(player2Score - playerThrow);
      switchHighlight();
    }
    setPlayerThrow("");
    setSelectedPlayer(!selectedPlayer);
  };

  useEffect(() => {
    if (playerThrow.length > 3) {
      button1.current.disabled = true;
    } else {
      button1.current.disabled = false;
    }
  }, [playerThrow]);

  return (
    <div>
      <section className="sides sides-game">
        <h2>Home</h2>
        <h2>Away</h2>
      </section>
      <section>
        <div className="scores">
          <h1 ref={player1} className="active-player-score">
            {player1Score}
          </h1>
          <h1 ref={player2}>{player2Score}</h1>
        </div>

        {/* <span>Avg:00</span> */}
      </section>

      <section id="throw-section">
        <h2>{playerThrow}</h2>
      </section>

      <section>
        <div>
          <button ref={button1} onClick={() => writeScore(1)}>
            1
          </button>
          <button onClick={() => writeScore(2)}>2</button>
          <button onClick={() => writeScore(3)}>3</button>
          <button onClick={() => writeScore(4)}>4</button>
          <button onClick={() => writeScore(5)}>5</button>
          <button onClick={() => writeScore(6)}>6</button>
          <button onClick={() => writeScore(7)}>7</button>
          <button onClick={() => writeScore(8)}>8</button>
          <button onClick={() => writeScore(9)}>9</button>
          <button onClick={deleteDigit}>&larr;</button>
          <button onClick={() => writeScore(0)}>0</button>
          <button onClick={applyDone}>Done</button>
        </div>

        {/* <button>Bust</button> */}
      </section>

      <a href="https://darts-calculator.vercel.app">New Game</a>
    </div>
  );
};

export default Game;
