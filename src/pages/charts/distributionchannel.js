import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

export default function DistributionChannelChart() {
  const option = {
    angleAxis: {
      startAngle: 90,
      endAngle: -290,
      splitLine: {
        show: false,
      },
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { show: false },
    },
    radiusAxis: {
      type: "category",
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
    },
    polar: {
      radius: ["12%", "100%"],
      center:["55%", "50%"],
    },
    series: [
      {
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "#414040",
        },
        barWidth: "7",
        data: [
          {
            value: 1,
            itemStyle: {
              color: "#a4c2b5",
            },
          },
          {
            value: 1,
            itemStyle: {
              color: "#86bfaa",
            },
          },
         
          {
            value: 2,
            itemStyle: {
              color: "#3b987b",
            },
          },
          {
            value: 3,
            itemStyle: {
              color: "#2f7c65",
            },
          },
          {
            value: 4,
            itemStyle: {
              color: "#246251",
            },
          },
          {
            value: 5,
            itemStyle: {
              color: "#1c5044",
            },
          },
          {
            value: 3,
            itemStyle: {
              color: "#0d2d27",
            },
          },
         
        ],
        coordinateSystem: "polar",
        name: "With Round Cap",
        roundCap: true,
      },
    ],
  };

  return (
    <ReactEcharts option={option} style={{ width: "100%", height: "100%" }} />
  );
}
