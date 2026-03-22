import CaptchaContainer from '../components/captcha/CaptchaContainer'


function Home(){

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h2>Advanced Human Verification</h2>
            <CaptchaContainer />
        </div>
    );
}

    
export default Home