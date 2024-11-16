import React from "react";
import LandingHeader from "../../components/common/layout/landingheader/header";
import Content from "./content";
import SalesTimline from "./salestimeline";
import Silder from "./silder";

export default function Landing() {
  
  return (
    <>
      <div className="landing_bg  font_Work_Sans relative">
        <div className=" pl-[30px] lg:pl-[60px] xl:pl-[3.125vw] pr-[16px] lg:pr-[16px] xl:pr-[0.833vw] pt-[40px] lg:pt-[45px] xl:pt-[2.344vw] relative">
          <div className="grid grid-cols-12 ">
            <div className="col-span-7">
           <LandingHeader />
            <Content />
            </div>
            <div className="col-span-5">
            <Silder/>
            </div>
          </div>

          <SalesTimline/>
         
        </div>
      </div>
    </>
  );
}
