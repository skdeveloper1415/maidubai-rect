import React from "react";
import Logo from "../../assets/images/mai_dubai-logo.png";
import  chart from "../../assets/images/chart.png";
import DiagramIcon from "../../assets/images/diagram_icon.svg";
import DistrictsPiechart from "../charts/DistrictsPiechart";
import DistributionChannelChart from "../charts/distributionchannel";

export default function Content() {
  return (
    <>
      <div className="xl:pt-[3.125vw] pt-[60px] space-y-[12px]">
        <h3 className="text-[#fff] xl:text-[1.563vw] text-[30px]">
          Welcome to
        </h3>
        <div>
          <img
            src={Logo}
            alt="Profile"
            width={370}
            height={90}
            className="xl:w-[19.271vw xl:h-[4.688vw]"
          />
        </div>
        <div className="flex gap-2 items-center">
          <h3 className="text-[#fff] xl:text-[1.875vw] text-[36px] flex gap-1">
            Executive Dashboard
          </h3>
          <img
            src={DiagramIcon}
            alt="Profile"
            width={28}
            height={28}
            className="xl:w-[1.458vw] xl:h-[1.458vw]"
          />
        </div>
      </div>
      <div className="xl:mt-[3.125vw] mt-[60px]">
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-[1.823vw]">
          <div className="boxstyle xl:p-[0.729vw] p-[14px]">
            <h3 className="text-[#fff] xl:text-[1.042vw] text-[20px] font-[400]  border-b border-[#9CA3AF] pb-2">
              Breakdown by Distribution Channel
            </h3>
            <div className="grid grid-cols-2 xl:mt-[0.781vw] mt-[15px]">
              <div className="space-y-[15px]">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="bg-[#012D27] rounded-xs h-[14px] w-[14px]"></div>
                    <p className="text-[#fff] xl:text-[0.625vw] text-[12px] font-[400]">
                      Retail
                    </p>
                  </div>
                  <div className="space-y-[10px]">
                    <div className="flex gap-2 items-center">
                      <p className="text-[#fff] xl:text-[0.625vw] text-[12px] font-[600]">
                        14.3 %
                      </p>
                      <div className="text-[#02A666] xl:text-[0.625vw] text-[10px] font-[400]">
                        <i className="maid-triangle-up text-[#02A666] px-1 text-[9px]"></i>
                        2%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="bg-[#045044] rounded-xs h-[14px] w-[14px]"></div>
                    <p className="text-[#fff] xl:text-[0.625vw] text-[11px] font-[400]">
                      Home & Office
                    </p>
                  </div>
                  <div className="space-y-[10px]">
                    <div className="flex gap-2 items-center">
                      <p className="text-[#fff] xl:text-[0.625vw] text-[12px] font-[600]">
                        14.3 %
                      </p>
                      <div className="text-[#02A666] xl:text-[0.625vw] text-[10px] font-[400]">
                        <i className="maid-triangle-up text-[#02A666] px-1 text-[9px]"></i>
                        2%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="bg-[#036251] rounded-xs h-[14px] w-[14px]"></div>
                    <p className="text-[#fff] xl:text-[0.625vw] text-[11px] font-[400]">
                      E-Commerce
                    </p>
                  </div>
                  <div className="space-y-[10px]">
                    <div className="flex gap-2 items-center">
                      <p className="text-[#fff] xl:text-[0.625vw] text-[12px] font-[600]">
                        14.3 %
                      </p>
                      <div className="text-[#02A666] xl:text-[0.625vw] text-[10px] font-[400]">
                        <i className="maid-triangle-up text-[#02A666] px-1 text-[9px]"></i>
                        2%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="bg-[#007C65] rounded-xs h-[14px] w-[14px]"></div>
                    <p className="text-[#fff] xl:text-[0.625vw] text-[11px] font-[400]">
                      {" "}
                      Food Service
                    </p>
                  </div>
                  <div className="space-y-[10px]">
                    <div className="flex gap-2 items-center">
                      <p className="text-[#fff] xl:text-[0.625vw] text-[12px] font-[600]">
                        14.3 %
                      </p>
                      <div className="text-[#02A666] xl:text-[0.625vw] text-[10px] font-[400]">
                        <i className="maid-triangle-up text-[#02A666] px-1 text-[9px]"></i>
                        2%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="bg-[#0ABF95] rounded-xs h-[14px] w-[14px]"></div>
                    <p className="text-[#fff] xl:text-[0.625vw] text-[11px] font-[400]">
                      Export
                    </p>
                  </div>
                  <div className="space-y-[10px]">
                    <div className="flex gap-2 items-center">
                      <p className="text-[#fff] xl:text-[0.625vw] text-[12px] font-[600]">
                        14.3 %
                      </p>
                      <div className="text-[#02A666] xl:text-[0.625vw] text-[10px] font-[400]">
                        <i className="maid-triangle-up text-[#02A666] px-1 text-[9px]"></i>
                        2%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="bg-[#A4F6D8] rounded-xs h-[14px] w-[14px]"></div>
                    <p className="text-[#fff] xl:text-[0.625vw] text-[11px] font-[400]">
                      Scrap
                    </p>
                  </div>
                  <div className="space-y-[10px]">
                    <div className="flex gap-2 items-center">
                      <p className="text-[#fff] xl:text-[0.625vw] text-[12px] font-[600]">
                        14.3 %
                      </p>
                      <div className="text-[#02A666] xl:text-[0.625vw] text-[10px] font-[400]">
                        <i className="maid-triangle-up text-[#02A666] px-1 text-[9px]"></i>
                        2%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="bg-[#D0FBE9] rounded-xs h-[14px] w-[14px]"></div>
                    <p className="text-[#fff] xl:text-[0.625vw] text-[11px] font-[400]">
                      Stock Transfer
                    </p>
                  </div>
                  <div className="space-y-[10px]">
                    <div className="flex gap-2 items-center">
                      <p className="text-[#fff] xl:text-[0.625vw] text-[12px] font-[600]">
                        14.3 %
                      </p>
                      <div className="text-[#02A666] xl:text-[0.625vw] text-[10px] font-[400]">
                        <i className="maid-triangle-up text-[#02A666] px-1 text-[9px]"></i>
                        2%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[180px]">

             <DistributionChannelChart/>
              {/* <img
                  src={chart}
                  alt="Profile"
                  width={180}
                  height={180}
          
          /> */}
                {/* <DistrictsPiechart
                  name={"Access From"}
                  radius={["40%", "70%"]}
                  center={["50%", "50%"]}
                  labelLine={{ show: false }}
                  data={[
                    { value: 80, itemStyle: { color: "#012D27" } },
                    { value: 25, itemStyle: { color: "#D0FBE9" } },
                    { value: 15, itemStyle: { color: "#A4F6D8" } },
                    { value: 35, itemStyle: { color: "#6AEBC5" } },
                    { value: 35, itemStyle: { color: "#0ABF95" } },
                    { value: 35, itemStyle: { color: "#007C65" } },
                    { value: 35, itemStyle: { color: "#036251" } },
                    { value: 30, itemStyle: { color: "#045044" } },
                  ]}  />*/}
               
              </div>
            </div>
          </div>
          <div className="boxstyle xl:p-[0.729vw] p-[14px]">
            <h3 className="text-[#fff] xl:text-[1.042vw] text-[20px] font-[400] border-b border-[#9CA3AF] pb-2">
            Breakdown by Districts
            </h3>

            <div className="grid grid-cols-2 xl:mt-[0.781vw] mt-[15px]">
              <div className="space-y-[15px]">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="bg-[#012D27] rounded-xs h-[14px] w-[14px]"></div>
                    <p className="text-[#fff] xl:text-[0.625vw] text-[11px] font-[400]">
                    Ajman
                    </p>
                  </div>
                  <div className="space-y-[10px]">
                    <div className="flex gap-2 items-center">
                      <p className="text-[#fff] xl:text-[0.625vw] text-[12px] font-[600]">
                        12.5 %
                      </p>
                      <div className="text-[#02A666] xl:text-[0.625vw] text-[10px] font-[400]">
                        <i className="maid-triangle-up text-[#02A666] px-1 text-[9px]"></i>
                        2%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="bg-[#045044] rounded-xs h-[14px] w-[14px]"></div>
                    <p className="text-[#fff] xl:text-[0.625vw] text-[11px] font-[400]">
                    Al Ain
                    </p>
                  </div>
                  <div className="space-y-[10px]">
                    <div className="flex gap-2 items-center">
                      <p className="text-[#fff] xl:text-[0.625vw] text-[12px] font-[600]">
                        14.3 %
                      </p>
                      <div className="text-[#02A666] xl:text-[0.625vw] text-[10px] font-[400]">
                        <i className="maid-triangle-up text-[#02A666] px-1 text-[9px]"></i>
                        2%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="bg-[#036251] rounded-xs h-[14px] w-[14px]"></div>
                    <p className="text-[#fff] xl:text-[0.625vw] text-[11px] font-[400]">
                    Abu Dhabi
                    </p>
                  </div>
                  <div className="space-y-[10px]">
                    <div className="flex gap-2 items-center">
                      <p className="text-[#fff] xl:text-[0.625vw] text-[12px] font-[600]">
                        14.3 %
                      </p>
                      <div className="text-[#02A666] xl:text-[0.625vw] text-[10px] font-[400]">
                        <i className="maid-triangle-up text-[#02A666] px-1 text-[9px]"></i>
                        2%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="bg-[#007C65] rounded-xs h-[14px] w-[14px]"></div>
                    <p className="text-[#fff] xl:text-[0.625vw] text-[11px] font-[400]">
                      {" "}
                      Dubai
                    </p>
                  </div>
                  <div className="space-y-[10px]">
                    <div className="flex gap-2 items-center">
                      <p className="text-[#fff] xl:text-[0.625vw] text-[12px] font-[600]">
                        14.3 %
                      </p>
                      <div className="text-[#02A666] xl:text-[0.625vw] text-[10px] font-[400]">
                        <i className="maid-triangle-up text-[#02A666] px-1 text-[9px]"></i>
                        2%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="bg-[#0ABF95] rounded-xs h-[14px] w-[14px]"></div>
                    <p className="text-[#fff] xl:text-[0.625vw] text-[11px] font-[400]">
                    Fujairah
                    </p>
                  </div>
                  <div className="space-y-[10px]">
                    <div className="flex gap-2 items-center">
                      <p className="text-[#fff] xl:text-[0.625vw] text-[12px] font-[600]">
                        14.3 %
                      </p>
                      <div className="text-[#02A666] xl:text-[0.625vw] text-[10px] font-[400]">
                        <i className="maid-triangle-up text-[#02A666] px-1 text-[9px]"></i>
                        2%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="bg-[#A4F6D8] rounded-xs h-[14px] w-[14px]"></div>
                    <p className="text-[#fff] xl:text-[0.625vw] text-[11px] font-[400]">
                    Ras Al Khaimah
                    </p>
                  </div>
                  <div className="space-y-[10px]">
                    <div className="flex gap-2 items-center">
                      <p className="text-[#fff] xl:text-[0.625vw] text-[12px] font-[600]">
                        14.3 %
                      </p>
                      <div className="text-[#02A666] xl:text-[0.625vw] text-[10px] font-[400]">
                        <i className="maid-triangle-up text-[#02A666] px-1 text-[9px]"></i>
                        2%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="bg-[#D0FBE9] rounded-xs h-[14px] w-[14px]"></div>
                    <p className="text-[#fff] xl:text-[0.625vw] text-[11px] font-[400]">
                    Sharjah
                    </p>
                  </div>
                  <div className="space-y-[10px]">
                    <div className="flex gap-2 items-center">
                      <p className="text-[#fff] xl:text-[0.625vw] text-[12px] font-[600]">
                        14.3 %
                      </p>
                      <div className="text-[#02A666] xl:text-[0.625vw] text-[10px] font-[400]">
                        <i className="maid-triangle-up text-[#02A666] px-1 text-[9px]"></i>
                        2%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[200px]">
                <DistrictsPiechart
                  name={"Breakdown by Districts"}
                  radius={["40%", "85%"]}
                  center={["55%", "45%"]}
                  labelLine={{ show: false }}
                  data={[
                    { value: 80, itemStyle: { color: "#012D27" } },
                    { value: 25, itemStyle: { color: "#D0FBE9" } },
                    { value: 15, itemStyle: { color: "#A4F6D8" } },
                    { value: 35, itemStyle: { color: "#6AEBC5" } },
                    { value: 35, itemStyle: { color: "#0ABF95" } },
                    { value: 35, itemStyle: { color: "#007C65" } },
                    { value: 35, itemStyle: { color: "#036251" } },
                    { value: 30, itemStyle: { color: "#045044" } },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}
