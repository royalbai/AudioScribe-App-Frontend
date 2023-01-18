import React, { useRef, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Journaling from "./Components/Journaling";
import SavedNotes from "./Components/SavedNotes";

function App() {
  const mobileMenuIconRef = useRef(null);
  const mobileMenuDropdownRef = useRef(null);

  const handleMobileMenuIconClick = () => {
    mobileMenuIconRef.current.classList.toggle("active");
    mobileMenuDropdownRef.current.classList.toggle("active");
  }

  const handleLinkClick = () => {
    mobileMenuDropdownRef.current.classList.remove("active");
    mobileMenuIconRef.current.classList.remove("active");
  }

  return (
    <div className="App wrapper">
      <h1>Joice</h1>
      <section className="navHeader">
        <button className="burgerIcon" ref={mobileMenuIconRef} onClick={handleMobileMenuIconClick}>
          <div className="navBar"></div>
        </button>
        <p>Create New Journal</p>
      </section>
      <nav className="mobileNav" ref={mobileMenuDropdownRef}>
        <ul>
            <li>
                <p onClick={handleLinkClick}>yo</p>
            </li>
            <li>
                <p onClick={handleLinkClick}>yo</p>
            </li>
            <li>
                <p onClick={handleLinkClick}>yo</p>
            </li>
            <li>
                <p onClick={handleLinkClick}>yo</p>
            </li>
        </ul>
    </nav>
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
