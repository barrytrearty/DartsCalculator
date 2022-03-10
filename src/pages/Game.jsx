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
  const button2 = useRef();
  const button3 = useRef();
  const button4 = useRef();
  const button5 = useRef();
  const button6 = useRef();
  const button7 = useRef();
  const button8 = useRef();
  const button9 = useRef();
  const buttonDel = useRef();
  const buttonDon = useRef();
  const button0 = useRef();
  const invalidSign = useRef();
  const gameOverSign = useRef();
  const bustSign = useRef();

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

  const toggleButtonsDisability = (trueFalse) => {
    button1.current.disabled = trueFalse;
    button2.current.disabled = trueFalse;
    button3.current.disabled = trueFalse;
    button4.current.disabled = trueFalse;
    button5.current.disabled = trueFalse;
    button6.current.disabled = trueFalse;
    button7.current.disabled = trueFalse;
    button8.current.disabled = trueFalse;
    button9.current.disabled = trueFalse;
    button0.current.disabled = trueFalse;
  };

  const applyDone = () => {
    if (selectedPlayer) {
      if (player1Score < playerThrow) {
        switchHighlight();
      }
      if (player1Score == playerThrow) {
        gameOverSign.current.style.display = "block";
        toggleButtonsDisability(false);
      }
      if (player1Score > playerThrow) {
        setPlayer1Score(player1Score - playerThrow);
        switchHighlight();
      }
    } else {
      if (player2Score < playerThrow) {
        switchHighlight();
      }
      if (player2Score == playerThrow) {
        gameOverSign.current.style.display = "block";
        toggleButtonsDisability(false);
      }
      if (player2Score > playerThrow) {
        setPlayer2Score(player2Score - playerThrow);
        switchHighlight();
      }
    }
    setPlayerThrow("");
    setSelectedPlayer(!selectedPlayer);
  };

  useEffect(() => {
    if (playerThrow.length > 2) {
      toggleButtonsDisability(true);
    } else {
      toggleButtonsDisability(false);
    }
  }, [playerThrow]);

  useEffect(() => {
    if (Number(playerThrow) > 180) {
      // button1.current.disabled = true;
      buttonDon.current.disabled = true;
      invalidSign.current.style.display = "block";
    } else {
      buttonDon.current.disabled = false;
      invalidSign.current.style.display = "none";
    }
  }, [playerThrow]);

  useEffect(() => {
    if (
      (selectedPlayer &&
        Number(playerThrow) > player1Score &&
        Number(playerThrow) < 181) ||
      (!selectedPlayer &&
        Number(playerThrow) > player2Score &&
        Number(playerThrow) < 181)
    ) {
      bustSign.current.style.display = "block";
      // buttonDon.current.disabled = true;
      toggleButtonsDisability(true);
    } else {
      bustSign.current.style.display = "none";
    }
  }, [playerThrow]);

  // useEffect(() => {
  //   if (selectedPlayer) {
  //     if (Number(playerThrow) > player1Score && Number(playerThrow) < 181) {
  //       bustSign.current.style.display = "block";
  //       // buttonDon.current.disabled = true;
  //       toggleButtonsDisability(true);
  //     } else {
  //       if (Number(playerThrow) > player2Score && Number(playerThrow) < 181) {
  //         bustSign.current.style.display = "block";
  //         // buttonDon.current.disabled = true;
  //         toggleButtonsDisability(true);
  //       }
  //     }
  //     // if (
  //     //   (
  //     //     Number(playerThrow) > player1Score &&
  //     //     Number(playerThrow) < 181) ||
  //     //   (!selectedPlayer &&
  //     //     Number(playerThrow) > player2Score &&
  //     //     Number(playerThrow) < 181)
  //     // ) {
  //     //   bustSign.current.style.display = "block";
  //     //   // buttonDon.current.disabled = true;
  //     //   toggleButtonsDisability(true);
  //   } else {
  //     bustSign.current.style.display = "none";
  //   }
  // }, [playerThrow]);

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

      <section id="throw-section">
        <h2 ref={invalidSign} className="hidden">
          INVALID SCORE
        </h2>
        <h2 ref={gameOverSign} className="hidden">
          GAME OVER
        </h2>
        <h2 ref={bustSign} className="hidden">
          BUST
        </h2>
      </section>

      <section>
        <div>
          <button ref={button1} onClick={() => writeScore(1)}>
            1
          </button>
          <button ref={button2} onClick={() => writeScore(2)}>
            2
          </button>
          <button ref={button3} onClick={() => writeScore(3)}>
            3
          </button>
          <button ref={button4} onClick={() => writeScore(4)}>
            4
          </button>
          <button ref={button5} onClick={() => writeScore(5)}>
            5
          </button>
          <button ref={button6} onClick={() => writeScore(6)}>
            6
          </button>
          <button ref={button7} onClick={() => writeScore(7)}>
            7
          </button>
          <button ref={button8} onClick={() => writeScore(8)}>
            8
          </button>
          <button ref={button9} onClick={() => writeScore(9)}>
            9
          </button>
          <button ref={buttonDel} onClick={deleteDigit}>
            &larr;
          </button>
          <button ref={button0} onClick={() => writeScore(0)}>
            0
          </button>
          <button ref={buttonDon} onClick={applyDone}>
            Done
          </button>
        </div>

        {/* <button>Bust</button> */}
      </section>

      <a href="https://darts-calculator.vercel.app">New Game</a>
    </div>
  );
};

export default Game;
