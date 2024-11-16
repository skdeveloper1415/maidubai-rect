import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';


function Barchart() {

const option = {
    grid: {
        top: 5,
        left: 5,
        right: 0,
        bottom: 0,
        containLabel: true,
      },
    xAxis: {
      type: 'category',
      data: ['WK-1', 'WK-2', 'WK-3', 'WK-4', 'WK-5', 'WK-6'],
      axisLine: {
        show: false // Hide the x-axis line
      },
      axisTick: {
        show: false // Hide the x-axis ticks
      },
       axisLabel: {
        fontSize: 10, // Set the desired font size
        color: '#9CA1AB' // Optionally, set the font color
      }
    },
    yAxis: {
      axisLabel: false,
      splitLine: false,
      type: 'value'
    },
    series: [
      {
        data: [
          { value: 120, itemStyle: { color: '#E5E7EB' } },
          { value: 80, itemStyle: { color: '#E5E7EB' } },
          { value: 155, itemStyle: { color: '#E5E7EB' } },
          { value: 140, itemStyle: { color: '#E5E7EB' } },
          { value: 130, itemStyle: { color: '#E5E7EB' } },
          {
            value: 200,
            itemStyle: {
              color: '#D62C72'
            }
          }
        ],
        type: 'bar',
        itemStyle: {
          borderRadius: [4, 4, 0, 0] // Top-left and top-right corners rounded
        }
      }
    ]
  };

  return (
    <ReactEcharts
    echarts={echarts}
    option={option}
    style={{ width: '100%', height: '100%' }}
  />
  )
}

export default Barchart