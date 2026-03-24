import { useState } from "react";
import "./CaptchaContainer.css";
import VerifyCheckbox from "./VerifyCheckbox";
import challenges from "./challenges/challenges";

function CaptchaContainer() {
  const [started, setStarted] = useState(false);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);

  const handleStart = () => {
    setStarted(true);
  };

  const handleNextChallenge = () => {
    setCurrentChallengeIndex((prev) => prev + 1);
  };

  const CurrentChallenge = challenges[currentChallengeIndex];

  return (
    <div className="captcha-page">
      <div className="captcha-card">
        <div className="captcha-header">
          <p className="captcha-badge">Security Check</p>
          <h1 className="captcha-title">Advanced Human Verification</h1>
          <p className="captcha-subtitle">
            Please complete the following verification steps to continue.
          </p>
        </div>

        {!started && (
          <div className="captcha-content">
            <VerifyCheckbox onVerify={handleStart} />
          </div>
        )}

        {started && CurrentChallenge && (
          <div className="captcha-content">
            <CurrentChallenge onNext={handleNextChallenge} />
          </div>
        )}

        {started && !CurrentChallenge && (
          <div className="captcha-finished">
            <h2>Verification Complete</h2>
            <p>You are human enough for now.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CaptchaContainer;