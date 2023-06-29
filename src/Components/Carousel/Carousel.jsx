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
      <button onClick={prevSlide} className="carousel__left">Anterior</button>
      <img className="carousel-image" src={images[currentIndex]} alt="carousel"  />
      <button onClick={nextSlide} className="carousel__right">Siguiente</button>
    </div>
  );
};

export default Carousel;
