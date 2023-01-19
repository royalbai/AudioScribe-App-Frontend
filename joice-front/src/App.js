import React, { useRef, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Home from './Components/Home';
import Journaling from "./Components/Journaling";
import SavedNotes from "./Components/SavedNotes";
import Settings from "./Components/Settings";

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
    <div className="App">
      <header>
        <h1>Joice</h1>
        <div className="navHeader">
          <button className="burgerIcon" ref={mobileMenuIconRef} onClick={handleMobileMenuIconClick}>
            <div className="navBar"></div>
          </button>
          <p>Home</p>
        </div>
      </header>
      <nav className="mobileNav" ref={mobileMenuDropdownRef}>
        <ul>
          <li>
            <i className="fa-solid fa-user"></i>
            <div>
              <p>Name</p>
              <p>Email@joice.ca</p>
            </div>
          </li>
          <li>
            <i className="fa-solid fa-house-chimney"></i>
            <Link to="/" onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <i className="fa-solid fa-feather"></i>
            <Link to="/journaling" onClick={handleLinkClick}>Journals</Link>
          </li>
          <li>
            <i className="fa-solid fa-gear"></i>
            <Link to="/settings" onClick={handleLinkClick}>Settings</Link>
          </li>
        </ul>
    </nav>
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
