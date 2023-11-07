import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const userWin = remainingTime >= 1;
  const userScore = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog
      className="result-modal"
      ref={dialog}
      onClose={onReset}
    >
      {userLost && <h2>You Lost</h2>}
      {userWin && (
        <h2>Your score: {userScore}</h2>
      )}
      <p>The target time was {targetTime} seconds</p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form
        method="dialog"
        onSubmit={onReset}
      >
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
