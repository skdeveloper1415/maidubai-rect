import React, { useState } from "react";
import ChartWrapper from "../../components/chartwrapper";
import DoubleBarchartWithPercentages from "../../components/charts/doubleBarchartWithPercentages";

export default function Trendanalysisactualtarget() {
  const [activeTab, setActiveTab] = useState(3);

  return (
    <>
    <div className="bg-white border border-[#9CA3AF] rounded-2xl 3xl:rounded-[0.833vw] h-full">
                  <ChartWrapper
                    title={"Trend Analysis (Actual Vs Target)"}
                    classname={'2xl:px-[0.833vw] px-[16px] 2xl:pt-[0.833vw] pt-[16px]'}
                    ExportIcon={true}
                    FilterIcon={false}
                    data={
                      <>
                      <div className="2xl:px-[0.833vw] px-[16px] 2xl:pt-[0.833vw] pt-[16px]">
                        <div className="flex justify-between 3xl:px-[0.833vw] xl:px-[14px] px-[16px] bg-[#F5F6F7] 2xl:p-[0.417vw] p-2 rounded-lg 2xl:rounded-[0.417vw]">
                          <div className="flex">
                            <button onClick={() => setActiveTab(1)} className={`${activeTab === 1 ? 'text-[#FFFFFF] font-semibold bg-[#1F2A37]' : 'text-[#4B586E] font-normal bg-[#FFFFFF]'} text-[12px] xl:text-[12px] 3xl:text-[0.625vw] px-[12px] xl:px-[10px] 3xl:px-[0.625vw] py-[8px] xl:py-[7px] 3xl:py-[0.417vw] rounded-bl-[6px]`}>Last 5 years</button>
                            <button disabled onClick={() => setActiveTab(2)} className={`${activeTab === 2 ? 'text-[#FFFFFF] font-semibold bg-[#1F2A37]' : 'text-[#4B586E] font-normal bg-[#FFFFFF]'} text-[12px] xl:text-[12px] 3xl:text-[0.625vw] font-normal   px-[12px] xl:px-[10px] 3xl:px-[0.625vw] py-[8px] xl:py-[7px] 3xl:py-[0.417vw]`}>Last 12 Quarters</button>
                            <button onClick={() => setActiveTab(3)} className={`${activeTab === 3 ? 'text-[#FFFFFF] font-semibold bg-[#1F2A37]' : 'text-[#4B586E] font-normal bg-[#FFFFFF]'} text-[12px] xl:text-[12px] 3xl:text-[0.625vw] font-normal   px-[12px] xl:px-[10px] 3xl:px-[0.625vw] py-[8px] xl:py-[7px] 3xl:py-[0.417vw]`}>Last 12 Months</button>
                            <button disabled onClick={() => setActiveTab(4)} className={`${activeTab === 4 ? 'text-[#FFFFFF] font-semibold bg-[#1F2A37]' : 'text-[#4B586E] font-normal bg-[#FFFFFF]'} text-[12px] xl:text-[12px] 3xl:text-[0.625vw] font-normal   px-[12px] xl:px-[10px] 3xl:px-[0.625vw] py-[8px] xl:py-[7px] 3xl:py-[0.417vw] rounded-br-[6px]`}>Last 12 Weeks</button>
                          </div>
                        </div>
                        {activeTab === 1 ?
                          <div className="py-[14px] xl:py-[0.729vw]">

                          <div className="grid grid-cols-12 gap-[35px] 3xl:gap-[1.823vw]">
                            <div className="col-span-12">
                            <div className="flex justify-between items-center bg-[#F5F6F7] 2xl:p-[0.417vw] p-2 rounded-lg 2xl:rounded-[0.417vw]">
                                  <div className="flex items-end gap-[32px] xl:gap-[1.458vw]">
                                    <div className="flex items-end gap-[32px] xl:gap-[1.458vw] border-r border-[#E5E7EB] 2xl:pr-[1.25vw] pr-5">
                                    <div>
                                      <div className="text-[12px] xl:text-[10px] 3xl:text-[0.625vw] text-[#4B586E]">Last 12 Months (Actual)</div>
                                      <div className="flex gap-[8px]">
                                        <div className="text-[#4B586E] text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-semibold">$72.50M</div>
                                      </div>                                      
                                    </div>
                                    <div className="flex gap-[5px] items-center">
                                          <div className="text-[12px] xl:text-[11px] 3xl:text-[0.625vw] text-[#9CA1AB] font-medium">Var %</div>
                                          <div className="text-[12px] xl:text-[11px] 3xl:text-[0.625vw] text-[#046C4E] bg-[#DEF7EC] 2xl:p-[0.208vw] p-1">+ 1.89%
                                          </div>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-[32px] xl:gap-[1.458vw] border-r border-[#E5E7EB] 2xl:pr-[1.25vw] pr-5">
                                    <div>
                                      <div className="text-[12px] xl:text-[10px] 3xl:text-[0.625vw] text-[#4B586E]">Last 12 Months (Target)</div>
                                      <div className="flex gap-[8px]">
                                        <div className="text-[#4B586E] text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-semibold">$65.50M</div>
                                      </div>                                      
                                    </div>
                                    </div>
                                  </div>
                                  <div className="flex gap-[4px] items-center">
                                    <div className="text-[12px] xl:text-[10px] 3xl:text-[0.625vw] text-[#9CA1AB]">Target Vs Actual Variance :</div>
                                    <div className="font-medium text-[12px] xl:text-[10px] 3xl:text-[0.625vw] text-[#374151]">$20 M</div>
                                  </div>
                                </div>
                              <div className="h-[300px] 2xl:h-[19.792vw] pt-[16px] xl:pt-[0.521vw] bg-[#F5F6F7] 2xl:rounded-[0.625vw] rounded-xl 2xl:mt-[0.417vw] mt-2">
                              <DoubleBarchartWithPercentages
                                    legend={{
                                      show: true,
                                      data:  [
                                        {
                                          name: 'Actual',
                                          itemStyle: {
                                            color:"#263040"
                                          }
                                        },
                                        {
                                          name: 'Target',
                                          itemStyle: {
                                            color: '#ACBFDC'
                                          }
                                        }
                                      ],
                                      left: '15',
                                      bottom: '0',
                                      itemWidth:8,
                                      itemHeight:8,
                                    }}

                                    grid={{
                                    top: '0%',
                                    left: '3%',
                                    right: '0%',
                                    bottom: '12%',
                                    containLabel: true
                                    }
                                    }
                                    dataset={{
                                      source: [
                                        ['May‘23', 4.6, 6],
                                        ['Jun‘23', 4.3, 6.8],
                                        ['Jul‘23', 6.5, 4.7],
                                        ['Aug‘23', 4.7, 2.7],
                                        ['Sep‘23', 4, 6.8],
                                        ['Oct‘23', 6.5, 6.1],
                                        ['Nov‘23', 4.7, 2.7],
                                        ['Dec‘23', 4.1, 6],
                                        ['Jan‘24', 4, 6.8],
                                        ['Feb‘24', 6.4, 6.1],
                                        ['Mar‘24', 6.4, 6.1],
                                        ['Apr‘24', 4, 6.8],
                                      ]
                                    }}
                                    xAxisnameStyle={{
                                      // color: '#6C768B',
                                      color: "#6C768B",
                                      fontSize: 10
                                    }
                                    }
                                    xAxisLabel={{
                                      // color: "#344054",
                                      color: "#344054",
                                      fontSize: 10,
                                      interval: 0
                                    }}
                                    label={{
                                      show: true,
                                      position: 'insideTop',
                                      color:'#fff',
                                      fontSize: 9,
                                      formatter: function (params) {
                                        return `$${params.data[2]}M`;
                                      }
                                    }}
                                    label2={{
                                      show: false,
                                    }}
                                    data={["May‘23", "Jun‘23", "Jul‘23", "Aug‘23", "Sep‘23", "Oct‘23", "Nov‘23", "Dec‘23", "Jan‘24", "Feb‘24", "Mar‘24", "Apr‘24"]}
                                    xAxisdatatop={[
                                      {
                                      value: "110%",
                                      textStyle: {
                                      color: "#046C4E",
                                      padding: [0, 0, -55, 7]
                                      }
                                      },
                                      {
                                      value: "110%",
                                      textStyle: {
                                      color: "#046C4E",
                                      padding: [0, 0, -34, 7]
                                      }
                                      },
                                      {
                                      value: "80%",
                                      textStyle: {
                                      color: "#C81E1E",
                                      padding: [0, 0, -40, 7]
                                      }
                                      },
                                      {
                                      value: "80%",
                                      textStyle: {
                                      color: "#C81E1E",
                                      padding: [0, 0, -88, 7]
                                      }
                                      },
                                      {
                                      value: "110%",
                                      textStyle: {
                                      color: "#046C4E",
                                      padding: [0, 0, -35, 7]
                                      }
                                      },
                                      {
                                      value: "80%",
                                      textStyle: {
                                      color: "#C81E1E",
                                      padding: [0, 0, -40, 7]
                                      }
                                      },
                                      {
                                      value: "80%",
                                      textStyle: {
                                       color: "#C81E1E",
                                      padding: [0, 0, -88, 7]
                                      }
                                      },
                                      {
                                      value: "110%",
                                      textStyle: {
                                      color: "#046C4E",
                                      padding: [0, 0, -50, 7]
                                      }
                                      },
                                      {
                                      value: "110%",
                                      textStyle: {
                                      color: "#046C4E",
                                      padding: [0, 0, -32, 7]
                                      }
                                      },
                                      {
                                      value: "80%",
                                      textStyle: {
                                      color: "#C81E1E",
                                      padding: [0, 0, -40, 7]
                                      }
                                      },
                                      {
                                      value: "80%",
                                      textStyle: {
                                      color: "#C81E1E",
                                      padding: [0, 0, -40, 7]
                                      }
                                      },
                                      {
                                      value: "110%",
                                      textStyle: {
                                      color: "#046C4E",
                                      padding: [0, 0, -32, 7]
                                      }
                                      },
                                    ]}
                                    yAxisnameStyle={{
                                      // color: '#6C768B',
                                      color: "#6C768B",
                                      fontSize: 10
                                    }}
                                    min={0}
                                    max={8}
                                    interval={2}
                                    yAxisLabel={{
                                      // color: "#6C768B",
                                      color: "#6C768B",
                                      fontSize: 10,
                                      formatter: '${value}M'
                                    }}
                                    name1={'Actual'}
                                    name2={'Target'}
                                    color1={"#CCD1D5"}
                                    color2={'#1F2A37'}
                                    barWidth1={'70%'}
                                    barWidth2={'47%'}
                                    barGap={'-85%'}
                                  />
                              </div>
                            </div>

                          </div>

                        </div>
                          : activeTab === 3 ?
                          <div className="py-[14px] xl:py-[0.729vw]">

                          <div className="grid grid-cols-12 gap-[35px] 3xl:gap-[1.823vw]">
                            <div className="col-span-12">
                            <div className="flex justify-between items-center bg-[#F5F6F7] 2xl:p-[0.417vw] p-2 rounded-lg 2xl:rounded-[0.417vw]">
                                  <div className="flex items-end gap-[32px] xl:gap-[1.458vw]">
                                    <div className="flex items-end gap-[32px] xl:gap-[1.458vw] border-r border-[#E5E7EB] 2xl:pr-[1.25vw] pr-5">
                                    <div>
                                      <div className="text-[12px] xl:text-[10px] 3xl:text-[0.625vw] text-[#4B586E]">Last 12 Months (Actual)</div>
                                      <div className="flex gap-[8px]">
                                        <div className="text-[#4B586E] text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-semibold">$72.50M</div>
                                      </div>                                      
                                    </div>
                                    <div className="flex gap-[5px] items-center">
                                          <div className="text-[12px] xl:text-[11px] 3xl:text-[0.625vw] text-[#9CA1AB] font-medium">Var %</div>
                                          <div className="text-[12px] xl:text-[11px] 3xl:text-[0.625vw] text-[#046C4E] bg-[#DEF7EC] 2xl:p-[0.208vw] p-1">+ 1.89%
                                          </div>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-[32px] xl:gap-[1.458vw] border-r border-[#E5E7EB] 2xl:pr-[1.25vw] pr-5">
                                    <div>
                                      <div className="text-[12px] xl:text-[10px] 3xl:text-[0.625vw] text-[#4B586E]">Last 12 Months (Target)</div>
                                      <div className="flex gap-[8px]">
                                        <div className="text-[#4B586E] text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-semibold">$65.50M</div>
                                      </div>                                      
                                    </div>
                                    </div>
                                  </div>
                                  <div className="flex gap-[4px] items-center">
                                    <div className="text-[12px] xl:text-[10px] 3xl:text-[0.625vw] text-[#9CA1AB]">Target Vs Actual Variance :</div>
                                    <div className="font-medium text-[12px] xl:text-[10px] 3xl:text-[0.625vw] text-[#374151]">$20 M</div>
                                  </div>
                                </div>
                              <div className="h-[300px] 2xl:h-[19.792vw] pt-[16px] xl:pt-[0.521vw] bg-[#F5F6F7] 2xl:rounded-[0.625vw] rounded-xl 2xl:mt-[0.417vw] mt-2">
                              <DoubleBarchartWithPercentages
                                    legend={{
                                      show: true,
                                      data:  [
                                        {
                                          name: 'Actual',
                                          itemStyle: {
                                            color:"#263040"
                                          }
                                        },
                                        {
                                          name: 'Target',
                                          itemStyle: {
                                            color: '#ACBFDC'
                                          }
                                        }
                                      ],
                                      left: '15',
                                      bottom: '0',
                                      itemWidth:8,
                                      itemHeight:8,
                                    }}

                                    grid={{
                                    top: '0%',
                                    left: '3%',
                                    right: '0%',
                                    bottom: '12%',
                                    containLabel: true
                                    }
                                    }
                                    dataset={{
                                      source: [
                                        ['May‘23', 4.6, 6],
                                        ['Jun‘23', 4.3, 6.8],
                                        ['Jul‘23', 6.5, 4.7],
                                        ['Aug‘23', 4.7, 2.7],
                                        ['Sep‘23', 4, 6.8],
                                        ['Oct‘23', 6.5, 6.1],
                                        ['Nov‘23', 4.7, 2.7],
                                        ['Dec‘23', 4.1, 6],
                                        ['Jan‘24', 4, 6.8],
                                        ['Feb‘24', 6.4, 6.1],
                                        ['Mar‘24', 6.4, 6.1],
                                        ['Apr‘24', 4, 6.8],
                                      ]
                                    }}
                                    xAxisnameStyle={{
                                      // color: '#6C768B',
                                      color: "#6C768B",
                                      fontSize: 10
                                    }
                                    }
                                    xAxisLabel={{
                                      // color: "#344054",
                                      color: "#344054",
                                      fontSize: 10,
                                      interval: 0
                                    }}
                                    label={{
                                      show: true,
                                      position: 'insideTop',
                                      color:'#fff',
                                      fontSize: 9,
                                      formatter: function (params) {
                                        return `$${params.data[2]}M`;
                                      }
                                    }}
                                    label2={{
                                      show: false,
                                    }}
                                    data={["May‘23", "Jun‘23", "Jul‘23", "Aug‘23", "Sep‘23", "Oct‘23", "Nov‘23", "Dec‘23", "Jan‘24", "Feb‘24", "Mar‘24", "Apr‘24"]}
                                    xAxisdatatop={[
                                      {
                                      value: "110%",
                                      textStyle: {
                                      color: "#046C4E",
                                      padding: [0, 0, -55, 7]
                                      }
                                      },
                                      {
                                      value: "110%",
                                      textStyle: {
                                      color: "#046C4E",
                                      padding: [0, 0, -34, 7]
                                      }
                                      },
                                      {
                                      value: "80%",
                                      textStyle: {
                                      color: "#C81E1E",
                                      padding: [0, 0, -40, 7]
                                      }
                                      },
                                      {
                                      value: "80%",
                                      textStyle: {
                                      color: "#C81E1E",
                                      padding: [0, 0, -88, 7]
                                      }
                                      },
                                      {
                                      value: "110%",
                                      textStyle: {
                                      color: "#046C4E",
                                      padding: [0, 0, -35, 7]
                                      }
                                      },
                                      {
                                      value: "80%",
                                      textStyle: {
                                      color: "#C81E1E",
                                      padding: [0, 0, -40, 7]
                                      }
                                      },
                                      {
                                      value: "80%",
                                      textStyle: {
                                       color: "#C81E1E",
                                      padding: [0, 0, -88, 7]
                                      }
                                      },
                                      {
                                      value: "110%",
                                      textStyle: {
                                      color: "#046C4E",
                                      padding: [0, 0, -50, 7]
                                      }
                                      },
                                      {
                                      value: "110%",
                                      textStyle: {
                                      color: "#046C4E",
                                      padding: [0, 0, -32, 7]
                                      }
                                      },
                                      {
                                      value: "80%",
                                      textStyle: {
                                      color: "#C81E1E",
                                      padding: [0, 0, -40, 7]
                                      }
                                      },
                                      {
                                      value: "80%",
                                      textStyle: {
                                      color: "#C81E1E",
                                      padding: [0, 0, -40, 7]
                                      }
                                      },
                                      {
                                      value: "110%",
                                      textStyle: {
                                      color: "#046C4E",
                                      padding: [0, 0, -32, 7]
                                      }
                                      },
                                    ]}
                                    yAxisnameStyle={{
                                      // color: '#6C768B',
                                      color: "#6C768B",
                                      fontSize: 10
                                    }}
                                    min={0}
                                    max={8}
                                    interval={2}
                                    yAxisLabel={{
                                      // color: "#6C768B",
                                      color: "#6C768B",
                                      fontSize: 10,
                                      formatter: '${value}M'
                                    }}
                                    name1={'Actual'}
                                    name2={'Target'}
                                    color1={"#CCD1D5"}
                                    color2={'#1F2A37'}
                                    barWidth1={'70%'}
                                    barWidth2={'47%'}
                                    barGap={'-85%'}
                                  />
                              </div>
                            </div>

                          </div>

                        </div>
                            : null
                        }
                        </div>
                      </>
                    }
                  />
                </div>
    </>
  )
}
