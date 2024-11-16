
import React, { useState } from "react";
import Slider1 from "../../assets/images/slider1.png";
import Slider2 from "../../assets/images/slider2.png";
import Slider3 from "../../assets/images/slider3.png";
import Slider4 from "../../assets/images/slider4.png";
import Slider5 from "../../assets/images/slider5.png";

export default function Silder() {
  // Declare a state variable to track the active class
  const [isActive, setIsActive] = useState("one");

  // Function to toggle the class
  const handleClick = (e, id) => {
    setIsActive(id); // Toggle the state on click
  };
  return (


            <div className="max-w-[737px] h-[700px] relative">
       
              <div className="home-slider">
                <div className="absolute top-[5%] right-[10%] ">
                  <div className={isActive == "one" ? "active" : "hidden"}>
                    <img
                      className="fade-in-text"
                      src={Slider1}
                      width={267}
                      height={470}
                      alt="slider1"
                    />
                  </div>
                  <div className={isActive == "two" ? "active" : "hidden"}>
                    <img
                      className="fade-in-text"
                      src={Slider2}
                      width={278}
                      height={530}
                      alt="slider2"
                    />
                  </div>
                  <div className={isActive == "three" ? "active" : "hidden"}>
                    <img
                      className="fade-in-text"
                      src={Slider3}
                      width={330}
                      height={470}
                      alt="slider3"
                    />
                  </div>
                  <div className={isActive == "four" ? "active" : "hidden"}>
                    <img
                      className="fade-in-text"
                      src={Slider4}
                      width={236}
                      height={470}
                      alt="slider4"
                    />
                  </div>
                  <div className={isActive == "five" ? "active" : "hidden"}>
                    <img
                      className="fade-in-text"
                      src={Slider5}
                      width={316}
                      height={470}
                      alt="slider5"
                    />
                  </div>
                </div>
              </div>
          
              <div className="absolute top-[0] left-[6%]">
                <div
                  onClick={(e) => {
                    handleClick(e, "one");
                  }}
                  className={
                    isActive == "one"
                      ? "active shadow-[0px_0px_19.25px_0px_rgba(200,30,30,0.20)] w-[170px] h-[170px] rounded-full bg-[#DA291C] flex flex-col justify-center items-center text-center cursor-pointer"
                      : "shadow-[0px_0px_19.25px_0px_rgba(200,30,30,0.20)] w-[150px] h-[150px] rounded-full bg-[#26221F] flex flex-col justify-center items-center text-center cursor-pointer"
                  }
                >
                  <div className="text-white text-[25px] 3xl:text-[1.302vw] font-medium leading-none">
                    $12.2 MN
                  </div>
                  <div className="text-white text-[16px] 3xl:text-[0.833vw] leading-none">
                    Functional <br /> Range
                  </div>
                </div>
              </div>
           
              <div className="absolute top-[33%] left-[2%]">
                <div
                  onClick={(e) => {
                    handleClick(e, "two");
                  }}
                  className={
                    isActive == "two"
                      ? "active shadow-[0px_0px_19.25px_0px_rgba(200,30,30,0.20)] w-[170px] h-[170px] rounded-full bg-[#DA291C] flex flex-col justify-center items-center text-center cursor-pointer"
                      : "shadow-[0px_0px_19.25px_0px_rgba(200,30,30,0.20)] w-[150px] h-[150px] rounded-full bg-[#26221F] flex flex-col justify-center items-center text-center cursor-pointer"
                  }
                >
                  <div className="text-white text-[25px] 3xl:text-[1.302vw] font-medium leading-none">
                    $12.8 MN
                  </div>
                  <div className="text-white/[0.4] text-[16px] 3xl:text-[0.833vw]">
                    Bulk Range
                  </div>
                </div>
              </div>
          
              <div className="absolute bottom-[18%] left-[15%]">
                <div
                  onClick={(e) => {
                    handleClick(e, "three");
                  }}
                  className={
                    isActive == "three"
                      ? "active shadow-[0px_0px_19.25px_0px_rgba(200,30,30,0.20)] w-[170px] h-[170px] rounded-full bg-[#DA291C] flex flex-col justify-center items-center text-center cursor-pointer"
                      : "shadow-[0px_0px_19.25px_0px_rgba(200,30,30,0.20)] w-[150px] h-[150px] rounded-full bg-[#26221F] flex flex-col justify-center items-center text-center cursor-pointer"
                  }
                >
                  <div className="text-white text-[25px] 3xl:text-[1.302vw] font-medium leading-none">
                    $12.4 MN
                  </div>
                  <div className="text-white/[0.4] text-[16px] 3xl:text-[0.833vw]">
                    Glass Range
                  </div>
                </div>
              </div>
          
              <div className="absolute -bottom-[3%] right-[38%]">
                <div
                  onClick={(e) => {
                    handleClick(e, "four");
                  }}
                  className={
                    isActive == "four"
                      ? "active shadow-[0px_0px_19.25px_0px_rgba(200,30,30,0.20)] w-[170px] h-[170px] rounded-full bg-[#DA291C] flex flex-col justify-center items-center text-center cursor-pointer"
                      : "shadow-[0px_0px_19.25px_0px_rgba(200,30,30,0.20)] w-[150px] h-[150px] rounded-full bg-[#26221F] flex flex-col justify-center items-center text-center cursor-pointer"
                  }
                >
                  <div className="text-white text-[25px] 3xl:text-[1.302vw] font-medium leading-none">
                    $12.5 MN
                  </div>
                  <div className="text-white/[0.4] text-[16px] 3xl:text-[0.833vw]">
                    Regular <br /> Range
                  </div>
                </div>
              </div>
           
              <div className="absolute -bottom-[5%] right-[0]">
                <div
                  onClick={(e) => {
                    handleClick(e, "five");
                  }}
                  className={
                    isActive == "five"
                      ? "active shadow-[0px_0px_19.25px_0px_rgba(200,30,30,0.20)] w-[170px] h-[170px] rounded-full bg-[#DA291C] flex flex-col justify-center items-center text-center cursor-pointer"
                      : "shadow-[0px_0px_19.25px_0px_rgba(200,30,30,0.20)] w-[150px] h-[150px] rounded-full bg-[#26221F] flex flex-col justify-center items-center text-center cursor-pointer"
                  }
                >
                  <div className="text-white text-[25px] 3xl:text-[1.302vw] font-medium leading-none">
                    $11.1 MN
                  </div>
                  <div className="text-white/[0.4] text-[16px] 3xl:text-[0.833vw]">
                    Others
                  </div>
                </div>
              </div>
            </div>
       
  );
}
