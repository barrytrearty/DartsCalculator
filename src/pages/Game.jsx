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

  // Add in average
  // Add in checkouts
  // Fix styling

  const [player1Score, setPlayer1Score] = useState(Number(score));
  const [player2Score, setPlayer2Score] = useState(Number(score));
  const [player1Legs, setPlayer1Legs] = useState(0);
  const [player2Legs, setPlayer2Legs] = useState(0);

  // const [player1Total, setPlayer1Total] = useState(0);
  // const [player2Total, setPlayer2Total] = useState(0);
  // const [player1Avg, setPlayer1Avg] = useState(0);
  // const [player2Avg, setPlayer2Avg] = useState(0);
  // const [player1Throws, setPlayer1Throws] = useState(0);
  // const [player2Throws, setPlayer2Throws] = useState(0);

  const [selectedPlayer, setSelectedPlayer] = useState(true);

  const [currentThrow, setCurrentThrow] = useState("");
  const [nextLegButton, setNextLegButton] = useState(false);
  const [legCount, setLegCount] = useState(1);

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
  // const buttonNext = useRef();
  const button0 = useRef();
  // const invalidSign = useRef();
  // const gameOverSign = useRef();
  // const bustSign = useRef();
  const messageSect = useRef();

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

  // const setAverage = (
  //   currentThrow,
  //   playerTotal,
  //   playerTotalFunc,
  //   playerThrows,
  //   playerThrowsFunc,
  //   playerAvgFunc
  // ) => {
  //   playerThrowsFunc(playerThrows + 1);
  //   console.log(playerThrows);
  //   playerTotalFunc(playerTotal + currentThrow);
  //   playerAvgFunc(playerTotal / playerThrows);
  //   console.log(playerTotal);
  //   // console.log(playerScore);
  // };

  const addScore = (
    // currentThrow,
    playerScore,
    playerScoreFunc,
    playerLegs,
    playerLegsFunc
    //////////////
    // playerTotal,
    // playerTotalFunc,
    // playerThrows,
    // playerThrowsFunc,
    // playerAvgFunc
  ) => {
    // setAverage(
    //   playerScore,
    //   playerTotal,
    //   playerTotalFunc,
    //   playerThrows,
    //   playerThrowsFunc,
    //   playerAvgFunc
    // );

    if (playerScore == currentThrow) {
      // gameOverSign.current.style.display = "block";
      playerScoreFunc(0);
      playerLegsFunc(playerLegs + 1);
      buttonDel.current.disabled = true;
      toggleButtonsDisability(true);
      setNextLegButton(true);
      messageSect.current.textContent = "GAME OVER";
      setLegCount(legCount + 1);
      // buttonDon.current.style.display = "none";
      // buttonNext.current.style.display = "block";
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
    if (nextLegButton) {
      nextLeg();
    } else {
      if (selectedPlayer) {
        addScore(
          // currentThrow,
          player1Score,
          setPlayer1Score,
          player1Legs,
          setPlayer1Legs
          // player1Total,
          // setPlayer1Total,
          // player1Throws,
          // setPlayer1Throws,
          // setPlayer1Avg
        );
      }
      if (!selectedPlayer) {
        addScore(
          // currentThrow,
          player2Score,
          setPlayer2Score,
          player2Legs,
          setPlayer2Legs
          // player2Total,
          // setPlayer2Total,
          // player2Throws,
          // setPlayer2Throws,
          // setPlayer2Avg
        );
      }
      console.log(`player1 ${player1Score}: player2 ${player2Score}`);
      setCurrentThrow("");
    }
  };

  const applyBustSign = (playerScore) => {
    if (
      (Number(currentThrow) > playerScore && Number(currentThrow) < 181) ||
      Number(currentThrow) === playerScore - 1
    ) {
      messageSect.current.textContent = "BUST";
      // bustSign.current.style.display = "block";
      toggleButtonsDisability(true);
    }
    //  else {
    //   bustSign.current.style.display = "none";
    // }
  };

  const nextLeg = () => {
    messageSect.current.textContent = "";

    // gameOverSign.current.style.display = "none";
    setPlayer1Score(Number(score));
    setPlayer2Score(Number(score));
    buttonDel.current.disabled = false;
    toggleButtonsDisability(false);
    setNextLegButton(false);
    if (legCount % 2 === 0) {
      player2Ref.current.classList.add("active-player-score");
      player1Ref.current.classList.remove("active-player-score");
      setSelectedPlayer(false);
    }
    if (legCount % 2 !== 0) {
      player1Ref.current.classList.add("active-player-score");
      player2Ref.current.classList.remove("active-player-score");
      setSelectedPlayer(true);
    }

    // switchPlayer();
  };

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
    // if (buttonDon) {
    if (Number(currentThrow) > 180) {
      buttonDon.current.disabled = true;
      messageSect.current.textContent = "INVALID SCORE";
      // invalidSign.current.textContent = "TEST";
      // invalidSign.current.style.display = "block";
    } else if (!nextLegButton) {
      buttonDon.current.disabled = false;
      messageSect.current.textContent = "";
      // invalidSign.current.style.display = "none";
    }
    // }
  }, [currentThrow]);

  useEffect(() => {
    if (selectedPlayer) {
      applyBustSign(player1Score);
    } else if (!selectedPlayer) {
      applyBustSign(player2Score);
    }
  }, [currentThrow]);

  useEffect(() => {
    messageSect.current.textContent = "";
  }, []);

  return (
    <div>
      <div className="score-container">
        <section className="spacing">
          <h2>{player1Name}</h2>
          <h2>{player2Name}</h2>
        </section>
        <section className="spacing">
          <span className="dont-move">{player1Legs}</span>
          <span>LEGS</span>
          <span className="dont-move">{player2Legs}</span>
        </section>
        <section>
          <div className="spacing">
            <span ref={player1Ref} className="active-player-score dont-move">
              {player1Score}
            </span>
            <span>SCORE</span>
            <span ref={player2Ref} className="dont-move">
              {player2Score}
            </span>
          </div>

          {/* <span>Avg:00</span> */}
        </section>
        {/* <section className="spacing">
          <span className="dont-move">{player1Avg}</span>
          <span>Avg</span>
          <span className="dont-move">{player2Avg}</span>
        </section> */}
      </div>
      <section id="throw-section">
        <h2>{currentThrow}</h2>
      </section>

      <section className="message-section">
        <h2 ref={messageSect}>TEST </h2>
      </section>

      <section className="checkout-section">
        <span>T20</span>
        <span>T20</span>
        <span>D20</span>
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
            {nextLegButton ? `Next leg` : `Done`}
          </button>
        </div>
      </section>

      <a href="https://darts-calculator.vercel.app">New Game</a>
    </div>
  );
};

export default Game;
