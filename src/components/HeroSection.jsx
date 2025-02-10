import { useEffect, useState } from "react";
import "../styles/styles.css";
import bgImage from "../assets/bg.jpg"; 

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <h1 className={`fade-in-down ${animate ? "active" : ""}`}>
        Explore the World with Us
      </h1>
      <p className={`fade-in-up ${animate ? "active" : ""}`}>
        Discover amazing destinations and unforgettable experiences.
      </p>
      <button className={`btn ${animate ? "active" : ""}`}>Book Your Trip</button>
    </div>
  );
};

export default HeroSection;
