
function VerifyCheckbox({ onVerify }){
    const handleChange = () => {
        onVerify();
    }

    return (
        <label style={{ cursor: "pointer" }}>
            <input type="checkbox" onChange={handleChange} />
            {" "}I am human
        </label>
    );
}

export default VerifyCheckbox;