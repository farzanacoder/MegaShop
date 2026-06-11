"use client";

import React, { useState } from "react";
import Slider from "react-slick";

import Container from "../components/Container";
import Flex from "../components/Flex";
import ShopBrand from "../components/ShopBrand";
import Image from "../components/Image";

import SHOP3 from "../assets/shop3.png";
import SHOP4 from "../assets/shop4.png";
import Buyimg from "../assets/buy.png";
import Buyimg2 from "../assets/buy1.png";

const BuyNow = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index) => setActiveSlide(index),
  };

  return (
    <section className="w-full pt-14">
      <Container>
        <Flex className="justify-between gap-5 flex-col lg:flex-row">
          {/* Slider */}
          <div className="relative group rounded-md w-full md:w-[74%]">
            <Slider {...settings}>
              {/* Slide 1 */}
              <div className="relative overflow-hidden">
                <Image className="w-full h-full" src={Buyimg} />

                <Flex
                  className={`absolute top-0 right-0 w-[45%] h-full flex-col gap-2 items-start justify-center p-4 transition-transform duration-700 ease-out ${
                    activeSlide === 0
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                >
                  <h3 className="md:text-lg text-sm md:block hidden">
                    Big saving days sale
                  </h3>

                  <h1 className="lg:text-3xl overflow-hidden text-sm md:mb-2 w-full font-mont font-bold md:py-3.5">
                    Buy New Trend Women Black Cotton Blend Top | Top For Women
                  </h1>

                  <div className="flex pb-2 md:pb-2.5 gap-2 md:gap-6">
                    <h3 className="md:text-lg text-[12px] md:block hidden">
                      Starting At Only
                    </h3>

                    <p className="md:text-3xl text-lg text-red font-semibold">
                      ₹1,550.00
                    </p>
                  </div>

                  <button className="font-semibold rounded-md hover:bg-black text-white bg-red py-2 px-2 md:py-2 md:px-4 uppercase text-[12px] md:text-base cursor-pointer duration-300">
                    SHOP NOW
                  </button>
                </Flex>
              </div>

              {/* Slide 2 */}
              <div className="relative overflow-hidden">
                <Image className="w-full h-full" src={Buyimg2} />

                <Flex
                  className={`absolute top-0 right-0 w-[45%] h-full flex-col gap-2 items-start justify-center p-4 transition-transform duration-700 ease-out ${
                    activeSlide === 1
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                >
                  <h3 className="text-lg md:block hidden">Flash Deal</h3>

                  <h1 className="lg:text-3xl overflow-hidden text-sm md:mb-2 w-full font-mont font-bold md:py-3.5">
                    Trendy Women Stylish Cotton Dress – Limited Time!
                  </h1>

                  <div className="flex pb-2 md:pb-2.5 gap-2 md:gap-6">
                    <h3 className="text-lg md:block hidden">
                      Starting At Only
                    </h3>

                    <p className="md:text-3xl text-lg text-red font-semibold">
                      ₹1,250.00
                    </p>
                  </div>

                  <button className="font-semibold rounded-md hover:bg-black text-white bg-red py-2 px-2 md:py-2 md:px-4 uppercase text-[12px] md:text-base cursor-pointer duration-300">
                    SHOP NOW
                  </button>
                </Flex>
              </div>
            </Slider>
          </div>

          {/* Right Side Brands */}
          <div className="md:overflow-visible overflow-x-auto scrlbar">
            <Flex className="md:flex-col py-4 md:py-0 h-full gap-3 md:gap-[70px] min-w-max flex-row">
              <ShopBrand
                position="left"
                ShpBrnd={SHOP3}
                title="Buy women products with low price"
                subtitle="₹999"
                btn="shop now"
              />

              <ShopBrand
                ShpBrnd={SHOP4}
                title="Buy women products with low price"
                subtitle="₹999"
                btn="shop now"
              />
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default BuyNow;