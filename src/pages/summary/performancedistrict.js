import React, { useState } from "react";
import * as echarts from "echarts";
import MapView from './mapview'
import { Checkbox } from "primereact/checkbox";
import ChartWrapper from "../../components/chartwrapper";
import SingleGradientChart from "../../components/charts/singlegradientchart";

export default function PerformanceByDistrict() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="bg-white border border-[#9CA3AF] rounded-2xl 3xl:rounded-[0.833vw] h-full">
                  <ChartWrapper
                    title={"Performance By District"}
                    classname={'2xl:px-[0.833vw] px-[16px] 2xl:py-[0.833vw] py-[16px]'}
                    ExportIcon={true}
                    graphIcon={true}
                    FilterIcon={true}                    
                    WrapperTabs={true}
                    data={
                      <>
                      <div className="2xl:h-[31.25vw] h-[540px] overflow-hidden rounded-br-2xl 3xl:rounded-br-[0.833vw] rounded-bl-2xl 3xl:rounded-bl-[0.833vw] relative">
                        <div className="bg-[rgba(255,255,255,0.80)] rounded-lg 2xl:rounded-[0.417vw] backdrop-blur-[2px] absolute 2xl:top-[0.521vw] top-2.5 2xl:left-[0.625vw] left-3 z-[999] 2xl:w-[16.667vw] w-[300px] 2xl:p-[0.938vw] p-4">
                          <div className="flex items-center justify-between border-b border-[#E5E7EB] border-dashed 2xl:pb-[0.833vw] pb-4">
                            <div className="text-[#31363F] 2xl:text-[0.729vw] text-xs font-normal leading-[18px] 2xl:leading-[0.938vw]" style={{ fontFamily: 'Inter, sans-serif' }}><p>Top Customers</p></div>
                            <div className="text-[#E5E7EB] 2xl:text-[0.625vw] text-xs"><i className="maid-eye"></i></div>
                          </div>
                          <div className="2xl:mt-[0.833vw] mt-4 flex items-start gap-2 2xl:gap-[0.417vw]">
                          <Checkbox onChange={e => setChecked(e.checked)} checked={checked} className="custm_Checkbox"></Checkbox>
                            <div>
                              <div className="text-[#4B586E] text-xs font-normal leading-[14px] 2xl:text-[0.729vw] 2xl:leading-[0.729vw]">Customers</div>
                              <div className="text-[#9CA1AB] text-xs font-normal leading-[18px] 2xl:text-[#9CA1AB] 2xl:leading-[0.938vw]">Show all the CUSTOMERS in the map</div>
                            </div>
                          </div>
                          <div className="2xl:space-y-[0.313vw] space-y-1.5 2xl:mt-[0.573vw] mt-2.5">
                            {/*col 1*/}
                            <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              {/*col*/}
                              <div className="2xl:w-[0.938vw] 2xl:h-[0.938vw] w-4 h-4 rounded-full flex items-center justify-center text-white bg-[#7D8993] text-[10px] 2xl:text-[0.521vw]">1</div>
                              {/*col*/}
                              <div className="text-[#4B586E] text-[10px] 2xl:text-[0.521vw] font-normal leading-[18xp] 2xl:leading-[0.938vw]">Arabian Tech Solutions</div>
                              {/*col*/}
                              </div>
                              <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              <div className="text-[#4B586E] 2xl:text-[0.625vw] text-xs font-semibold leading-[12px] 2xl:leading-[0.625vw]">US$ 4.5</div>
                              {/*col*/}
                              <div className="bg-[#02A666] rounded-sm 2xl:py-[0.365vw] py-0.5 2xl:px-[0.208vw] px-1 text-white 2xl:text-[0.521vw] text-[10px] font-semibold">+0,96</div>
                              {/*col*/}
                              </div>
                            </div>
                            {/*col 2*/}
                            <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              {/*col*/}
                              <div className="2xl:w-[0.938vw] 2xl:h-[0.938vw] w-4 h-4 rounded-full flex items-center justify-center text-white bg-[#7D8993] text-[10px] 2xl:text-[0.521vw]">2</div>
                              {/*col*/}
                              <div className="text-[#4B586E] text-[10px] 2xl:text-[0.521vw] font-normal leading-[18xp] 2xl:leading-[0.938vw]">Desert Innovations</div>
                              {/*col*/}
                              </div>
                              <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              <div className="text-[#4B586E] 2xl:text-[0.625vw] text-xs font-semibold leading-[12px] 2xl:leading-[0.625vw]">US$ 4.5</div>
                              {/*col*/}
                              <div className="bg-[#02A666] rounded-sm 2xl:py-[0.365vw] py-0.5 2xl:px-[0.208vw] px-1 text-white 2xl:text-[0.521vw] text-[10px] font-semibold">+0,96</div>
                              {/*col*/}
                              </div>
                            </div>
                            {/*col 3*/}
                            <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              {/*col*/}
                              <div className="2xl:w-[0.938vw] 2xl:h-[0.938vw] w-4 h-4 rounded-full flex items-center justify-center text-white bg-[#7D8993] text-[10px] 2xl:text-[0.521vw]">3</div>
                              {/*col*/}
                              <div className="text-[#4B586E] text-[10px] 2xl:text-[0.521vw] font-normal leading-[18xp] 2xl:leading-[0.938vw]">Golden Sands Enterprises</div>
                              {/*col*/}
                              </div>
                              <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              <div className="text-[#4B586E] 2xl:text-[0.625vw] text-xs font-semibold leading-[12px] 2xl:leading-[0.625vw]">US$ 4.5</div>
                              {/*col*/}
                              <div className="bg-[#02A666] rounded-sm 2xl:py-[0.365vw] py-0.5 2xl:px-[0.208vw] px-1 text-white 2xl:text-[0.521vw] text-[10px] font-semibold">+0,96</div>
                              {/*col*/}
                              </div>
                            </div>
                            {/*col 4*/}
                            <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              {/*col*/}
                              <div className="2xl:w-[0.938vw] 2xl:h-[0.938vw] w-4 h-4 rounded-full flex items-center justify-center text-white bg-[#7D8993] text-[10px] 2xl:text-[0.521vw]">4</div>
                              {/*col*/}
                              <div className="text-[#4B586E] text-[10px] 2xl:text-[0.521vw] font-normal leading-[18xp] 2xl:leading-[0.938vw]">Oasis Solutions</div>
                              {/*col*/}
                              </div>
                              <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              <div className="text-[#4B586E] 2xl:text-[0.625vw] text-xs font-semibold leading-[12px] 2xl:leading-[0.625vw]">US$ 4.5</div>
                              {/*col*/}
                              <div className="bg-[#02A666] rounded-sm 2xl:py-[0.365vw] py-0.5 2xl:px-[0.208vw] px-1 text-white 2xl:text-[0.521vw] text-[10px] font-semibold">+0,96</div>
                              {/*col*/}
                              </div>
                            </div>
                            {/*col 6*/}
                            <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              {/*col*/}
                              <div className="2xl:w-[0.938vw] 2xl:h-[0.938vw] w-4 h-4 rounded-full flex items-center justify-center text-white bg-[#7D8993] text-[10px] 2xl:text-[0.521vw]">6</div>
                              {/*col*/}
                              <div className="text-[#4B586E] text-[10px] 2xl:text-[0.521vw] font-normal leading-[18xp] 2xl:leading-[0.938vw]">Oasis Solutions</div>
                              {/*col*/}
                              </div>
                              <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              <div className="text-[#4B586E] 2xl:text-[0.625vw] text-xs font-semibold leading-[12px] 2xl:leading-[0.625vw]">US$ 4.5</div>
                              {/*col*/}
                              <div className="bg-[#02A666] rounded-sm 2xl:py-[0.365vw] py-0.5 2xl:px-[0.208vw] px-1 text-white 2xl:text-[0.521vw] text-[10px] font-semibold">+0,96</div>
                              {/*col*/}
                              </div>
                            </div>
                            {/*col 7*/}
                            <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              {/*col*/}
                              <div className="2xl:w-[0.938vw] 2xl:h-[0.938vw] w-4 h-4 rounded-full flex items-center justify-center text-white bg-[#7D8993] text-[10px] 2xl:text-[0.521vw]">7</div>
                              {/*col*/}
                              <div className="text-[#4B586E] text-[10px] 2xl:text-[0.521vw] font-normal leading-[18xp] 2xl:leading-[0.938vw]">Oasis Solutions</div>
                              {/*col*/}
                              </div>
                              <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              <div className="text-[#4B586E] 2xl:text-[0.625vw] text-xs font-semibold leading-[12px] 2xl:leading-[0.625vw]">US$ 4.5</div>
                              {/*col*/}
                              <div className="bg-[#02A666] rounded-sm 2xl:py-[0.365vw] py-0.5 2xl:px-[0.208vw] px-1 text-white 2xl:text-[0.521vw] text-[10px] font-semibold">+0,96</div>
                              {/*col*/}
                              </div>
                            </div>
                            {/*col 8*/}
                            <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              {/*col*/}
                              <div className="2xl:w-[0.938vw] 2xl:h-[0.938vw] w-4 h-4 rounded-full flex items-center justify-center text-white bg-[#7D8993] text-[10px] 2xl:text-[0.521vw]">8</div>
                              {/*col*/}
                              <div className="text-[#4B586E] text-[10px] 2xl:text-[0.521vw] font-normal leading-[18xp] 2xl:leading-[0.938vw]">Oasis Solutions</div>
                              {/*col*/}
                              </div>
                              <div className="flex items-center justify-between 2xl:gap-[0.417vw] gap-2">
                              <div className="text-[#4B586E] 2xl:text-[0.625vw] text-xs font-semibold leading-[12px] 2xl:leading-[0.625vw]">US$ 4.5</div>
                              {/*col*/}
                              <div className="bg-[#02A666] rounded-sm 2xl:py-[0.365vw] py-0.5 2xl:px-[0.208vw] px-1 text-white 2xl:text-[0.521vw] text-[10px] font-semibold">+0,96</div>
                              {/*col*/}
                              </div>
                            </div>
                            {/*col 9*/}
                          </div>
                          <div className="2xl:mt-[0.833vw] mt-4 flex items-start gap-2 2xl:gap-[0.417vw]">
                          <Checkbox onChange={e => setChecked(e.checked)} checked={checked} className="custm_Checkbox"></Checkbox>
                            <div>
                              <div className="text-[#4B586E] text-xs font-normal leading-[14px] 2xl:text-[0.729vw] 2xl:leading-[0.729vw]">Revenue Wise %</div>
                              <div className="text-[#9CA1AB] text-xs font-normal leading-[18px] 2xl:text-[#9CA1AB] 2xl:leading-[0.938vw]">Show all the customers in the map</div>
                            </div>
                          </div>

                          <div className="2xl:mt-[0.99vw] mt-2">
                          <div className="w-full h-[8px]">
                          <SingleGradientChart 
                                        legend={{
                                            show: false,
                                        }}
                                        grid={{
                                            left: "0%",
                                            right: "0%",
                                            bottom: "0%",
                                            top: "0%",
                                        }}
                                        xaxisLabel={ {
                                            show: false,
                                        }}
                                        xsplitLine={{
                                            show: false,
                                        }}
                                        yaxisLine={{ show: false }}
                                        yaxisLabel={ {
                                            show: false,
                                            color: "#4B586E",
                                            fontSize: 10,
                                            overflow: "truncate",
                                            formatter: "{value}",
                                        }}
                                        yaxisTick={ { show: false }}
                                        yinverse={true}
                                        ysplitLine={{ show: false }}
                                        data={[100]}
                                        barwidth={"10"}
                                        itemStyle={{ borderRadius: [20] }}
                                        color={new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                            {
                                                offset: 0,
                                                color: "#3A1715",
                                            },
                                            {
                                                offset: 0.7,
                                                color: "#99403A",
                                            },
                                            {
                                                offset: 0.6,
                                                color: "#99403A",
                                            },
                                            {
                                                offset: 1,
                                                color: "#EBB9B6",
                                            },
                                        ])}
                                        label={ {
                                            show: false,
                                        }}
                                        />
                          </div>
                          <div className="flex items-center justify-between text-[#5A6374] 2xl:text-[0.521vw] font-light leading-[18px] 2xl:leading-[0.938vw]">
                            <div><p>Lower</p></div>
                            <div><p>Greater</p></div>
                          </div>
                          </div>
                        </div>
                        <MapView />
                      </div>
                      </>
                    }
                  />
                </div>
  )
}
