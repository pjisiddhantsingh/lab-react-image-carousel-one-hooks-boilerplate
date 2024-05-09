import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="prev-btn" onClick={goToPrevImage}><ArrowBackIosIcon /></button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} className="image" />
      <button className="next-btn" onClick={goToNextImage}><ArrowForwardIosIcon /></button>
    </div>
  );
}

export default Carousel;
