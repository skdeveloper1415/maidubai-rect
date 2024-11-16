import React, { useState } from "react";
import ChartWrapper from "../../components/chartwrapper";
import Horizontalbarchart from "../../components/charts/horizontalbarchart";

export default function Ranking() {
    const [activeTab, setActiveTab] = useState(3);
    
    return (
        <>
            <div className="bg-white border border-[#9CA3AF] rounded-2xl 3xl:rounded-[0.833vw] h-full">
                <ChartWrapper
                    title={"Ranking"}
                    classname={'2xl:px-[0.833vw] px-[16px] 2xl:pt-[0.833vw] pt-[16px]'}
                    ExportIcon={true}
                    graphIcon={false}
                    FilterIcon={false}
                    data={
                        <>
                            <div className="2xl:p-[0.833vw] p-[16px]">
                                <div className="flex justify-between  bg-[#F5F6F7] 2xl:py-[0.417vw] py-2 rounded-lg 2xl:rounded-[0.417vw]">
                                    <div className="flex">
                                        <button onClick={() => setActiveTab(1)} className={`${activeTab == 1 ? 'text-[#FFFFFF] font-semibold bg-[#1F2A37]' : 'text-[#4B586E] font-normal bg-[#FFFFFF]'} text-[12px] xl:text-[12px] 3xl:text-[0.625vw] px-[12px] xl:px-[10px] 3xl:px-[0.625vw] py-[8px] xl:py-[7px] 3xl:py-[0.417vw] rounded-l-[6px]`}>Order Source</button>
                                        <button  onClick={() => setActiveTab(2)} className={`${activeTab == 2 ? 'text-[#FFFFFF] font-semibold bg-[#1F2A37]' : 'text-[#4B586E] font-normal bg-[#FFFFFF]'} text-[12px] xl:text-[12px] 3xl:text-[0.625vw] font-normal   px-[12px] xl:px-[10px] 3xl:px-[0.625vw] py-[8px] xl:py-[7px] 3xl:py-[0.417vw]`}>Order Type</button>
                                        <button onClick={() => setActiveTab(3)} className={`${activeTab == 3 ? 'text-[#FFFFFF] font-semibold bg-[#1F2A37]' : 'text-[#4B586E] font-normal bg-[#FFFFFF]'} text-[12px] xl:text-[12px] 3xl:text-[0.625vw] font-normal   px-[12px] xl:px-[10px] 3xl:px-[0.625vw] py-[8px] xl:py-[7px] 3xl:py-[0.417vw]`}>Custmer Group</button>
                                        <button  onClick={() => setActiveTab(4)} className={`${activeTab == 4 ? 'text-[#FFFFFF] font-semibold bg-[#1F2A37]' : 'text-[#4B586E] font-normal bg-[#FFFFFF]'} text-[12px] xl:text-[12px] 3xl:text-[0.625vw] font-normal   px-[12px] xl:px-[10px] 3xl:px-[0.625vw] py-[8px] xl:py-[7px] 3xl:py-[0.417vw] rounded-br-[6px]`}>Customer Sub Channel</button>
                                        <button  onClick={() => setActiveTab(5)} className={`${activeTab == 5 ? 'text-[#FFFFFF] font-semibold bg-[#1F2A37]' : 'text-[#4B586E] font-normal bg-[#FFFFFF]'} text-[12px] xl:text-[12px] 3xl:text-[0.625vw] font-normal   px-[12px] xl:px-[10px] 3xl:px-[0.625vw] py-[8px] xl:py-[7px] 3xl:py-[0.417vw] rounded-r-[6px]`}>Material Group 1 </button>
                                    </div>
                                </div>
                                {activeTab == 1 ?
                                    <div className="pt-[14px] xl:pt-[0.729vw]">

                                        <div className="grid grid-cols-12 gap-[35px] 3xl:gap-[1.823vw]">
                                            <div className="col-span-12">

                                                <div className="h-[300px] xl:h-[298px] 2xl:h-[23.438vw] pt-[16px] xl:pt-[0.521vw] bg-[#F5F6F7] 2xl:rounded-[0.625vw] rounded-xl">
                                                    <Horizontalbarchart
                                                        legend={{
                                                            show:false,
                                                            left: '2%',
                                                            bottom: '0%',
                                                            textStyle: {
                                                                fontSize: 10,
                                                                color: "#6C768B",
                                                            },
                                                            itemWidth: 9,
                                                            itemHeight: 9,

                                                        }}
                                                        grid={{
                                                            top: '0%',
                                                            left: '3%',
                                                            right: '0%',
                                                            bottom: '0',
                                                            containLabel: true
                                                        }}
                                                        xAxisLabel={{
                                                            show: false
                                                        }}
                                                        xAxisSplitLine={{
                                                            show: false,
                                                            lineStyle: {
                                                                type: "dashed",
                                                                color: "#C8CBD0"
                                                            }
                                                        }}
                                                        yAxisLabel={{
                                                            color: "#363A44",

                                                            fontSize: 12
                                                        }}
                                                        yAxisTick={{
                                                            show: false
                                                        }}
                                                        yAxisLine={{
                                                            show: false,
                                                            lineStyle: {
                                                                color: "#E4E7EC"

                                                            }
                                                        }}
                                                        yAxisdata={['H&O PreSales', 'InstaShop', 'Dewa Store', 'Carrefour', 'E-Commerence']}
                                                        yAxisLine2={{
                                                            show: false,
                                                            lineStyle: {
                                                                color: "#E4E7EC"

                                                            }
                                                        }}
                                                        yAxisLabel2={{
                                                            color: "#24262D",

                                                            fontSize: 13,
                                                            fontWeight: 600,

                                                            formatter: function (params) {
                                                                if (params >= 0.96) {
                                                                    console.log('params', params)
                                                                    return ` $${params} M {greentext| (12.5%)} {icon|} `;
                                                                } else return `$ ${params} M {icon2|} {greentext| 125}`;
                                                            },
                                                            rich: {
                                                                icon: {
                                                                    backgroundColor: { image: "/images/arrow-up.svg" },
                                                                    width: 15, height: 15,
                                                                },
                                                                icon2: {
                                                                    backgroundColor: { image: "/images/arrow-down.svg" },
                                                                    width: 15, height: 15,
                                                                },
                                                                greentext: {
                                                                    color: '#fff',
                                                                    fontSize: 12,
                                                                    backgroundColor: '#02A666',  
                                                                    borderColor: '#02A666',  
                                                                    borderWidth: 1, 
                                                                    borderRadius: 4, 
                                                                    padding: [4, 2]
                                                                }
                                                            },
                                                        }}
                                                        yAxisTick2={{
                                                            show: false
                                                        }}
                                                        yAxisLabelTwo={{
                                                            show: false,
                                                            lineStyle: {
                                                                color: "#E4E7EC"
                                                            },
                                                        }}
                                                        yAxisdata2={['1.2', '1.4', '1.7', '1.8', '2.1',]}
                                                        name={'Actual'}
                                                        barWidth={"50%"}
                                                        showBackground={true}
                                                        backgroundStyle={{

                                                            color: "#F9E8E7",
                                                            borderRadius: [4, 4, 4, 4]
                                                        }}
                                                        label={{
                                                            show: false,
                                                            position: 'outside',
                                                            color: '#344054',
                                                            formatter: "{c}",
                                                            fontSize: 12,
                                                        }}
                                                        itemStyle={{
                                                            color: '#803934',
                                                            borderRadius: [4, 4, 4, 4]
                                                        }}
                                                        data={[60, 50, 40, 50, 20,]}
                                                    />

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    : activeTab == 2 ?
                                    <div className="pt-[14px] xl:pt-[0.729vw]">

                                    <div className="grid grid-cols-12 gap-[35px] 3xl:gap-[1.823vw]">
                                        <div className="col-span-12">

                                            <div className="h-[300px] xl:h-[298px] 2xl:h-[23.438vw] 3xl:h-[23.438vw]  pt-[16px] xl:pt-[0.521vw] bg-[#F5F6F7] 2xl:rounded-[0.625vw] rounded-xl">
                                                <Horizontalbarchart
                                                    legend={{
                                                        show:false,
                                                        left: '2%',
                                                        bottom: '0%',
                                                        textStyle: {
                                                            fontSize: 10,
                                                            color: "#6C768B",
                                                        },
                                                        itemWidth: 9,
                                                        itemHeight: 9,

                                                    }}
                                                    grid={{
                                                        top: '0%',
                                                        left: '3%',
                                                        right: '0%',
                                                        bottom: '0',
                                                        containLabel: true
                                                    }}
                                                    xAxisLabel={{
                                                        show: false
                                                    }}
                                                    xAxisSplitLine={{
                                                        show: false,
                                                        lineStyle: {
                                                            type: "dashed",
                                                            color: "#C8CBD0"
                                                        }
                                                    }}
                                                    yAxisLabel={{
                                                        color: "#363A44",

                                                        fontSize: 12
                                                    }}
                                                    yAxisTick={{
                                                        show: false
                                                    }}
                                                    yAxisLine={{
                                                        show: false,
                                                        lineStyle: {
                                                            color: "#E4E7EC"

                                                        }
                                                    }}
                                                    yAxisdata={['H&O PreSales', 'InstaShop', 'Dewa Store', 'Carrefour', 'E-Commerence']}
                                                    yAxisLine2={{
                                                        show: false,
                                                        lineStyle: {
                                                            color: "#E4E7EC"

                                                        }
                                                    }}
                                                    yAxisLabel2={{
                                                        color: "#24262D",

                                                        fontSize: 13,
                                                        fontWeight: 600,

                                                        formatter: function (params) {
                                                            if (params >= 0.96) {
                                                                console.log('params', params)
                                                                return ` $${params} M {greentext| (12.5%)} {icon|} `;
                                                            } else return `$ ${params} M {icon2|} {greentext| 125}`;
                                                        },
                                                        rich: {
                                                            icon: {
                                                                backgroundColor: { image: "/images/arrow-up.svg" },
                                                                width: 15, height: 15,
                                                            },
                                                            icon2: {
                                                                backgroundColor: { image: "/images/arrow-down.svg" },
                                                                width: 15, height: 15,
                                                            },
                                                            greentext: {
                                                                color: '#fff',
                                                                fontSize: 12,
                                                                backgroundColor: '#02A666',  
                                                                borderColor: '#02A666',  
                                                                borderWidth: 1, 
                                                                borderRadius: 4, 
                                                                padding: [4, 2]
                                                            }
                                                        },
                                                    }}
                                                    yAxisTick2={{
                                                        show: false
                                                    }}
                                                    yAxisLabelTwo={{
                                                        show: false,
                                                        lineStyle: {
                                                            color: "#E4E7EC"
                                                        },
                                                    }}
                                                    yAxisdata2={['1.2', '1.4', '1.7', '1.8', '2.1',]}
                                                    name={'Actual'}
                                                    barWidth={"50%"}
                                                    showBackground={true}
                                                    backgroundStyle={{

                                                        color: "#FAE6CB",
                                                        borderRadius: [4, 4, 4, 4]
                                                    }}
                                                    label={{
                                                        show: false,
                                                        position: 'outside',
                                                        color: '#344054',
                                                        formatter: "{c}",
                                                        fontSize: 12,
                                                    }}
                                                    itemStyle={{
                                                        color: '#EA9135',
                                                        borderRadius: [4, 4, 4, 4]
                                                    }}
                                                    data={[60, 50, 40, 50, 20,]}
                                                />

                                            </div>
                                        </div>

                                    </div>

                                </div>
                                        : activeTab == 3 ?
                                        <div className="pt-[14px] xl:pt-[0.729vw]">

                                        <div className="grid grid-cols-12 gap-[35px] 3xl:gap-[1.823vw]">
                                            <div className="col-span-12">

                                                <div className="h-[300px] xl:h-[298px] 2xl:h-[23.438vw] 3xl:h-[23.438vw]  pt-[16px] xl:pt-[0.521vw] bg-[#F5F6F7] 2xl:rounded-[0.625vw] rounded-xl">
                                                    <Horizontalbarchart
                                                        legend={{
                                                            show:false,
                                                            left: '2%',
                                                            bottom: '0%',
                                                            textStyle: {
                                                                fontSize: 10,
                                                                color: "#6C768B",
                                                            },
                                                            itemWidth: 9,
                                                            itemHeight: 9,

                                                        }}
                                                        grid={{
                                                            top: '0%',
                                                            left: '3%',
                                                            right: '0%',
                                                            bottom: '0',
                                                            containLabel: true
                                                        }}
                                                        xAxisLabel={{
                                                            show: false
                                                        }}
                                                        xAxisSplitLine={{
                                                            show: false,
                                                            lineStyle: {
                                                                type: "dashed",
                                                                color: "#C8CBD0"
                                                            }
                                                        }}
                                                        yAxisLabel={{
                                                            color: "#363A44",

                                                            fontSize: 12
                                                        }}
                                                        yAxisTick={{
                                                            show: false
                                                        }}
                                                        yAxisLine={{
                                                            show: false,
                                                            lineStyle: {
                                                                color: "#E4E7EC"

                                                            }
                                                        }}
                                                        yAxisdata={['H&O PreSales', 'InstaShop', 'Dewa Store', 'Carrefour', 'E-Commerence']}
                                                        yAxisLine2={{
                                                            show: false,
                                                            lineStyle: {
                                                                color: "#E4E7EC"

                                                            }
                                                        }}
                                                        yAxisLabel2={{
                                                            color: "#24262D",

                                                            fontSize: 13,
                                                            fontWeight: 600,

                                                            formatter: function (params) {
                                                                if (params >= 0.96) {
                                                                    console.log('params', params)
                                                                    return ` $${params} M {greentext| (12.5%)} {icon|} `;
                                                                } else return `$ ${params} M {icon2|} {greentext| 125}`;
                                                            },
                                                            rich: {
                                                                icon: {
                                                                    backgroundColor: { image: "/images/arrow-up.svg" },
                                                                    width: 15, height: 15,
                                                                },
                                                                icon2: {
                                                                    backgroundColor: { image: "/images/arrow-down.svg" },
                                                                    width: 15, height: 15,
                                                                },
                                                                greentext: {
                                                                    color: '#fff',
                                                                    fontSize: 12,
                                                                    backgroundColor: '#02A666',  
                                                                    borderColor: '#02A666',  
                                                                    borderWidth: 1, 
                                                                    borderRadius: 4, 
                                                                    padding: [4, 2]
                                                                }
                                                            },
                                                        }}
                                                        yAxisTick2={{
                                                            show: false
                                                        }}
                                                        yAxisLabelTwo={{
                                                            show: false,
                                                            lineStyle: {
                                                                color: "#E4E7EC"
                                                            },
                                                        }}
                                                        yAxisdata2={['1.2', '1.4', '1.7', '1.8', '2.1',]}
                                                        name={'Actual'}
                                                        barWidth={"50%"}
                                                        showBackground={true}
                                                        backgroundStyle={{

                                                            color: "#D0FBE9",
                                                            borderRadius: [4, 4, 4, 4]
                                                        }}
                                                        label={{
                                                            show: false,
                                                            position: 'outside',
                                                            color: '#344054',
                                                            formatter: "{c}",
                                                            fontSize: 12,
                                                        }}
                                                        itemStyle={{
                                                            color: '#00A784',
                                                            borderRadius: [4, 4, 4, 4]
                                                        }}
                                                        data={[60, 50, 40, 50, 20,]}
                                                    />

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                        :activeTab == 4 ?
                                        <div className="pt-[14px] xl:pt-[0.729vw]">

                                        <div className="grid grid-cols-12 gap-[35px] 3xl:gap-[1.823vw]">
                                            <div className="col-span-12">

                                                <div className="h-[300px] xl:h-[298px] 2xl:h-[23.438vw] 3xl:h-[23.438vw]  pt-[16px] xl:pt-[0.521vw] bg-[#F5F6F7] 2xl:rounded-[0.625vw] rounded-xl">
                                                    <Horizontalbarchart
                                                        legend={{
                                                            show:false,
                                                            left: '2%',
                                                            bottom: '0%',
                                                            textStyle: {
                                                                fontSize: 10,
                                                                color: "#6C768B",
                                                            },
                                                            itemWidth: 9,
                                                            itemHeight: 9,

                                                        }}
                                                        grid={{
                                                            top: '0%',
                                                            left: '3%',
                                                            right: '0%',
                                                            bottom: '0',
                                                            containLabel: true
                                                        }}
                                                        xAxisLabel={{
                                                            show: false
                                                        }}
                                                        xAxisSplitLine={{
                                                            show: false,
                                                            lineStyle: {
                                                                type: "dashed",
                                                                color: "#C8CBD0"
                                                            }
                                                        }}
                                                        yAxisLabel={{
                                                            color: "#363A44",

                                                            fontSize: 12
                                                        }}
                                                        yAxisTick={{
                                                            show: false
                                                        }}
                                                        yAxisLine={{
                                                            show: false,
                                                            lineStyle: {
                                                                color: "#E4E7EC"

                                                            }
                                                        }}
                                                        yAxisdata={['H&O PreSales', 'InstaShop', 'Dewa Store', 'Carrefour', 'E-Commerence']}
                                                        yAxisLine2={{
                                                            show: false,
                                                            lineStyle: {
                                                                color: "#E4E7EC"

                                                            }
                                                        }}
                                                        yAxisLabel2={{
                                                            color: "#24262D",

                                                            fontSize: 13,
                                                            fontWeight: 600,

                                                            formatter: function (params) {
                                                                if (params >= 0.96) {
                                                                    console.log('params', params)
                                                                    return ` $${params} M {greentext| (12.5%)} {icon|} `;
                                                                } else return `$ ${params} M {icon2|} {greentext| 125}`;
                                                            },
                                                            rich: {
                                                                icon: {
                                                                    backgroundColor: { image: "/images/arrow-up.svg" },
                                                                    width: 15, height: 15,
                                                                },
                                                                icon2: {
                                                                    backgroundColor: { image: "/images/arrow-down.svg" },
                                                                    width: 15, height: 15,
                                                                },
                                                                greentext: {
                                                                    color: '#fff',
                                                                    fontSize: 12,
                                                                    backgroundColor: '#02A666',  
                                                                    borderColor: '#02A666',  
                                                                    borderWidth: 1, 
                                                                    borderRadius: 4, 
                                                                    padding: [4, 2]
                                                                }
                                                            },
                                                        }}
                                                        yAxisTick2={{
                                                            show: false
                                                        }}
                                                        yAxisLabelTwo={{
                                                            show: false,
                                                            lineStyle: {
                                                                color: "#E4E7EC"
                                                            },
                                                        }}
                                                        yAxisdata2={['1.2', '1.4', '1.7', '1.8', '2.1',]}
                                                        name={'Actual'}
                                                        barWidth={"50%"}
                                                        showBackground={true}
                                                        backgroundStyle={{

                                                            color: "#FFE3E1",
                                                            borderRadius: [4, 4, 4, 4]
                                                        }}
                                                        label={{
                                                            show: false,
                                                            position: 'outside',
                                                            color: '#344054',
                                                            formatter: "{c}",
                                                            fontSize: 12,
                                                        }}
                                                        itemStyle={{
                                                            color: '#BE2217',
                                                            borderRadius: [4, 4, 4, 4]
                                                        }}
                                                        data={[60, 50, 40, 50, 20,]}
                                                    />

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                        :activeTab == 5 ?
                                        <div className="pt-[14px] xl:pt-[0.729vw]">

                                        <div className="grid grid-cols-12 gap-[35px] 3xl:gap-[1.823vw]">
                                            <div className="col-span-12">

                                                <div className="h-[300px] xl:h-[298px] 2xl:h-[23.438vw] 3xl:h-[23.438vw] pt-[16px] xl:pt-[0.521vw] bg-[#F5F6F7] 2xl:rounded-[0.625vw] rounded-xl">
                                                    <Horizontalbarchart
                                                        legend={{
                                                            show:false,
                                                            left: '2%',
                                                            bottom: '0%',
                                                            textStyle: {
                                                                fontSize: 10,
                                                                color: "#6C768B",
                                                            },
                                                            itemWidth: 9,
                                                            itemHeight: 9,

                                                        }}
                                                        grid={{
                                                            top: '0%',
                                                            left: '3%',
                                                            right: '0%',
                                                            bottom: '0',
                                                            containLabel: true
                                                        }}
                                                        xAxisLabel={{
                                                            show: false
                                                        }}
                                                        xAxisSplitLine={{
                                                            show: false,
                                                            lineStyle: {
                                                                type: "dashed",
                                                                color: "#C8CBD0"
                                                            }
                                                        }}
                                                        yAxisLabel={{
                                                            color: "#363A44",

                                                            fontSize: 12
                                                        }}
                                                        yAxisTick={{
                                                            show: false
                                                        }}
                                                        yAxisLine={{
                                                            show: false,
                                                            lineStyle: {
                                                                color: "#E4E7EC"

                                                            }
                                                        }}
                                                        yAxisdata={['H&O PreSales', 'InstaShop', 'Dewa Store', 'Carrefour', 'E-Commerence']}
                                                        yAxisLine2={{
                                                            show: false,
                                                            lineStyle: {
                                                                color: "#E4E7EC"

                                                            }
                                                        }}
                                                        yAxisLabel2={{
                                                            color: "#24262D",

                                                            fontSize: 13,
                                                            fontWeight: 600,

                                                            formatter: function (params) {
                                                                if (params >= 0.96) {
                                                                    console.log('params', params)
                                                                    return ` $${params} M {greentext| (12.5%)} {icon|} `;
                                                                } else return `$ ${params} M {icon2|} {greentext| 125}`;
                                                            },
                                                            rich: {
                                                                icon: {
                                                                    backgroundColor: { image: "/images/arrow-up.svg" },
                                                                    width: 15, height: 15,
                                                                },
                                                                icon2: {
                                                                    backgroundColor: { image: "/images/arrow-down.svg" },
                                                                    width: 15, height: 15,
                                                                },
                                                                greentext: {
                                                                    color: '#fff',
                                                                    fontSize: 12,
                                                                    backgroundColor: '#02A666',  
                                                                    borderColor: '#02A666',  
                                                                    borderWidth: 1, 
                                                                    borderRadius: 4, 
                                                                    padding: [4, 2]
                                                                }
                                                            },
                                                        }}
                                                        yAxisTick2={{
                                                            show: false
                                                        }}
                                                        yAxisLabelTwo={{
                                                            show: false,
                                                            lineStyle: {
                                                                color: "#E4E7EC"
                                                            },
                                                        }}
                                                        yAxisdata2={['1.2', '1.4', '1.7', '1.8', '2.1',]}
                                                        name={'Actual'}
                                                        barWidth={"50%"}
                                                        showBackground={true}
                                                        backgroundStyle={{

                                                            color: "#E4E7E9",
                                                            borderRadius: [4, 4, 4, 4]
                                                        }}
                                                        label={{
                                                            show: false,
                                                            position: 'outside',
                                                            color: '#344054',
                                                            formatter: "{c}",
                                                            fontSize: 12,
                                                        }}
                                                        itemStyle={{
                                                            color: '#1F2A37',
                                                            borderRadius: [4, 4, 4, 4]
                                                        }}
                                                        data={[60, 50, 40, 50, 20,]}
                                                    />

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                        :null
                                }
                            </div>
                        </>
                    }
                />

            </div>
        </>
    )
}
