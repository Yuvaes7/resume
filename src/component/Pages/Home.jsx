import React from "react";
import { useNavigate } from "react-router-dom";
import "../Navbar.css";

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <div className="home-container">
      <div
        className="background-box"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/desk.jpg"})`,
        }}
      >
        <div className="content">
          <h1>Resume</h1>
          <p>This is my professional resume</p>
        </div>
      </div>

      <div className="dee-content">
        <div
          className="dee-box"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/dee.jpg"})`,
          }}
        ></div>

        <div className="dee-boxone">
          <h1>Hey there!</h1>
          <p>
            I'm Neeluru Yuvakiran Reddy, a Cybersecurity enthusiast pursuing my B.Tech in Computer Science and Engineering at MITS, Madanapalle.
            I have hands-on experience in ethical hacking, network security, and encryption-based applications.
            Passionate about solving cybersecurity challenges and building secure applications using modern technologies.
          </p>
          <div className="dee-boxtwo">
            <button onClick={handleNavigate}>My Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};
