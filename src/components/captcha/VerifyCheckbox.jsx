import "./VerifyCheckbox.css";

function VerifyCheckbox({ onVerify }) {
  return (
    <div className="verify-box">
      <label className="verify-label">
        <input
          className="verify-input"
          type="checkbox"
          onChange={onVerify}
        />
        <span className="verify-custom-box"></span>
        <span className="verify-text">I am human</span>
      </label>

      <div className="verify-brand">
        <div className="verify-brand-logo">✓</div>
        <div className="verify-brand-text">
          <p>reCAPTCHA</p>
          <span>totally real edition</span>
        </div>
      </div>
    </div>
  );
}

export default VerifyCheckbox;