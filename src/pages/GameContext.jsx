import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [score, setScore] = useState("501");
  const [legs, setLegs] = useState("3");

  return (
    <GameContext.Provider value={[score, setScore, legs, setLegs]}>
      {props.children}
    </GameContext.Provider>
  );
};
