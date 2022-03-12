import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [score, setScore] = useState("501");
  const [legs, setLegs] = useState("3");
  const [player1Name, setPlayer1Name] = useState("player1");
  const [player2Name, setPlayer2Name] = useState("player2");

  return (
    <GameContext.Provider
      value={[
        score,
        setScore,
        legs,
        setLegs,
        player1Name,
        setPlayer1Name,
        player2Name,
        setPlayer2Name,
      ]}
    >
      {props.children}
    </GameContext.Provider>
  );
};
