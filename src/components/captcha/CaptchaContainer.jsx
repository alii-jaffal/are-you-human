import { useState } from "react";
import VerifyCheckbox from "./VerifyCheckbox";
import SliderChallenge from "../challenges/SliderChallenge";

function CaptchaContainer(){
    const [started, setStarted] = useState(false);

    const handleStart = () => {
        setStarted(true)
    };

    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            width: "300px",
            margin: "20px auto",
            borderRadius: "8px",
            }}
        >
            {!started && <VerifyCheckbox onVerify={handleStart} />}

            {started && <SliderChallenge />}
        </div>
    );
}

export default CaptchaContainer;