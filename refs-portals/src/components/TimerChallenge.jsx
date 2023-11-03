import { useState, useRef } from "react";

const TimerChallenge = ({title, targetTime}) => {
    const timer = useRef();

    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const [isTimerExpired, setIsTimerExpired] = useState(false);

    const handleStartTimer = () => {
        timer.current = setTimeout(() => {
            setIsTimerExpired(true);
        }, targetTime * 1000)
        setIsTimerStarted(true);
    }

    const handleStopTimer = () => {
        clearTimeout(timer.current);
    }

    return(
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={isTimerStarted ? handleStopTimer : handleStartTimer}>
                    {isTimerStarted ? 'Stop' : 'Start'} challenge
                </button>
            </p>
            <p className={isTimerStarted ? 'active' : undefined}>
                {isTimerStarted ? 'Time is running' : 'Timer inactive'}
            </p>
            {isTimerExpired && <p>You lost</p>}
        </section>
    );
}

export default TimerChallenge;