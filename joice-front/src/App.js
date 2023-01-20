import React, { useRef, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Home from './Components/Home';
import Nav from './Components/Nav';
import Journaling from "./Components/Journaling";
import SavedNotes from "./Components/SavedNotes";
import Settings from "./Components/Settings";

function App() {


  return (
    <div className="App">
      <header>
        <h1>Joice</h1>
        <Nav />
      </header>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/journaling" element={<Journaling />} />
        <Route path="/savednotes" element={<SavedNotes />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
