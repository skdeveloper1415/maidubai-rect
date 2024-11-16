import React from 'react'
import ReactEcharts from "echarts-for-react";


export const DrillDownChart = () => {


  const drillDownCharts = {

    series: [{
      type: "tree",
      emphasis: false,
      data: [{
        name: (() => {
          return "Sales (AED) \n 50.8M \n 5%"
        })(),
        label: {
          show: true,
          position: "inside",
          color: '#4B586E',
          background: '#36833A',
          fontSize: '12',
          fontWeight: '600',
          textAlign: 'left',
          borderColor: '0',
          lineHeight: 15,
          emphasis: false,
          backgroundColor: '#E5E7EB',
          padding: [20, 20, 20, 20],
          borderRadius: [8, 8, 8, 8],
        },

        itemStyle: {
          color: '#36833A',
          emphasis: false
        },
        children: [
          {
            lineStyle: {
              width: 20,
              color: "#EA547878"
            },
            symbolSize: 0,
            label: {
              show: true,
              position: "right",
              lineHeight: 15,
              color:  '#363A44',
            },
            name: (() => {
              return "January 30.5M \n -2.4%"
            })(),
          },
          {
            lineStyle: {
              width: 20,
              color: "#02A66678"
            },
            symbolSize: 0,
            label: {
              show: true,
              position: "right",
              lineHeight: 15,
              color:  '#363A44',
            },
            name: (() => {
              return "February 8.5M    \n +1.2%"
            })(),
          },
          {
            name: (() => {
              return "March 2.5M \n +1.2%"
            })(),
            lineStyle: {
              width: 20,
              color: "#02A66699"
            },
            symbolSize: 0,
            label: {
              show: true,
              position: "right",
              lineHeight: 15,
              color:  '#363A44',
            },
          },
          {
            name: (() => {
              return "April 1.5M \n +1.2%"
            })(),
            lineStyle: {
              width: 20,
              color: "#02A66699"
            },
            symbolSize: 0,
            label: {
              show: true,
              position: "right",
              lineHeight: 15,
              color:  '#363A44',
            },
          },
          // 2nd
          {
            lineStyle: {
              width: 20,
              color: "02A66678"
            },
            label: {
              show: true,
              position: "inside",
              color: '#fff',
              fontSize: '12',
              fontWeight: '600',
              textAlign: 'left',
              lineHeight: 15,
              color: '#fff',
              color: '#4B586E',
              backgroundColor: '#E5E7EB',
              padding: [20, 20, 20, 20],
              borderRadius: [8, 8, 8, 8]
            },
            itemStyle: {
              color: '#36833A',
            },
            name: "May \n 10.8M \n 5.0%",
            children: [
              {
                name: (() => {
                  return "Week 1 1.0M \n +1.2%"
                })(),
                symbolSize: 0,
                lineStyle: {
                  width: 20,
                  color: "#02A66699",
                },
                label: {
                  show: true,
                  position: "right",
                  lineHeight: 15,
                  color: '#363A44',
                },
              },
              {
                name: "Week 2 \n 10.0M \n 5.0%",
                label: {
                  show: true,
                  position: "inside",
                  color: '#fff',
                  fontSize: '12',
                  fontWeight: '600',
                  textAlign: 'left',
                  lineHeight: 15,
                  color: '#4B586E',
                  backgroundColor: '#E5E7EB',
                  padding: [20, 20, 20, 20],
                  borderRadius: [8, 8, 8, 8],
                },
                itemStyle: {
                  color: '#36833A',
                },
                collapsed: false,
                children: [
                  {
                    name: "Ajman 2.0M \n -0.8%",
                    symbolSize: 0,
                    lineStyle: {
                      width: 20,
                      color: "#EA547878"
                    },
                  },
                  {
                    name: "Al Ain 2.0M \n +2.0%",
                    symbolSize: 0,
                    lineStyle: {
                      width: 20,
                      color: "#02A66678"
                    },
                  },
                  {
                    name: "Abu Dhabi 2.0M \n +3.5%",
                    symbolSize: 0,
                    lineStyle: {
                      width: 20,
                      color: "#02A66678"
                    },
                  },
                  {
                    name: "Dubai \n 2.0M \n 5.0%",
                    collapsed: false,
                    children: [{
                      name: "Ecommerce  0.5M \n Retail \n -0.8% ",
                      lineStyle: {
                        width: 20,
                        color: "#EA547878",
                      },
                      symbolSize: 0,
                      label: {
                        show: true,
                        position: "right",
                        lineHeight: 15,
                        color:  '#363A44',
                      },
                    },
                    {
                      name: "EK Offices 0.4M \n +1.2%",
                      lineStyle: {
                        width: 24,
                        color: "#02A66678"
                      },
                      symbolSize: 0,
                      label: {
                        show: true,
                        position: "right",
                        lineHeight: 15,
                        color:  '#363A44',
                      },
                    },
                    {
                      name: " VM Institutions 0.1M \n +1.2%",
                      lineStyle: {
                        width: 14,
                        color: "#02A66678"
                      },
                      symbolSize: 0,
                      label: {
                        show: true,
                        position: "right",
                        lineHeight: 15,
                        color:  '#363A44',
                      },
                    },
                    {
                      name: "VM Government 0.2M \n +1.2%",
                      lineStyle: {
                        width: 12,
                        color: "#02A66678"
                      },
                      symbolSize: 0,
                      label: {
                        show: true,
                        position: "right",
                        lineHeight: 15,
                        color:  '#363A44',
                      },
                    },
                    {
                      lineStyle: {
                        width: 20,
                        color: "rgba(2, 166, 102, 0.47)"
                      },
                      label: {
                        show: true,
                        position: "inside",
                        color: '#fff',
                        fontSize: '12',
                        fontWeight: '600',
                        textAlign: 'left',
                        lineHeight: 15,
                        color: '#fff',
                        color: '#4B586E',
                        backgroundColor: '#E5E7EB',
                        padding: [20, 20, 20, 20],
                        borderRadius: [8, 8, 8, 8]
                      },
                      itemStyle: {
                        color: '#36833A',
                      },
                      name: "Home \n 1.0M \n 5.0%",
                      children: [
                        {
                          name: (() => {
                            return "Finished Products 0.2M \n -0.8%"
                          })(),
                          lineStyle: {
                            width: 20,
                            color: "#EA547878"
                          },
                          symbolSize: 0,
                          label: {
                            show: true,
                            position: "right",
                            lineHeight: 15,
                            color:  '#363A44',
                          },
                        },

                        {
                          name: (() => {
                            return "Trading Goods 0.2M \n +1.8%"
                          })(),
                          lineStyle: {
                            width: 20,
                            color: "#02A66699"
                          },
                          symbolSize: 0,
                          label: {
                            show: true,
                            position: "right",
                            lineHeight: 15,
                            color:  '#363A44',
                          },
                        },
                        {
                          name: (() => {
                            return "Services 0.2M \n 5.0%"
                          })(),
                          lineStyle: {
                            width: 20,
                            color: "#02A66699"
                          },
                          symbolSize: 0,
                          label: {
                            show: true,
                            position: "right",
                            lineHeight: 15,
                            color:  '#363A44',
                          },
                        },
                        {
                          name: (() => {
                            return "Semi Finished Products 0.2M \n +3.2%"
                          })(),
                          lineStyle: {
                            width: 20,
                            color: "#02A66699"
                          },
                          symbolSize: 0,
                          label: {
                            show: true,
                            position: "right",
                            lineHeight: 15,
                            color:  '#363A44',
                          },
                        },
                      ],
                    },

                    {
                      name: "Office 0.2M  \n +1.2%",
                      lineStyle: {
                        width: 12,
                        color: "#02A66678"
                      },
                      symbolSize: 0,
                      label: {
                        show: true,
                        position: "right",
                        lineHeight: 15,
                        color:  '#363A44',
                      },
                    },
                    {
                      name: "Office Dewa 0.1M  \n -0.8%",
                      lineStyle: {
                        width: 12,
                        color: "#EA547878"
                      },
                      symbolSize: 0,
                      label: {
                        show: true,
                        position: "right",
                        lineHeight: 15,
                        color:  '#363A44',
                      },
                    },
                    {
                      name: "CS Pronto 0.1M  \n -0.8%",
                      lineStyle: {
                        width: 12,
                        color: "#EA547878"
                      },
                      symbolSize: 0,
                      label: {
                        show: true,
                        position: "right",
                        lineHeight: 15,
                        color:  '#363A44',
                      },
                    },
                    {
                      name: "FS Catering 0.2M  \n +1.2%",
                      lineStyle: {
                        width: 12,
                        color: "#02A66678"
                      },
                      symbolSize: 0,
                      label: {
                        show: true,
                        position: "right",
                        lineHeight: 15,
                        color:  '#363A44',
                      },
                    },
                    {
                      name: "TT Wholesale 0.5M  \n -0.8%",
                      lineStyle: {
                        width: 12,
                        color: "#EA547878"
                      },
                      symbolSize: 0,
                      label: {
                        show: true,
                        position: "right",
                        lineHeight: 15,
                        color:  '#363A44',
                      },
                    },

                    ],
                    lineStyle: {
                      width: 20,
                      color: "#02A66678"
                    },

                    label: {
                      show: true,
                      position: "inside",
                      color: '#fff',
                      fontSize: '12',
                      fontWeight: '600',
                      textAlign: 'left',
                      lineHeight: 15,
                      color: '#4B586E',
                      backgroundColor: '#E5E7EB',
                      padding: [20, 20, 20, 20],
                      borderRadius: [8, 8, 8, 8]
                    },
                    itemStyle: {
                      color: '#36833A',
                    },
                  },
                  {
                    name: "Fujairah 2.0M \n +5.0%",
                    symbolSize: 0,
                    lineStyle: {
                      width: 20,
                      color: "#02A66678"
                    },
                  },
                ],
                lineStyle: {
                  width: 20,
                  color: "#02A66699"
                },
              },
              {
                name: (() => {
                  return "Week 3 9.5M \n +3.2%"
                })(),
                lineStyle: {
                  width: 20,
                  color: "#02A66699"
                },
                symbolSize: 0,
                label: {
                  show: true,
                  position: "right",
                  lineHeight: 15,
                  color: '#363A44',
                },
              },
              {
                name: (() => {
                  return "Week 4 8.5M \n +1.8%"
                })(),
                lineStyle: {
                  width: 20,
                  color: "#02A66699"
                },
                symbolSize: 0,
                label: {
                  show: true,
                  position: "right",
                  lineHeight: 15,
                  color: '#363A44',
                },
              },
            ],
          },

          {
            name: "June 0.2M \n +1.2%",
            lineStyle: {
              width: 20,
              color: "#02A66678"
            },
            symbolSize: 0,
            label: {
              show: true,
              position: "right",
              lineHeight: 15,
              color:  '#363A44',
            },

          },
          {
            name: "July 1.2M \n +1.1%",
            lineStyle: {
              width: 20,
              color: "#02A66678"
            },
            symbolSize: 0,
            label: {
              show: true,
              position: "right",
              lineHeight: 15,
              color:  '#363A44',
            },
          },
          {
            name: "August 2.3M \n -2.4%",
            lineStyle: {
              width: 20,
              color: "#EA547878"
            },
            symbolSize: 0,
            label: {
              show: true,
              position: "right",
              lineHeight: 15,
              color:  '#363A44',
            },

          },
          {
            name: "September 1.2M \n -2.4%",
            lineStyle: {
              width: 20,
              color: "#EA547878"
            },
            symbolSize: 0,
            label: {
              show: true,
              position: "right",
              lineHeight: 15,
              color:  '#363A44',
            },
          },
          {
            name: "October 0.2M \n +1.1%",
            lineStyle: {
              width: 20,
              color: "#02A66678"
            },
            symbolSize: 0,
            label: {
              show: true,
              position: "right",
              lineHeight: 15,
              color:  '#363A44',
            },
          },
          {
            name: "November 0.1M \n -2.4%",
            lineStyle: {
              width: 20,
              color: "#EA547878"
            },
            symbolSize: 0,
            label: {
              show: true,
              position: "right",
              lineHeight: 15,
              color:  '#363A44',
            },
          },
          {
            name: "December 0.2M \n +1.1%",
            lineStyle: {
              width: 20,
              color: "#02A66678"
            },
            symbolSize: 0,
            label: {
              show: true,
              position: "right",
              lineHeight: 15,
              color:  '#363A44',
            },

          },
        ]
      }],
      itemStyle: {
        emphasis: {
          emphasis: false,
        },
      },
      label: {
        position: "right",
        color: '#fff',
        lineHeight: 15,
        color: '#363A44',
      },
      lineStyle: {
        width: 30,
        color: "#fff"
      },
      symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIKSURBVHgB7da9TUMxFEDhe11AywjZgIyQSBR0MAqZAJggsAl0FEhkhGxARqAFpGfsF0ARLJAcna/y++mOru2Mv5Zns5LlokZcZsQktPdaq3VGrof6fhuL1Wb3W/6ulrOTkkfXbXUVOmB59x36bXwa323jvrTVNHTw+kTX+jHvkUt/8T25xoVoUzsteXy9XS9nkxb4NYQz1GFefkqLp0Reti26ujVTZV70M9jAXJMSQjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBobrgTchpBqxLlHrYwgpI9dliPoQQhpq3pZYPK/aFN+HWHrTxdNmvGQN8XnT9+sQQm/Zm/b19ha9WL3V+jF3kgFaw7Fla9of898Py/NJieGmZpy2j9PQ3msTu8l2WR7vU/3I3fEFO3Nf7zpxuL0AAAAASUVORK5CYII=",
      height: "90%",
      top: '5%',
      left: '60',
      bottom: '-20%',
      on: {
        click: function (params) {
          var node = params.data;
          if (node.symbolSize === 0) {
            node.symbolSize = 70;
            if (node.children) {
              node.children.forEach(function (child) {
                child.symbolSize = 70;
              });
            }
          } else {
            node.symbolSize = 0;
            if (node.children) {
              node.children.forEach(function (child) {
                child.symbolSize = 0;
              });
            }
          }
          // myChart.setOption(drillDownCharts);
        }
      }
    }]
  }


  return (
    <div>
      <ReactEcharts option={drillDownCharts} style={{ width: '100%', height: '800px' }} />
    </div>
  )
} 