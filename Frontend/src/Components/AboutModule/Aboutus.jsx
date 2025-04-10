import React from "react";
import Footer from './Footer';


import NavBar from "../CommonModule/NavBarModule/NavBar";
import "../../App.css"; // 







const Aboutus = () => {
    return (
        <div>
            <NavBar />
            <div className="aboutUsContainer">
                {/* <h1>About Us</h1> */}
                <div className="container">
      <h1 className="headingGradient">WallGodds: Minimal by Design, Inspired by You</h1>
      <p className="description">

      WallGodds is an open-source wallpaper project that fosters collaboration between developers and designers to create a dynamic platform for wallpapers. With a seamless blend of creativity and technology, WallGodds delivers an immersive experience for those who appreciate exceptional visual aesthetics.
  <br></br>
  Developers can contribute by enhancing the platform’s functionality, optimizing performance, and introducing innovative features, while designers can showcase their creativity by submitting stunning wallpapers for a global audience. With a focus on minimalism and user experience, WallGodds provides an open and collaborative environment where art and technology converge.
     
      </p>

      <div className="section">
        <img src="mission.png" alt="Our Mission" className="image" />
        <div className="textContainer">
        <h2 className="gradientHeading" >Our Mission</h2>

          <p className="text">
            At WallGodds, we strive to make digital art easily accessible to everyone. Our platform allows users to effortlessly discover wallpapers while giving designers a dedicated space to share their creativity. With a focus on simplicity, efficiency, and inclusivity, we create a seamless browsing experience across all devices. Through open-source collaboration, we foster a community that values innovation and user-centric design.
          </p>
        </div>
      </div>

      <div className="section reverse">
        <img src="inspiration.png" alt="Our Inspiration" className="image" />
        <div className="textContainer">
          <h2 className="gradientHeading">Our Inspiration</h2>
          <p className="text">
            Inspired by simplicity, efficiency, and inclusivity, WallGodds is built with a clean and functional design. Our goal is to offer a smooth browsing experience while fostering a growing community of designers, developers, and enthusiasts who bring unique creativity to the platform.
          </p>
        </div>
      </div>

      <div className="section">
        <img src="core-values.png" alt="Core Values" className="image"/>
        <div className="textContainer">
          <h2 className="gradientHeading">Core Values</h2>
          <p className="text">
            WallGodds values creativity, user-centric design, and open collaboration. We prioritize high-quality wallpapers, seamless performance, and an engaging community-driven approach. Recognizing and supporting contributors is at the heart of our platform, ensuring their work is appreciated and celebrated.
          </p>
        </div>
      </div>

      <div className="section reverse">
        <img src="milestone.png" alt="Milestone & Growth" className="image" />
        <div className="textContainer">
          <h2 className="gradientHeading">Milestone & Growth</h2>
          <p className="text">
            WallGodds has achieved significant milestones, including acceptance into Winter of Code 4.0, JWOC, and Apertre 2.0. As our community expands, we remain committed to enhancing contributor recognition and optimizing the user experience. Through continuous improvements driven by user feedback, we prioritize design, performance, security, and scalability to ensure a robust and evolving platform.
          </p>
        </div>
      </div>

      <h2 className="joinTitle">Join Our Community</h2>
      <div className="socialIcons">
        <a href="https://discord.gg/kTQ5KWANp8" className="icon" target="_blank"><img src="discord-icon.png" alt="Discord" /></a>
        <a href="https://github.com/Parnab03/WallGodds" className="icon" target="_blank"><img src="github-icon.png" alt="GitHub" /></a>
        <a href="https://www.linkedin.com/company/wallgodds/" className="icon" target="_blank"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
      </div>

     
  
  
  

  



</div>
            </div>
            <Footer />
        </div>
    );
};

export default Aboutus;
