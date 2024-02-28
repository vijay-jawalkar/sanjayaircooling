import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import HomeAppliance from "../../../images/hero/HomeAppliance.jpg"
import WashingMachine from "../../../images/hero/WashingMachine.jpg"
import Freeze from "../../../images/hero/Freeze.jpg"

function Hero() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "20px", zIndex: "1"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "20px", zIndex: "1"}}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div className="h-40 md:h-[480px] w-full relative">
          <img src = {HomeAppliance} alt = "Air Conditioner One" className="h-full w-full object-fit" />
         
        </div>

        <div className=" h-40 md:h-[480px] w-full">
        <img src = {Freeze} alt = "Air Conditioner One" className="h-full w-full object-fit" />
        </div>

        <div className=" h-40 md:h-[480px] w-full">
        <img src = {WashingMachine} alt = "Air Conditioner One" className="h-full w-full object-fit" />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
