/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './Carousel.css'

const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar al siguiente índice
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para retroceder al índice anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Función para cambiar automáticamente las imágenes
  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, interval);

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(autoPlay);
  }, []);

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__button carousel__button--left">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>
      </button>
      <img className="carousel-image" src={images[currentIndex]} alt="carousel"  />
      <button onClick={nextSlide} className="carousel__button carousel__button--right">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
