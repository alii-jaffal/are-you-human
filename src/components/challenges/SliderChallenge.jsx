import { useState } from "react";

function SliderChallenge() {
  const [sliderValue, setSliderValue] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);

  const handleSliderChange = () => {
    setSliderValue((s) => s + 0.01);
    setDisplayValue((d) => Number(d) + 0.01);
  };

  const handleInputChange = (e) => {
    setDisplayValue(e.target.value);
  };

  return (
    <div>
      <h2>Set the value to exactly 67%</h2>

      <input
        type="text"
        value={displayValue}
        onChange={handleInputChange}
        style={{cursor: "default", textAlign: "center", background: "transparent", border: "none", outline: "none", fontSize: "17px"}}
      /> %

      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      />

      <button>Submit</button>
    </div>
  );
}

export default SliderChallenge;