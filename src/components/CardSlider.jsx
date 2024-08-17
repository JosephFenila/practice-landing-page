import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css'; 

const CardSlider = () => {
  const settings = {
    dots: true,                
    infinite: true,            
    speed: 500,                // Animation speed in milliseconds
    slidesToShow: 3,           // Number of cards to show at once
    slidesToScroll: 1,         // Number of cards to scroll at once
    autoplay: true,            // Enables autoplay
    autoplaySpeed: 2000,       // Delay between each slide in autoplay
    arrows: true,              // Show next/prev arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <h2> Card Slider Example </h2>
      <Slider {...settings}>
        <div className="card">
          <h3>Card 1</h3>
          <p>This is the first card.</p>
        </div>
        <div className="card">
          <h3>Card 2</h3>
          <p>This is the second card.</p>
        </div>
        <div className="card">
          <h3>Card 3</h3>
          <p>This is the third card.</p>
        </div>
        <div className="card">
          <h3>Card 4</h3>
          <p>This is the fourth card.</p>
        </div>
        <div className="card">
          <h3>Card 5</h3>
          <p>This is the fifth card.</p>
        </div>
      </Slider>
    </div>
  );
};

export default CardSlider;
