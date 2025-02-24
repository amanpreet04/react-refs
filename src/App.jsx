import Player from './components/Player.jsx';
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Medium" targetTime={3} />
        <TimerChallenge title="Difficult" targetTime={5} />
        <TimerChallenge title="Expert" targetTime={10} />
      </div>
    </>
  );
}

export default App;
