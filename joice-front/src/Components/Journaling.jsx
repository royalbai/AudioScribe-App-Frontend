import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function Journaling() {

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const [journals, setJournals] = useState([]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition</span>;
  }

  const handleSaveJournal = () => {
    setJournals([...journals, {text: transcript, date: new Date().toString()}]);
    resetTranscript();
  }

  const toggleMic = () => {
    if(isListening){
      SpeechRecognition.stopListening();
    }else{
      SpeechRecognition.startListening({ continuous:true });
    }
    setIsListening(!isListening);
  }

  return (
    <div>
      <h3>{listening ? <i className="fa-solid fa-microphone-lines"></i> : <i className="fa-solid fa-microphone-lines-slash"></i>}</h3>
      <button onClick={toggleMic}>{isListening ? "Stop" : "Start"}</button>
      <button onClick={handleSaveJournal}>Save Journal</button>
      <p>{transcript}</p>
      <ul>
        {journals.map((journal, index) => (
          <li key={index}>
            <p>{journal.text}</p>
            <p>{journal.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Journaling;