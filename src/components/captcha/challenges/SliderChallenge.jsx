import { useState } from "react";
import "./SliderChallenge.css";
import SuccessModal from "../SuccessModal";

function SliderChallenge({ onNext }) {
  const [sliderValue, setSliderValue] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleSliderChange = () => {
    setSliderValue((s) => s + 0.01);
    setDisplayValue((d) => Number(d) + 0.01);
  };

  const handleInputChange = (e) => {
    setDisplayValue(e.target.value);
  };

  const handleSubmit = () => {
    if (Number(displayValue) === 67) {
      setMessage("");
      setShowSuccess(true);
    } else {
      setMessage("Rejected. Value must be exactly 67%.");
    }
  };

  return (
    <div className="slider-challenge">
      <div className="challenge-top-row">
        <span className="challenge-step">Challenge 1</span>
        <span className="challenge-type">Precision Test</span>
      </div>

      <h2 className="challenge-title">Set the value to exactly 67%</h2>
      <p className="challenge-description">
        Drag the slider until the value matches the required percentage with
        perfect human confidence.
      </p>

      <div className="slider-value-box">
        <input
          className="slider-value-input"
          type="text"
          value={displayValue}
          onChange={handleInputChange}
        />
        <span className="slider-percent">%</span>
      </div>

      <input
        className="slider-range"
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      />

      <div className="slider-actions">
        <button className="challenge-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {message && <p className="challenge-message error">{message}</p>}

      {showSuccess && <SuccessModal onNext={onNext} />}
    </div>
  );
}

export default SliderChallenge;