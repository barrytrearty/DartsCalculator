import { useEffect, useState, useToggle, useContext, useRef } from "react";
import { GameContext } from "./GameContext";

const Game = () => {
  const [
    score,
    setScore,
    legs,
    setLegs,
    player1Name,
    setPlayer1Name,
    player2Name,
    setPlayer2Name,
  ] = useContext(GameContext);

  const [player1Score, setPlayer1Score] = useState(Number(score));
  const [player2Score, setPlayer2Score] = useState(Number(score));

  const [player1Legs, setPlayer1Legs] = useState(0);
  const [player2Legs, setPlayer2Legs] = useState(0);

  const [selectedPlayer, setSelectedPlayer] = useState(true);

  const [currentThrow, setCurrentThrow] = useState("");

  const player1Ref = useRef();
  const player2Ref = useRef();

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
  const buttonNext = useRef();
  const button0 = useRef();
  const invalidSign = useRef();
  const gameOverSign = useRef();
  const bustSign = useRef();

  const writeScore = (value) => {
    if (currentThrow === "") {
      setCurrentThrow(value);
      console.log(currentThrow);
    } else {
      setCurrentThrow(`${currentThrow}` + value);
      console.log(currentThrow);
    }
  };

  const deleteDigit = () => {
    if (currentThrow === "-" || currentThrow === "") {
      console.log("no digit");
    } else {
      console.log(currentThrow.length);
      if (currentThrow.length === undefined) {
        setCurrentThrow("");
      } else {
        const throwArray = currentThrow.split("");
        console.log(throwArray);
        throwArray.pop("");
        console.log(throwArray);
        const finalThrow = throwArray.join("");
        setCurrentThrow(finalThrow);
        console.log(finalThrow);
      }
    }
  };

  const switchPlayer = () => {
    player1Ref.current.classList.toggle("active-player-score");
    player2Ref.current.classList.toggle("active-player-score");
    setSelectedPlayer(!selectedPlayer);
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

  const addScore = (
    playerScore,
    playerScoreFunc,
    playerLegs,
    playerLegsFunc
  ) => {
    if (playerScore == currentThrow) {
      gameOverSign.current.style.display = "block";
      playerScoreFunc(0);
      playerLegsFunc(playerLegs + 1);
      buttonDel.current.disabled = true;
      toggleButtonsDisability(true);
      buttonDon.current.style.display = "none";
      buttonNext.current.style.display = "block";
    }
    if (playerScore > currentThrow && playerScore - 1 != currentThrow) {
      playerScoreFunc(playerScore - currentThrow);
      switchPlayer();
    }
    if (playerScore < currentThrow || playerScore - 1 == currentThrow) {
      switchPlayer();
    }
  };

  const applyDone = () => {
    if (selectedPlayer) {
      addScore(player1Score, setPlayer1Score, player1Legs, setPlayer1Legs);
    }
    if (!selectedPlayer) {
      addScore(player2Score, setPlayer2Score, player2Legs, setPlayer2Legs);
    }
    console.log(`player1 ${player1Score}: player2 ${player2Score}`);
    setCurrentThrow("");
  };

  const applyBustSign = (playerScore) => {
    if (
      (Number(currentThrow) > playerScore && Number(currentThrow) < 181) ||
      Number(currentThrow) === playerScore - 1
    ) {
      bustSign.current.style.display = "block";
      toggleButtonsDisability(true);
    } else {
      bustSign.current.style.display = "none";
    }
  };

  const nextLeg = () => {
    gameOverSign.current.style.display = "none";
    setPlayer1Score(Number(score));
    setPlayer2Score(Number(score));
    // playerLegsFunc(playerLegs + 1);
    buttonDel.current.disabled = false;
    toggleButtonsDisability(false);
    buttonNext.current.style.display = "none";
    buttonDon.current.style.display = "block";
    switchPlayer();
  };

  useEffect(() => {
    buttonNext.current.style.display = "none";
  }, []);

  useEffect(() => {
    if (currentThrow.length > 2) {
      toggleButtonsDisability(true);
    } else if (player1Score === 0 || player2Score === 0) {
      toggleButtonsDisability(true);
    } else {
      toggleButtonsDisability(false);
    }
  }, [currentThrow]);

  useEffect(() => {
    if (Number(currentThrow) > 180) {
      buttonDon.current.disabled = true;
      invalidSign.current.style.display = "block";
    } else {
      buttonDon.current.disabled = false;
      invalidSign.current.style.display = "none";
    }
  }, [currentThrow]);

  useEffect(() => {
    if (selectedPlayer) {
      applyBustSign(player1Score);
    } else if (!selectedPlayer) {
      applyBustSign(player2Score);
    }
  }, [currentThrow]);

  return (
    <div>
      <section className="spacing">
        <h2>{player1Name}</h2>
        <h2>{player2Name}</h2>
      </section>
      <section className="spacing">
        <span>{player1Legs}</span>
        <span>Legs</span>
        <span>{player2Legs}</span>
      </section>
      <section>
        <div className="spacing">
          <h1 ref={player1Ref} className="active-player-score">
            {player1Score}
          </h1>
          <h1>Score</h1>
          <h1 ref={player2Ref}>{player2Score}</h1>
        </div>

        {/* <span>Avg:00</span> */}
      </section>

      <section id="throw-section">
        <h2>{currentThrow}</h2>
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
          <button ref={buttonNext} onClick={nextLeg}>
            Next Leg
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
