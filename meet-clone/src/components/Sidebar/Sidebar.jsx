import React, { useState } from "react";
import "./Sidebar.css";
import one from '../assets/One-icone.svg'
import two from '../assets/two.svg'
import three from '../assets/three.svg'
const slides = [
  {
    image: one, // Replace with your image URL
    title: "Get a link that you can share",
    description:
      "Click New meeting to get a link that you can send to people that you want to meet with."
  },
  {
    image: two,// Replace with your image URL
    title: "Plan your meetings",
    description: "Schedule your meetings at your preferred times."
  },
  {
    image: three,// Replace with your image URL
    title: "Join instantly",
    description: "Click on the link to join meetings instantly."
  }
];

function Sidebar() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="carousel-image"
        />
        <h3 className="carousel-title">{slides[currentSlide].title}</h3>
        <p className="carousel-description">
          {slides[currentSlide].description}
        </p>
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;