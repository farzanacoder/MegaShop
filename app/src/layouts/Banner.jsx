"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import banner1 from "../assets/Banner.jpg";
import banner2 from "../assets/Banner_1.jpg";
import banner3 from "../assets/Banner_2.jpg";
import banner4 from "../assets/Banner_3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, centerPadding: "50px" } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "30px" } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerPadding: "20px" } },
    ],
  };

  const banners = [banner1, banner2, banner3, banner4];

  return (
<div className=" bg-purple-100 py-7 overflow-x-hidden">
      <Slider {...settings}>
        {banners.map((item , index) => (
          <div key={index} className="px-4">
            <Image src={item} className="rounded-lg" alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
