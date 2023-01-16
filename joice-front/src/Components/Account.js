import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useNavigate } from "react-router-dom";

// Components
// import Header from "./Header";
// import About from "./About";
// import Planner from "./Planner";
// import Footer from "./Footer";


function Account() {

    // const {user, logout} = UserAuth();
    // const navigate = useNavigate();

    // const handleLogout = async () => {
    //     try {
    //         await logout();
    //         navigate("/");
    //         // console.log("you are logged out");
    //     } catch (e) {
    //         // console.log(e.message);
    //     }
    // }

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser Doesn't Support Speech Recognition</span>
    }

    return (
        <div>
            <div className="account">
                <h3>Account User:</h3>
                {/* <p>{user && user.email}</p> */}
            </div>
            <div>
                <p>Microphone: {listening ? "on" : "off"}</p>
                <button onClick={SpeechRecognition.startListening}>Start</button>
                <button onClick={SpeechRecognition.stopListening}>Stop</button>
                <button onClick={resetTranscript}>Reset</button>
                <p>{transcript}</p>
            </div>
            <div className="logout">
                {/* <button onClick={handleLogout}>Logout</button> */}
            </div>
            {/* <Header />
            <About />
            <Planner />
            <Footer /> */}
        </div>
    );
};

export default Account;