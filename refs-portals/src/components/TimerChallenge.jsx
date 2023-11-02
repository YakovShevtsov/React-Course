import { useState } from "react";

const TimerChallenge = ({title, targetTime}) => {
    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const [isTimerExpired, setIsTimerExpired] = useState(false);


    const handleStartTimer = () => {
        setTimeout(() => {
            setIsTimerExpired(true);
        }, targetTime * 1000)
        setIsTimerStarted(true);
    }

    return(
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={handleStartTimer}>
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