import { useState } from "react";
import "./DisappearingButton.css";
import SuccessModal from "../SuccessModal";

function DisappearingButton({ onNext }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({});
  const [message, setMessage] = useState("");

  const moveButton = () => {
    const randomX = Math.floor(Math.random() * 220) - 110;
    const randomY = Math.floor(Math.random() * 120) - 60;

    setButtonStyle({
      transform: `translate(${randomX}px, ${randomY}px)`,
    });

    setMessage("Too slow. Anticipate the button's emotions.");
  };

  const handleClick = () => {
    setMessage("");
    setShowSuccess(true);
  };

  return (
    <div className="disappearing-challenge">
      <div className="challenge-top-row">
        <span className="challenge-step">Challenge 2</span>
        <span className="challenge-type">Reflex Test</span>
      </div>

      <h2 className="challenge-title">Click the button</h2>
      <p className="challenge-description">
        This task is straightforward and should not present any unusual
        difficulties whatsoever.
      </p>

      <div className="button-arena">
        <button
          className="escape-button"
          style={buttonStyle}
          onMouseEnter={moveButton}
          onClick={handleClick}
        >
          Click me
        </button>
      </div>

      {message && <p className="challenge-message error">{message}</p>}

      {showSuccess && <SuccessModal onNext={onNext} />}
    </div>
  );
}

export default DisappearingButton;