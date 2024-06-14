import { useState } from 'react';
import { FaCircleArrowRight as Next } from "react-icons/fa6";
import { FaArrowCircleLeft as Prev } from "react-icons/fa";

const slides = [
  {
    image: 'https://immagini.alvolante.it/sites/default/files/styles/image_gallery_big/public/news_galleria/2024/02/ferrari-sf24-formula-1.jpg?itok=-xivz59V',
    text: 'Ferrari SF24 2024'
  },
  {
    image: 'https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2024/2/15/cpcpjlw33a8xtrim0hzp/oracle-red-bull-racing-rb20-launch-2024',
    text: 'RedBull Racing RB20 2024'
  },
  {
    image: 'https://dimages2.gazzettaobjects.it/files/og_thumbnail/files/fp/uploads/2024/01/16/65a6ca4f3b08d.r_d.1472-1316-0.jpeg',
    text: 'Meclaren MCL39 2024'
  },
  {
    image: 'https://sportsbase.io/images/gpfans/copy_704x396/5974a05bfa22602a299177efcd33a2ecfdf91779.jpg',
    text: 'Mercedes W14 2024'
  },
  {
    image: 'https://i.ytimg.com/vi/vbg2IaCLXF4/maxresdefault.jpg',
    text: 'Aston Martin AMR24 2024'
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplayInterval, setAutoplayInterval] = useState(null);
  const [autoplay, setAutoplay] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const startAutoplay = () => {
    if (!autoplay) {
      setAutoplay(true);
      setAutoplayInterval(setInterval(() => {
        nextSlide();
      }, 3000)); 
    }
  };

  const stopAutoplay = () => {
    if (autoplay) {
      setAutoplay(false);
      clearInterval(autoplayInterval);
    }
  };

  const handlePrevClick = () => {
    stopAutoplay();
    prevSlide();
  };

  const handleNextClick = () => {
    stopAutoplay();
    nextSlide();
  };

  const handleBulletClick = (index) => {
    stopAutoplay();
    goToSlide(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-slide">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].text} />
        <h2 className="title">{slides[currentSlide].text}</h2>
      </div>
      <button onClick={handlePrevClick} className="carousel-button prev-button"><Prev /></button>
      <button onClick={handleNextClick} className="carousel-button next-button"><Next /></button>
      <div className="carousel-bullets">
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`carousel-bullet ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleBulletClick(index)}
          ></span>
        ))}
      </div>
      <div className="carousel-controls">
        {!autoplay && (
          <button onClick={startAutoplay} className="carousel-control-button">Play</button>
        )}
        {autoplay && (
          <button onClick={stopAutoplay} className="carousel-control-button">Stop</button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
