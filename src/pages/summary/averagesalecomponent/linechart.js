import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';



function Linechart() {


  const option =    {
        grid: {
          top: 5,
          left: 10,
          right: 5,
          bottom: 0,
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false, // Remove boundary gap
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed', // Set the line style to dashed
              color: '#dcdcdc', // Optional: set the color of the dashed line
              width: 1.5 // Optional: set the width of the dashed line
            }
          },
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            show: true,
            color: "#9CA1AB",
            fontSize: 12,
            width: 40,
            overflow: "break",
            interval: 0,
          },
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
          axisLine: { show: false }, // Hide the y-axis line
          axisTick: { show: false }, // Hide the y-axis ticks
          axisLabel: {
            show: false // Hide the y-axis labels
          },
          min: 0,
          max: 600,
          interval: 100,
        },
        color: "#000",
        series: [
          {

            type: "line",
            smooth: true,
            symbol: "none",
            itemStyle: { color: "#99403A" }, // Change line color here
            lineStyle: { color: "#99403A", width: 2 }, // Update line color here
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0.1,
                  color: "#c99591",
                },
                {
                  offset: 1,
                  color: "#fff",
                },
              ]),
            },
            data: [400, 350, 200, 350, 150, 280],
          },
        ],
      };

  return (
    <ReactEcharts
    echarts={echarts}
    option={option}
    style={{ width: '100%', height: '100%' }}
  />
  )
}

export default Linechart