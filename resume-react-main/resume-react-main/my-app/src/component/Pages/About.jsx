import React from "react";
import "../Navbar.css";

export const About = () => {
  return (
    <>
      <div className="education">
        <h2>Education</h2>

        <div className="education-details">
          <div className="education-box">
            <h4>B.Tech in Computer Science Engineering (2022–2026)</h4>
          </div>
          <div className="educations-box">
            <p>Madanapalle Institute of Technology & Science | CGPA: 8.01</p>
          </div>
        </div>

        <div className="education-details">
          <div className="education-box">
            <h4>Intermediate (2020–2022)</h4>
          </div>
          <div className="educations-box">
            <p>AP Model College | MPC</p>
          </div>
        </div>

        <div className="education-details">
          <div className="education-box">
            <h4>SSC (2019–2020)</h4>
          </div>
          <div className="educations-box">
            <p>Z.P.H.S, Khaderpeta | Percentage: 90%</p>
          </div>
        </div>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <div className="skillstwo">
          <div className="skillsone">
            <h4>Cybersecurity</h4>
            <p>Ethical Hacking, Vulnerability Assessment, Risk Management, Cryptography, Threat Hunting, Malware Analysis</p>
          </div>
          <div className="skillsone">
            <h4>Programming Languages</h4>
            <p>Java</p>
          </div>
          <div className="skillsone">
            <h4>Tools</h4>
            <p>Wireshark, Nmap, Burp Suite, Metasploit, Dirb, Azure Sentinel</p>
          </div>
          <div className="skillsone">
            <h4>Languages Known</h4>
            <p>Telugu, English, German</p>
          </div>
        </div>
      </div>

      <div className="project">
        <h2>PROJECTS</h2>

        <div className="projecttwo">
          <div className="projectone">
            <h4>EcanConnect</h4>
            <p>Secure messaging app with face authentication using OpenCV</p>
            <ul>
              <li>Implemented real-time facial recognition for user validation.</li>
              <li>AI-driven message modification features under development.</li>
            </ul>
          </div>
        </div>

        <div className="projecttwo">
          <div className="projectone">
            <h4>Image Encryption Tool</h4>
            <p>Command Line Interface tool for AES-based image encryption.</p>
            <ul>
              <li>Supports multiple image formats and decryption compatibility.</li>
            </ul>
          </div>
        </div>

        <div className="projecttwo">
          <div className="projectone">
            <h4>Text Encryption Application</h4>
            <p>Web application built using Node.js and AES-256-CBC encryption.</p>
            <ul>
              <li>Encrypts and decrypts user text data securely through browser interface.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="certification">
        <h2>CERTIFICATIONS</h2>
        <div className="certificationtwo">
          <div className="certificationone">
            <ul>
              <li>Ethical Hacking – Nikistian Media Pvt Ltd</li>
              <li>Computer Networks & Network Security – NPTEL</li>
              <li>SQL Certification</li>
              <li>Speaking Effectively, German, Research Methodology – NPTEL</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="honor">
        <h2>HONORS & INTERESTS</h2>
        <div className="honortwo">
          <ul>
            <li>Active participant in CTFs and cybersecurity challenges.</li>
            <li>Creating YouTube content on spirituality and practicing spiritual rituals.</li>
          </ul>
        </div>
      </div>
    </>
  );
};
