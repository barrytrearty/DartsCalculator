import { useParams } from "react-router-dom";
import { useEffect, useState, useToggle } from "react";

const Game = () => {
  const params = useParams();
  let score = params.score;

  console.log(score);

  const [player1Score, setPlayer1Score] = useState(score);
  const [player2Score, setPlayer2Score] = useState(score);
  const [selectedPlayer, setSelectedPlayer] = useState(true);

  const [playerThrow, setPlayerThrow] = useState("");

  const writeScore = (value) => {
    if (playerThrow === "") {
      setPlayerThrow(value);
    } else {
      //   let checkLength = playerThrow.split("");
      //   console.log(playerThrow.length);
      //   if (playerThrow.length < 3) {
      setPlayerThrow(`${playerThrow}` + value);
    }
  };

  //   const switchPlayer = () => {
  //     setSelectedPlayer(!selectedPlayer);
  //   };

  const deleteDigit = () => {
    if (playerThrow === "-" || playerThrow === "") {
      console.log("no digit");
    } else {
      console.log(playerThrow.length);
      const throwArray = playerThrow.split("");
      console.log(throwArray);
      throwArray.pop("");
      console.log(throwArray);
      const finalThrow = throwArray.join("");
      setPlayerThrow(finalThrow);
      console.log(finalThrow);
    }
  };

  const applyDone = () => {
    if (selectedPlayer) {
      setPlayer1Score(player1Score - playerThrow);
    } else {
      setPlayer2Score(player2Score - playerThrow);
    }
    setPlayerThrow("");
    setSelectedPlayer(!selectedPlayer);
  };

  return (
    <div>
      <section className="sides sides-game">
        <h2>Home</h2>
        <h2>Away</h2>
      </section>
      <section>
        <div className="scores">
          <h1>{player1Score}</h1>
          <h1>{player2Score}</h1>
        </div>

        {/* <span>Avg:00</span> */}
      </section>

      <section>
        <h2>{playerThrow}</h2>
      </section>

      <section>
        <div>
          <button onClick={() => writeScore(1)}>1</button>
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
