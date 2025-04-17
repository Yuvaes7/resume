import React from 'react';
import "../Navbar.css"; // Your CSS file

const Contact = () => {
  return (
    <>
      <div className='contacttop'>
        <div 
          className="contact" 
          style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + "/contactme.jpg"})`, 
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            margin: 0,
            padding: 0  
          }}
        >
          <div className="contact-content">
            <h2>Contact</h2>
          </div>
          <div className='contactinfo'>
            <ul>
              <li>
                <i className="fa-regular fa-envelope" style={{ fontSize: '30px', padding: '2%' }}></i>
                <b>EMAIL ADDRESS:</b> yuvakiranreddy7@gmail.com
              </li>
              <li>
                <i className="fa-solid fa-phone-volume" style={{ fontSize: '30px', padding: '2%' }}></i>
                <b>CONTACT NUMBER:</b> +91 88973 37784
              </li>
            </ul>
          </div>
          <div className='contactinfone'>
            <h4>SOCIAL MEDIA ADDRESS</h4>
          </div>
          <div className='contactinfotwo'>
            <ul>
              <li>
                <i className="fa-brands fa-linkedin" style={{ fontSize: '30px', padding: '2%' }}></i>
                <b>LinkedIn: </b>
                <a href="https://www.linkedin.com/in/yuvakiran-reddy-neeluru-108a0328a" target="_blank" rel="noopener noreferrer">
                  Yuvakiran Reddy
                </a>
              </li>
              <li>
                <i className="fa-brands fa-github" style={{ fontSize: '30px', padding: '2%' }}></i>
                <b>GitHub: </b>
                <a href="https://github.com/Yuvaes7" target="_blank" rel="noopener noreferrer">
                  Yuvaes7
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
