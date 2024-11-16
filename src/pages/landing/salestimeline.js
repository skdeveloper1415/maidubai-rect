import React from "react";
import SalesTimelineChart from "../charts/saletimelinechart";

export default function SalesTimline() {
  return (
    <>
      <div className="xl:pt-[1.042vw] pt-[20px] space-y-[12px]">
      
      <div className="xl:py-[2.083vw] py-[30px]">
        <div className="grid grid-cols-12 md:grid-cols-12 gap-[10px]">
          <div className="col-span-10">
            <div>
              <h3 className="text-[#fff] xl:text-[0.833vw] text-[16px] font-[600] leading-[110%]">
                Sales Timeline
              </h3>
              <p className="text-[#fff] xl:text-[0.833vw] text-[16px] font-[300]">
                Monthly Sales & Average (Millions Dollars)
              </p>
            </div>
            <div className="h-[300px] mt-[30px]">
              <SalesTimelineChart />
            </div>
          </div>
          <div className="col-span-2">
            <div className="boxstyle1 col-span-3 xl:p-[1.25vw] p-[24px] rounded-lg">
              <div className="flex justify-between items-center pb-[8px] xl:pb-[8px] 3xl:pb-[0.417vw] border-b border-[#9CA3AF]">
                <div className="text-[#fff] xl:text-[22px] 3xl:text-[1.25vw] text-[24px] font-semibold">
                  2024 (YTD)
                </div>
                <div className="">
                <div className="text-[#fff] xl:text-[0.625vw] 2xl:text-[0.625vw] 3xl:text-[0.625vw] text-[12px] font-normal opacity-60 uppercase">
                    Total sales
                  </div>
                  <div className="text-[#fff] xl:text-[20px] 2xl:text-[20px] 3xl:text-[1.042vw] text-[22px] font-normal leading-[100%]">
                    $ 90.5M
                  </div>
                </div>
              </div>

              <div className="pt-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[0.729vw] flex flex-col gap-[20px]">
                <div className="">
                <div className="text-[#fff] xl:text-[0.625vw] 2xl:text-[0.625vw] 3xl:text-[0.625vw] text-[12px] font-normal opacity-60 uppercase">
                    Top Order source
                  </div>
                  <div className="text-[#fff] xl:text-[0.833vw] 2xl:text-[0.833vw] 3xl:text-[0.833vw] text-[16px] font-normal leading-[100%]">
                    E-Commerce Orders
                  </div>
                </div>
                <div className="">
                  <div className="text-[#fff] xl:text-[0.625vw] 2xl:text-[0.625vw] 3xl:text-[0.625vw] text-[12px] font-normal opacity-60 uppercase">
                    Top SALES ORDER TYPE
                  </div>
                  <div className="text-[#fff] xl:text-[0.833vw] 2xl:text-[0.833vw] 3xl:text-[0.833vw] text-[16px] font-normal leading-[100%]">
                    E-Commerce Orders
                  </div>
                </div>
                <div className="">
                   <div className="text-[#fff] xl:text-[0.625vw] 2xl:text-[0.625vw] 3xl:text-[0.625vw] text-[12px] font-normal opacity-60 uppercase">
                    Target achieved
                  </div>
                  <div className="text-[#fff] xl:text-[0.833vw] 2xl:text-[0.833vw] 3xl:text-[0.833vw] text-[16px] font-normal leading-[100%]">
                    85%
                  </div>
                </div>
                <div className="">
                <div className="text-[#fff] xl:text-[0.625vw] 2xl:text-[0.625vw] 3xl:text-[0.625vw] text-[12px] font-normal opacity-60 uppercase">
                    TOP CUSTOMER GROUP
                  </div>
                  <div className="text-[#fff] xl:text-[0.833vw] 2xl:text-[0.833vw] 3xl:text-[0.833vw] text-[16px] font-normal leading-[100%]">
                    Home
                  </div>
                </div>
                <div className="">
                   <div className="text-[#fff] xl:text-[0.625vw] 2xl:text-[0.625vw] 3xl:text-[0.625vw] text-[12px] font-normal opacity-60 uppercase">
                    TOP MATERIAL GROUP
                  </div>
                  <div className="text-[#fff] xl:text-[0.833vw] 2xl:text-[0.833vw] 3xl:text-[0.833vw] text-[16px] font-normal leading-[100%]">
                    1.5 Ltr 1x12 Bottles
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
