import React from "react";
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import Logo from "../../assets/images/mai_dubai_logo.png";
import LogoMicrosoft from "../../assets/images/logos_microsoft-icon.png";
import HelpIcon from "../../assets/images/help_icon.svg";

import VideoBG from "../../assets/video/landing_video.mp4";
export default function Login() {
  return (
    <>
      <div className="relative bannervideo ">
        <video autoPlay loop muted>
          <source src={VideoBG} type="video/webm" />
        </video>
        <div className="absolute left-0 top-[0px] right-0 bottom-0 z-[2]">
          <div className="px-[100px] xl:px-[5.208vw] pt-[50] xl:pt-[2.604vw]">
            <div className="flex justify-between">
              <div>
                <img
                  src={Logo}
                  alt="Profile"
                  width={189}
                  height={54}
                  className="xl:w-[9.844vw] xl:h-[2.813vw]"
                />
              </div>
              <div>
                <Link
                  to={""}
                  className="bg-[#1F2A37] rounded-[8px] py-[8px] xl:py-[0.417vw] xl:px-[0.833vw] px-[16px] flex items-center text-white font-medium  xl:text-[0.938vw]"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-center items-end h-screen">
              <div className="loginbox 3xl:p-[3.125vw] p-[40px] xl:p-[3.125vw] lg:p-[35px]">
                <h1 className="text-[#E5E7EB] xl:text-[2.083vw] text-[35px] font-normal leading-[120%]">
                  Mai Dubai
                  <span className="text-[#FD766C] font-bold"> Sales</span>{" "}
                  <br />
                  <span className="text-[#FD766C] font-bold">
                    Performance{" "}
                  </span>{" "}
                  Analytics
                </h1>
                <div className="xl:pt-[0.833vw] pt-[16px] text-[#D1D5DB] xl:text-[0.938vw] text-[18px]">
                  {" "}
                  Provide your credentials to proceed
                </div>

                <div className="xl:my-[2.083vw] my-[40px]">
                <Link  to={"/pages/landing"}
                className="bg-[#1F2A37] text-[#E5E7EB] rounded-md flex items-center justify-center gap-2 px-2 xl:px-[0.547vw] py-[18px] xl:py-[1vw] cursor-pointer h-[64px] xl:h-[3vw]">
                    <div>
                      <img
                        src={LogoMicrosoft}
                        alt="Profile"
                        width={22}
                        height={22}
                        className="xl:w-[1.146vw] xl:h-[1.146vw]"
                      />
                    </div>
                    <div className="text-[#E5E7EB] font-[500] xl:text-[1.042vw] text-[20px]">
                      Login with Microsoft ID{" "}
                    </div>
                  </Link>


                </div>
                <div className="text-[#D1D5DB] xl:text-[0.833vw] text-[18px] font-[400]">
               
                Can’t access your account
                </div>
                <div className="xl:pt-[0.781vw] pt-[15px] text-[#D1D5DB] xl:text-[0.833vw] text-[18px] font-[400] flex gap-2">
                    Sign in with a security key 
                    <Link   to={"/pages/landing"}>
                    <img
                        src={HelpIcon}
                        alt="help"
                        width={20}
                        height={20}
                   
                      />
                      </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
