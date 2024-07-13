import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timeout = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timeout.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }
  function handleStart() {
    timeout.current = setInterval(() => {
      setTimeRemaining((previousTimeRemaining) => previousTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timeout.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <button onClick={isTimerActive ? handleStop : handleStart}>
          {isTimerActive ? "Stop" : "Start"} Challenge
        </button>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
