import { Link } from "react-router-dom";
import { useState } from "react";

const Start = () => {
  const [score, setScore] = useState("501");

  return (
    <div>
      <section className="players">
        <div>
          <input type="text" defaultValue={"player 1"} />
          <input type="text" defaultValue={"player 2"} />
          {/* <input type="text" placeholder="add player" />
          <input type="text" placeholder="add player" /> */}
        </div>

        <label>
          <input type="checkbox" />
          Doubles
        </label>
      </section>
      <section className="score">
        <label for="score">Select score:</label>
        <select name="score" id="score">
          <option value="501">501</option>
          <option value="301">301</option>
          <option value="120">120</option>
        </select>
      </section>
      <Link to={`/game/${score}`}>Start Game</Link>
    </div>
  );
};

export default Start;
