import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const userWin = remainingTime >= 1;

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
    >
      {userLost && <h2>You Lost</h2>}
      {userWin && (
        <>
          <h2>You Win!</h2>
          <p>Your score: </p>
        </>
      )}
      <p>The target time was {targetTime} seconds</p>
      <p>
        You stopped the timer with
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
