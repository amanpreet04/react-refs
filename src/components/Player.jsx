import { useRef, useState } from "react";

export default function Player() {
  const playerNameRef = useRef();
  const [playerName, setPlayerName] = useState(null);
  // const [submitted, setsubmitted] = useState(false);

  // function handlePlayerNameChange(event) {
  //   setPlayerName(event.target.value);
  // }

  function handleSubmit() {
    // setsubmitted(true);
    setPlayerName(playerNameRef.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"} </h2>
      <p>
        <input
          ref={playerNameRef}
          type="text"
          // onChange={handlePlayerNameChange}
        />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
