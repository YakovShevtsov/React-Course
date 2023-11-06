import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  const handleStartTimer = () => {
    timer.current = setTimeout(() => {
      setIsTimerExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
    setIsTimerStarted(true);
  };

  const handleStopTimer = () => {
    clearTimeout(timer.current);
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        result="Lost"
        targetTime={targetTime}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerStarted ? handleStopTimer : handleStartTimer}>
            {isTimerStarted ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={isTimerStarted ? "active" : undefined}>
          {isTimerStarted ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
