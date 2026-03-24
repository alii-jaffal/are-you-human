import "./SuccessModal.css";

function SuccessModal({ onNext }) {
  return (
    <div className="success-modal-overlay">
      <div className="success-modal-window">
        <div className="success-modal-icon">✓</div>
        <h2 className="success-modal-title">You are correct!</h2>
        <p className="success-modal-text">
          Disturbingly precise. We are monitoring this behavior.
        </p>
        <button className="success-modal-button" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;