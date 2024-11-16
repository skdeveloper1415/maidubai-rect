import React, { useState } from "react";
import ChartWrapper from "../../components/chartwrapper";
import TreeMapChart from "../../components/charts/treemapchrat";
import * as echarts from "echarts";
import SingleGradientChart from "../../components/charts/singlegradientchart";
import { Dropdown } from 'primereact/dropdown';


export default function Customersubchannel() {
   

  

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const TreeMapData = [
        {
            name: 'nodeA',
            value: 40,
            children: [
                {
                    name: '$0.6M (5%) \n VM',
                    value: 4,
                    itemStyle: { color: "#0ABF95" },
                    
                },
                {
                    name: '$0.6M (5%) \n Trading',
                    value: 4,
                    itemStyle: { color: "#2FD8AB" },
                },
            ]
        },

        {
            name: 'nond2',
            value: 40,
            children: [
                {
                    name: '$0.6M (5%) \n EK',
                    value: 4,
                    itemStyle: { color: "#0ABF95" },
                    
                    
                },
                {
                    name: '$0.6M (5%) \n Horeca',
                    value: 4,
                    itemStyle: { color: "#2FD8AB" },
                },
            ]
        },
        {
            name: 'nond2',
            value: 80,
            label: { color: "#000" },

            children: [
                {
                    name: '$0.3M (5%) \n Ex GCC',
                    value: 4,
                    itemStyle: { color: "#0ABF95" },


                },
                {
                    name: '$0.1M (5%) \n Home',
                    value: 6,
                    itemStyle: { color: "#2FD8AB" },

                },
                {
                    name: '$0.3M (5%) \n Ex Non-GCC',
                    value: 6,
                    itemStyle: { color: "#0ABF95", },
                },
                {
                    name: '$0.3M (5%) \n Office',
                    value: 6,
                    itemStyle: { color: "#0ABF95", },
                },
                {
                    name: '$0.1M (5%) \n TT',
                    value: 6,
                    itemStyle: { color: "#2FD8AB", },
                },
                {
                    name: '$0.1M (5%) \n Hybrid',
                    value: 6,
                    itemStyle: { color: "#2FD8AB", },
                },
                {
                    name: '$0.3M (5%) \n MT',
                    value: 6,
                    itemStyle: { color: "#0ABF95", },
                },
                {
                    name: '$0.1M (5%) \n CS',
                    value: 6,
                    itemStyle: { color: "#2FD8AB", },
                },
            ]
        },
        {
            name: '$1M (5%) \n B2B2C',
            value: 60,
            itemStyle: { color: "#012D27", },
        },
        {
            name: '$0.8M (5%) \n B2C',
            value: 60,
            itemStyle: { color: "#036251", },
        },

    ]
    return (
        <>
            <div className="bg-white border border-[#9CA3AF] rounded-2xl 3xl:rounded-[0.833vw]">
                <ChartWrapper
                    title={"Custmor Sub channel"}
                    classname={'3xl:px-[0.833vw] xl:px-[14px] px-[16px] py-[12px] xl:py-[10px] 3xl:py-[0.625vw] border-b border-b-[#DDE1EA] dark:border-b-[#202227]'}
                    ExportIcon={true}
                    FilterIcon={false}
                    data={
                        <>

                            <div className=" p-[16px] xl:p-[16px] 3xl:p-[0.833vw]">
                                <div className="flex justify-between mb-[16px] xl:mb-[16px] 3xl:mb-[0.833vw]">
                                    <div>
                                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                            placeholder="Revenue" className="w-[120px]  custDropdown  custDropdown2" />
                                    </div>
                                    <div className=" col-span-6 h-[30px] 3xl:h-[1.563vw] w-[50%] relative">
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
                                        barwidth={"30"}
                                        itemStyle={{ borderRadius: [8] }}
                                        color={new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                            {
                                                offset: 1,
                                                color: "#EBFEF7  ",
                                            },
                                            {
                                                offset: 0.7,
                                                color: "#D0FBE9 ",
                                            },
                                            {
                                                offset: 0.6,
                                                color: "#A4F6D8 ",
                                            },
                                            {
                                                offset: 0,
                                                color: "#6AEBC5 ",
                                            },
                                            {
                                                offset: 0,
                                                color: "#2FD8AB  ",
                                            },
                                            {
                                                offset: 0,
                                                color: "#0ABF95  ",
                                            },
                                            {
                                                offset: 0,
                                                color: "#00A784   ",
                                            },
                                            {
                                                offset: 0,
                                                color: "#036251   ",
                                            },
                                            {
                                                offset: 0,
                                                color: "#012D27    ",
                                            },
                                        ])}
                                        label={ {
                                            show: false,
                                        }}
                                        />
                                        <div className="flex justify-between absolute left-1 right-1 top-1">
                                            <div className="text-[#4B586E] text-[12px] 3xl:text-[0.625vw]">{'<'}50M</div>
                                            <div className="text-[#FFFFFF] text-[12px] 3xl:text-[0.625vw]">$1M</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[293px] 3xl:h-[15.26vw]">
                                    <TreeMapChart
                                        data={TreeMapData}
                                        tooltip={{
                                            show: true, // Set to true to display the tooltip
                                            trigger: "item", // Trigger the tooltip when hovering over an item
                                            formatter: "{b}: {c}", // Customize the tooltip content, {b} represents the name, and {c} represents the value
                                            // You can customize other tooltip properties as needed
                                        }}
                                        legend={{
                                            show: false,
                                            bottom: "3%",
                                            left: "3%",
                                            right: "3%",
                                            top: "3%",
                                            itemWidth: 10,
                                            itemHeight: 10,
                                            textStyle: {
                                                color: "#222222",
                                            },
                                        }}
                                        width={'100%'}
                                        height={'100%'}
                                        itemStyle={{
                                            gapWidth: 2
                                        }}
                                        breadcrumb={{
                                            show: false,
                                        }}
                                        label={{
                                            show: true,
                                            position: "inside", // Set the label position inside the node
                                            align: "center",
                                            overflow: "breakAll",

                                            rich: {
                                                larger: {
                                                    fontSize: 12,
                                                    color: "#ffffff",
                                                    lineHeight: 15
                                                },
                                                normal: {
                                                    fontSize: 12,
                                                    color: "#363A44",
                                                    fontWeight: 600,

                                                },
                                            },
                                            formatter: "$ \n{larger|{b}}",
                                        }}


                                    />
                                </div>

                            </div>

                        </>
                    }

                />
            </div>
        </>
    )
}
