import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setsubmitted] = useState(false);

  function handlePlayerNameChange(event) {
    setPlayerName(event.target.value);
  }

  function handleSubmit() {
    setsubmitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : "unknown entity"} </h2>
      <p>
        <input type="text" onChange={handlePlayerNameChange} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
