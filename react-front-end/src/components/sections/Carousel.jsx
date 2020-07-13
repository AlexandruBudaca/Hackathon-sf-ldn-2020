
import React, { Component, useState } from "react";


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./index.css";
import cyf_picture01 from "../../images/cyf_picture01.JPG";
import cyf_picture02 from "../../images/cyf_picture02.jpg";
import cyf_picture03 from "../../images/cyf_picture03.jpg";
import cyf_picture04 from "../../images/cyf_picture04.jpg";
import cyf_picture05 from "../../images/cyf_picture05.jpg";


const LazyCarousel = () => {
  const [carouselInfos, setCarouselInfos] = useState([
    {
      imgSrc: cyf_picture01,
      legend: "CYF Leadership",
    },
    {
      imgSrc: cyf_picture02,
      legend: "CYF at BBC Scotland",
    },
    {
      imgSrc: cyf_picture03,
      legend: "CYF course",
    },
    {
      imgSrc: cyf_picture04,
      legend: "CYF Ticketmaster session",
    },
    {
      imgSrc: cyf_picture05,
      legend: "CYF brain in action",
    },
  ]);

  return (
    <Carousel>
      {carouselInfos.map((carouselBlock) => (
        <div className="imgBox">
          <img src={carouselBlock.imgSrc} alt="image carousel" />
          <p className="legend">{carouselBlock.legend}</p>
        </div>
      ))}
    </Carousel>
  );
};



export default LazyCarousel;
