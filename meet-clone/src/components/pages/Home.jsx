import React, { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import videoCamera from "../../assets/video-camera.png";
import keyboard from "../../assets/keyboard.png";
import "./Home.css";

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleButtonClick = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="home-container">
      <Header />
      <div className="mainContiner">
        <div className="main-section">
          <h1>
            Video calls and meetings <br /> for everyone
          </h1>
          <p className="changes">
            Connect, collaborate and celebrate from <br /> anywhere with Google
            Meet
          </p>
          <div className="btns">
            {/* New Meeting Button */}
            <button
              className="new-meeting-button"
              onClick={handleButtonClick}
              aria-expanded={showDropdown}
            >
              <img src={videoCamera} alt="Video Camera Icon" className="icon" />
              New Meeting
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <ul className="dropdown-menu">
                <li className="dropdown-option">
                  <button>Create a Meeting for Later</button>
                </li>
                <li className="dropdown-option">
                  <button>Start an Instant Meeting</button>
                </li>
                <li className="dropdown-option">
                  <button>Schedule in Google Calendar</button>
                </li>
              </ul>
            )}

            {/* Join Meeting Section */}
            <div className="join-meeting-section">
              <div className="input-container">
              <span className='inputContainer'>
                <img
                  src={keyboard}
                  alt="Keyboard Icon"
                  className="input-icon"
                />
                <input
                  type="text"
                  placeholder="Enter a code or link"
                  className="meeting-input"
                />

              </span>
              </div>
              <button className="join-button">Join</button>
            </div>
          </div>
          <p>
            <a href="#" className="learn-more-link">
              Learn more
            </a>{" "}
            about Google Meet
          </p>
        </div>

        <div className='sideBarContainer'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Home;
