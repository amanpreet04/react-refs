export default function ResultModal({ result, targetTime }) {
  return (
    <dialog className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer when <strong>{targetTime}X seconds</strong> were
        left
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
