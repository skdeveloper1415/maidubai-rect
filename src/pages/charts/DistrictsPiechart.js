import React from 'react'
import ReactEcharts from "echarts-for-react";
 
export default function DistrictsPiechart({name, radius, center, labelLine, data  }) {
 
    const option = {
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow'
        },
        backgroundColor: '#000', 
        textStyle: {
          color: '#FFF'
        },
        borderColor: '#000',
      },
      series: [
        {
          name: name,
          type: 'pie',
          radius: radius,
          center: center,
           labelLine: labelLine,
          data: data
        }
      ],
    };
 
    return (
        <ReactEcharts
            option={option}
            style={{ width: "100%", height: "100%" }}
        />
    )
}