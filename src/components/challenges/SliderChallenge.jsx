import { useState } from "react";
import SuccessModal from "../captcha/SuccessModal";

function SliderChallenge() {
  const [sliderValue, setSliderValue] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

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
      setShowSuccess(false);
    }
  };

  return (
    <div>
      <h2>Set the value to exactly 67%</h2>

      <input
        type="text"
        value={displayValue}
        onChange={handleInputChange}
        style={{
          background: "transparent",
          border: "none",
          outline: "none",
          fontSize: "20px",
          textAlign: "center",
        }}
      />%

      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      />

      <button onClick={handleSubmit}>Submit</button>

      {message && <p>{message}</p>}

      {showSuccess && <SuccessModal />}
    </div>
  );
}

export default SliderChallenge;