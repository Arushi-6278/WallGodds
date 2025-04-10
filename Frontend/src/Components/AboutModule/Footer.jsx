// footer.jsx
import React from "react";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p className ="rights-reserved-text">© WallGodds Community 2025. All rights reserved.</p>
       
       
        <div className="footer-links">
            <a href="#">Know more 
            <span style={{
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    width: '30px', 
    height: '30px', 
    marginLeft: '1px' 
  }}>
    <img
      src="Arrow-know-more.png"
      alt="Know more"
      style={{
        verticalAlign: 'middle',
        maxWidth: '80%', 
        maxHeight: '80%' 
      }}
    />
  </span>
            </a>
  
          <div className="github-icon">
            <a
              href="https://github.com/Parnab03/WallGodds"
              target="_blank"
              rel="noopener noreferrer"
            >
                <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-image-container">
        
        <img
          src="/let’s work together.png"
          alt="LET'S WORK TOGETHER" 
          className="lets-work-together-image" 
        />
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Footer;