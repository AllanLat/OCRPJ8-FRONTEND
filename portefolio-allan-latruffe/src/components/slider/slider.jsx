import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.css";


const Carousel = () => {
  
  const fileNames = [
    "PizzaBio.BZH-Pizza-Bretonne-Biologique-et-Vegetarienne-300x153.png.webp",
    "gldf.webp",
    "peleerin.webp",
    "REVERSE-PARKOUR-WEAR-international-parkour-clothing-300x118.png.webp",
    "guingamp.webp",
    "pkln.webp",
    "alto.webp",
    "hdl.webp",
    "prestashop-logo_mail-1619187466.png.webp",
    "atelier250.webp",
    "idealbaie.webp",
    "remi-mosa-300x156.png.webp",
    "atelierpopotin.webp",
    "mcb.webp",
    "terkan.webp",
    "cbr.webp",
    "mouller.webp",
    "toketa.webp",
    "fripestore.webp",
    "mxsport.webp",
    "villaspa.png"
  ];
  

  const settings = {
    dots: true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  console.log(fileNames);
  return (
    <div id="client" className="m-5 p-5">
      <h2 className="title is-is-family-sans-serif">Ils m'ont fait confiances :</h2>
    <Slider {...settings}>
      {fileNames.map((fileName, index) => (
        <div key={index} className=" has-text-centered">
          <img src={`./data/${fileName}`} alt={`logo ${index + 1}`} className="image is-responsive"/>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default Carousel;
