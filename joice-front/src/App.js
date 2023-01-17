import { Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Journaling from "./Components/Journaling";
import SavedNotes from "./Components/SavedNotes";

function App() {
  return (
    <div className="App wrapper">
      <h1>Joice</h1>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Journaling />} />
        <Route path="/savednotes" element={<SavedNotes />} />
      </Routes>
    </div>
  );
}

export default App;
