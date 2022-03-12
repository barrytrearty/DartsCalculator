import { Link } from "react-router-dom";
import { useState, useContext, useRef } from "react";
import { GameContext } from "./GameContext";

const Start = () => {
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

  const doubleRow = useRef();

  const handleCheckBox = (e) => {
    const checked = e.target.checked;
    if (checked) {
      console.log("checked");
      doubleRow.current.style.visibility = "visible";
    } else {
      doubleRow.current.style.visibility = "hidden";
    }
  };

  return (
    <div>
      <section className="players">
        <div className="player-row" id="singles-row">
          <input
            type="text"
            defaultValue={player1Name}
            className="rectangle"
            onChange={(e) => setPlayer1Name(e.target.value)}
          />
          <input
            type="text"
            defaultValue={player2Name}
            onChange={(e) => setPlayer2Name(e.target.value)}
            className="rectangle"
          />
        </div>
        <div className="checkbox-row">
          <label>Doubles</label>
          <input
            type="checkbox"
            value="1"
            onClick={(e) => {
              handleCheckBox(e);
            }}
          />
        </div>

        <div ref={doubleRow} className="player-row" id="doubles-row">
          <input type="text" defaultValue={"player 3"} className="rectangle" />
          <input type="text" defaultValue={"player 4"} className="rectangle" />
        </div>
      </section>
      <section className="score select">
        <label for="score">Score:</label>
        <select
          name="score"
          id="score"
          className="rectangle"
          onChange={(e) => setScore(e.target.value)}
        >
          <option value="501">501</option>
          <option value="401">401</option>
          <option value="301">301</option>
          <option value="201">201</option>
          <option value="120">120</option>
        </select>
      </section>
      <section className="legs select">
        <label for="legs">Legs:</label>
        <select
          name="legs"
          id="legs"
          className="rectangle"
          onChange={(e) => setLegs(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
      </section>
      <section>
        <Link to={`/game`}>
          <div className="start-button">START Game</div>
        </Link>
      </section>
    </div>
  );
};

export default Start;
