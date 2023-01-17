import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function Journaling() {

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [journals, setJournals] = useState([]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition</span>;
  }

  const handleSaveJournal = () => {
    setJournals([...journals, {text: transcript, date: new Date().toString()}]);
    resetTranscript();
  }

  const micOn = () => {
    SpeechRecognition.startListening({ continuous:true });
  }

  const micOff = () => {
    SpeechRecognition.stopListening();
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={micOn}>Start</button>
      <button onClick={micOff}>Stop</button>
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