import { useEffect, useState } from "react";
import "../styles/styles.css";
import adventureImg from "../assets/adventure.jpg";
import luxuryImg from "../assets/luxury.jpg";
import cityImg from "../assets/city.jpg";

const services = [
  { title: "Adventure Tours", desc: "Thrilling adventures with expert guides.", img: adventureImg },
  { title: "Luxury Stays", desc: "Stay at top-rated luxury resorts.", img: luxuryImg },
  { title: "City Exploration", desc: "Discover vibrant cities & hidden gems.", img: cityImg }
];

const Services = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="services">
      {services.map((service, index) => (
        <div
          key={index}
          className={`card ${animate ? "active" : ""}`}
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <img src={service.img} alt={service.title} />
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
