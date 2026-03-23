function SuccessModal({ onNext }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
            width: "300px",
            height: "200px",
            backgroundColor: "rgba(55, 54, 57, 0.9)",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
            textAlign: "center",
        }}
      >
        <h2>🎉 You are correct! 🎉</h2>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

export default SuccessModal;