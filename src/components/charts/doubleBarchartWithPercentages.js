import React from 'react'
import ReactEcharts from "echarts-for-react";

export default function DoubleBarchartWithPercentages({ legend, grid, dataset, xAxisname, xAxisnameStyle, xAxisLabel, data, yAxisname, yAxisnameStyle, yAxisLabel, name1, name2, color1, color2, label, label2, barWidth1,barWidth2, barGap, min, max, interval, xAxisdatatop }) {
  const option = {
    legend: legend,
    grid: grid,
    tooltip: {
      backgroundColor:'#24262D',
      borderColor:'#24262D',
      textStyle: {
        color: "#FFFFFF"
      },
    },
    dataset: dataset,
    xAxis: [
      {
        name: xAxisname,
        nameLocation: 'middle',
        nameGap: 30,
        nameTextStyle: xAxisnameStyle,
        type: "category",
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: {
          show: true,
          lineStyle: { 
            color: "#EAEDF3",
           },
        },
        axisLabel: xAxisLabel,
        data: data,

      },
      {
        type: "category",
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: {
          show: true,
          lineStyle: { 
            color: "#EAEDF3",
           },
        },
        axisLabel: xAxisLabel,
        data: xAxisdatatop,
      },
    ],
    yAxis: [
      {
        name: yAxisname,
        nameRotate: 90,
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: yAxisnameStyle,
        type: "value",
        min: min,
        max: max,
        interval: interval,
        axisLabel: yAxisLabel,
        axisLine: {
          show: true,
          lineStyle: { color: "#EAEDF3"},
          formatter: '{value} %',
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#EAEDF3"
          },
        },
      },
    ],

    series: [
      {
        name: name1,
        type: 'bar',
        color: color1,
        barWidth: barWidth1,
        itemStyle: {
          barBorderRadius: [4, 4, 0, 0]
        },
        label: label2
      },
      {
        name: name2,
        type: 'bar',
        color: color2,
        itemStyle: {
          barBorderRadius: [4, 4, 0, 0]
        },
        barWidth: barWidth2,
        barGap: barGap,
        label: label
      },

    ]
  };
  return (
    <ReactEcharts
      option={option}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
