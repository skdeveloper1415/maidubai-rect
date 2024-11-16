import React from 'react';
import ReactEcharts from "echarts-for-react";
import MaiDuabi from '../../assets/images/mail-dubai.svg';
import Bulkrange from '../../assets/images/bulkrange.png';
import FunctionalRange from '../../assets/images/functionalrange.png';
import GlassRange from '../../assets/images/glassrange.png';
import RegularRange from '../../assets/images/regularrange.png';

const Gauge = {
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '75%'],
        radius: '100%',
        min: 0,
        max: 100,
        splitNumber: 8,
        itemStyle: {
          color: '#CE6C65'
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            color: [[1, '#E4E7E9']],
            width: 10,
          }
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
        },
        pointer: {show:false,},
        axisTick: {show: false,},
        splitLine: {show: false,},
        axisLabel: {
          show: false,
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          fontSize: 14,
          offsetCenter: [0, -4],
          color:'#4B586E',
          formatter: '{value} %',
        },
        data: [
          {
            value: '63.2',
          }
        ]
      }
    ]
  };

export default function BottleRange() {
  return (
    <>
     <div className='bg-white border border-[#EAE7E5] 2xl:rounded-[0.833vw] rounded-2xl flex max-lg:flex-wrap overflow-hidden'>
        <div className='bg-[#F4F5F7] 2xl:w-[14.219vw] w-[270px] 2xl:pt-[1.458vw] pt-6 2xl:pl-[1.667vw] pl-8 2xl:pr-[1.354vw] pr-[26px] 2xl:pb-[1.563vw] pb-[30px]'>
      <img src={MaiDuabi} alt="logo" className="2xl:w-[6.458vw] 2xl:h-[1.823vw]" width={124} height={35} />
      <div className='w-[130px] 2xl:w-[7.525vw] h-[90px] 2xl:h-[6.771vw]'><ReactEcharts option={Gauge} style={{ height: '100%', width: '100%', }} /></div>
      {/*col*/}
      <div className='flex items-center justify-between'>
        <div className='text-[#9CA1AB] 2xl:text-[0.813vw] text-xs font-normal leading-5 2xl:leading-[1.042vw] italic' style={{ fontFamily: 'Open Sans, sans-serif' }}><p>Target</p></div>
        <div className='text-[#4B586E] 2xl:text-[0.833vw] text-sm font-semibold leading-[24px] 2xl:leading-[1.25vw] 2xl:w-[3.125vw] text-left' style={{ fontFamily: 'Work Sans, sans-serif' }}><span>65.50</span> </div>
      </div>
      {/*col*/}
      <div className='flex items-center justify-between'>
        <div className='text-[#9CA1AB] 2xl:text-[0.813vw] text-xs font-normal leading-5 2xl:leading-[1.042vw] italic' style={{ fontFamily: 'Open Sans, sans-serif' }}><p>Actual</p></div>
        <div className='text-[#4B586E] 2xl:text-[0.833vw] text-sm font-semibold leading-[24px] 2xl:leading-[1.25vw] 2xl:w-[3.125vw] text-left' style={{ fontFamily: 'Work Sans, sans-serif' }}><span> 40.8</span> </div>
      </div>
      {/*col*/}
      <div className='flex items-center justify-between'>
        <div className='text-[#9CA1AB] 2xl:text-[0.813vw] text-xs font-normal leading-5 2xl:leading-[1.042vw] italic' style={{ fontFamily: 'Open Sans, sans-serif' }}><p>LP Var %</p></div>
        <div className='text-[#4B586E] 2xl:text-[0.833vw] text-sm font-semibold leading-[24px] 2xl:leading-[1.25vw] 2xl:w-[3.125vw] text-left flex gap-5 items-center' style={{ fontFamily: 'Work Sans, sans-serif' }}><span>  2.1</span><i className='maid-triangle-up text-[#31C48D] text-[6px]'></i> </div>
      </div>
      {/*Bulk Range*/}
        </div>
        <div className='grow grid md:grid-cols-2 xl:grid-cols-4 divide-x divide-[#EAE7E5]'>
          {/*col*/}
          <div className='2xl:pt-[1.198vw] pt-[22px] 2xl:pl-[1.302vw] pl-6 2xl:pb-[1.927vw] pb-8 2xl:pr-[0.82vw] pr-3.5 '>
          <div className='text-[#363A44] 2xl:text-[1.042vw] text-lg font-medium leading-5 2xl:leading-[1.042vw]' style={{ fontFamily: 'Work Sans, sans-serif' }}><p>Bulk Range</p></div>
          <div className='2xl:mt-[1.667vw] mt-7 grid grid-cols-12'>
            <div className='col-span-6'>
              <img src={Bulkrange} width={128} height={167} alt='Bulkrange' className=''/>
            </div>
            <div className='col-span-6'>
            <div className='w-[130px] 2xl:w-[7.525vw] h-[90px] 2xl:h-[6.771vw]'><ReactEcharts option={Gauge} style={{ height: '100%', width: '100%', }} /></div>
            {/*col*/}
      <div className='flex items-center justify-between'>
        <div className='text-[#9CA1AB] 2xl:text-[0.813vw] text-xs font-normal leading-5 2xl:leading-[1.042vw] italic' style={{ fontFamily: 'Open Sans, sans-serif' }}><p>Target</p></div>
        <div className='text-[#4B586E] 2xl:text-[0.833vw] text-sm font-semibold leading-[24px] 2xl:leading-[1.25vw] 2xl:w-[3.125vw] text-left' style={{ fontFamily: 'Work Sans, sans-serif' }}><span>65.50</span> </div>
      </div>
      {/*col*/}
      <div className='flex items-center justify-between'>
        <div className='text-[#9CA1AB] 2xl:text-[0.813vw] text-xs font-normal leading-5 2xl:leading-[1.042vw] italic' style={{ fontFamily: 'Open Sans, sans-serif' }}><p>Actual</p></div>
        <div className='text-[#4B586E] 2xl:text-[0.833vw] text-sm font-semibold leading-[24px] 2xl:leading-[1.25vw] 2xl:w-[3.125vw] text-left' style={{ fontFamily: 'Work Sans, sans-serif' }}><span> 40.8</span> </div>
      </div>
      {/*col*/}
      <div className='flex items-center justify-between'>
        <div className='text-[#9CA1AB] 2xl:text-[0.813vw] text-xs font-normal leading-5 2xl:leading-[1.042vw] italic' style={{ fontFamily: 'Open Sans, sans-serif' }}><p>LP Var %</p></div>
        <div className='text-[#4B586E] 2xl:text-[0.833vw] text-sm font-semibold leading-[24px] 2xl:leading-[1.25vw] 2xl:w-[3.125vw] text-left flex gap-5 items-center' style={{ fontFamily: 'Work Sans, sans-serif' }}><span>  2.1</span><i className='maid-triangle-up text-[#31C48D] text-[6px]'></i> </div>
      </div>
      {/*col*/}
            </div>
          </div>
          </div>
          {/*Bulk Range*/}
          {/*Functional Range*/}
          <div className='2xl:pt-[1.198vw] pt-[22px] 2xl:pl-[1.302vw] pl-6 2xl:pb-[1.927vw] pb-8 2xl:pr-[0.82vw] pr-3.5 '>
          <div className='text-[#363A44] 2xl:text-[1.042vw] text-lg font-medium leading-5 2xl:leading-[1.042vw]' style={{ fontFamily: 'Work Sans, sans-serif' }}><p>Functional Range</p></div>
          <div className='2xl:mt-[1.667vw] mt-7 grid grid-cols-12'>
            <div className='col-span-6'>
              <img src={FunctionalRange} width={128} height={167} alt='FunctionalRange' className=''/>
            </div>
            <div className='col-span-6'>
            <div className='w-[130px] 2xl:w-[7.525vw] h-[90px] 2xl:h-[6.771vw]'><ReactEcharts option={Gauge} style={{ height: '100%', width: '100%', }} /></div>
            {/*col*/}
      <div className='flex items-center justify-between'>
        <div className='text-[#9CA1AB] 2xl:text-[0.813vw] text-xs font-normal leading-5 2xl:leading-[1.042vw] italic' style={{ fontFamily: 'Open Sans, sans-serif' }}><p>Target</p></div>
        <div className='text-[#4B586E] 2xl:text-[0.833vw] text-sm font-semibold leading-[24px] 2xl:leading-[1.25vw] 2xl:w-[3.125vw] text-left' style={{ fontFamily: 'Work Sans, sans-serif' }}><span>65.50</span> </div>
      </div>
      {/*col*/}
      <div className='flex items-center justify-between'>
        <div className='text-[#9CA1AB] 2xl:text-[0.813vw] text-xs font-normal leading-5 2xl:leading-[1.042vw] italic' style={{ fontFamily: 'Open Sans, sans-serif' }}><p>Actual</p></div>
        <div className='text-[#4B586E] 2xl:text-[0.833vw] text-sm font-semibold leading-[24px] 2xl:leading-[1.25vw] 2xl:w-[3.125vw] text-left' style={{ fontFamily: 'Work Sans, sans-serif' }}><span> 40.8</span> </div>
      </div>
      {/*col*/}
      <div className='flex items-center justify-between'>
        <div className='text-[#9CA1AB] 2xl:text-[0.813vw] text-xs font-normal leading-5 2xl:leading-[1.042vw] italic' style={{ fontFamily: 'Open Sans, sans-serif' }}><p>LP Var %</p></div>
        <div className='text-[#4B586E] 2xl:text-[0.833vw] text-sm font-semibold leading-[24px] 2xl:leading-[1.25vw] 2xl:w-[3.125vw] text-left flex gap-5 items-center' style={{ fontFamily: 'Work Sans, sans-serif' }}><span>  2.1</span><i className='maid-triangle-up text-[#31C48D] text-[6px]'></i> </div>
      </div>
      {/*col*/}
            </div>
          </div>
          </div>
          {/*Functional Range*/}
          {/*Glass Range*/}
          <div className='2xl:pt-[1.198vw] pt-[22px] 2xl:pl-[1.302vw] pl-6 2xl:pb-[1.927vw] pb-8 2xl:pr-[0.82vw] pr-3.5 '>
          <div className='text-[#363A44] 2xl:text-[1.042vw] text-lg font-medium leading-5 2xl:leading-[1.042vw]' style={{ fontFamily: 'Work Sans, sans-serif' }}><p>Glass Range</p></div>
          <div className='2xl:mt-[1.667vw] mt-7 grid grid-cols-12'>
            <div className='col-span-6'>
              <img src={GlassRange} width={128} height={167} alt='FunctionalRange' className=''/>
            </div>
            <div className='col-span-6'>
            <div className='w-[130px] 2xl:w-[7.525vw] h-[90px] 2xl:h-[6.771vw]'><ReactEcharts option={Gauge} style={{ height: '100%', width: '100%', }} /></div>
            {/*col*/}
      <div className='flex items-center justify-between'>
        <div className='text-[#9CA1AB] 2xl:text-[0.813vw] text-xs font-normal leading-5 2xl:leading-[1.042vw] italic' style={{ fontFamily: 'Open Sans, sans-serif' }}><p>Target</p></div>
        <div className='text-[#4B586E] 2xl:text-[0.833vw] text-sm font-semibold leading-[24px] 2xl:leading-[1.25vw] 2xl:w-[3.125vw] text-left' style={{ fontFamily: 'Work Sans, sans-serif' }}><span>65.50</span> </div>
      </div>
      {/*col*/}
      <div className='flex items-center justify-between'>
        <div className='text-[#9CA1AB] 2xl:text-[0.813vw] text-xs font-normal leading-5 2xl:leading-[1.042vw] italic' style={{ fontFamily: 'Open Sans, sans-serif' }}><p>Actual</p></div>
        <div className='text-[#4B586E] 2xl:text-[0.833vw] text-sm font-semibold leading-[24px] 2xl:leading-[1.25vw] 2xl:w-[3.125vw] text-left' style={{ fontFamily: 'Work Sans, sans-serif' }}><span> 40.8</span> </div>
      </div>
      {/*col*/}
      <div className='flex items-center justify-between'>
        <div className='text-[#9CA1AB] 2xl:text-[0.813vw] text-xs font-normal leading-5 2xl:leading-[1.042vw] italic' style={{ fontFamily: 'Open Sans, sans-serif' }}><p>LP Var %</p></div>
        <div className='text-[#4B586E] 2xl:text-[0.833vw] text-sm font-semibold leading-[24px] 2xl:leading-[1.25vw] 2xl:w-[3.125vw] text-left flex gap-5 items-center' style={{ fontFamily: 'Work Sans, sans-serif' }}><span>  2.1</span><i className='maid-triangle-up text-[#31C48D] text-[6px]'></i> </div>
      </div>
      {/*col*/}
            </div>
          </div>
          </div>
          {/*Glass Range*/}
          {/*Regular Range*/}
          <div className='2xl:pt-[1.198vw] pt-[22px] 2xl:pl-[1.302vw] pl-6 2xl:pb-[1.927vw] pb-8 2xl:pr-[0.82vw] pr-3.5 '>
          <div className='text-[#363A44] 2xl:text-[1.042vw] text-lg font-medium leading-5 2xl:leading-[1.042vw]' style={{ fontFamily: 'Work Sans, sans-serif' }}><p>Regular Range</p></div>
          <div className='2xl:mt-[1.667vw] mt-7 grid grid-cols-12'>
            <div className='col-span-6'>
              <img src={RegularRange} width={128} height={167} alt='FunctionalRange' className=''/>
            </div>
            <div className='col-span-6'>
            <div className='w-[130px] 2xl:w-[7.525vw] h-[90px] 2xl:h-[6.771vw]'><ReactEcharts option={Gauge} style={{ height: '100%', width: '100%', }} /></div>
            {/*col*/}
      <div className='flex items-center justify-between'>
        <div className='text-[#9CA1AB] 2xl:text-[0.813vw] text-xs font-normal leading-5 2xl:leading-[1.042vw] italic' style={{ fontFamily: 'Open Sans, sans-serif' }}><p>Target</p></div>
        <div className='text-[#4B586E] 2xl:text-[0.833vw] text-sm font-semibold leading-[24px] 2xl:leading-[1.25vw] 2xl:w-[3.125vw] text-left' style={{ fontFamily: 'Work Sans, sans-serif' }}><span>65.50</span> </div>
      </div>
      {/*col*/}
      <div className='flex items-center justify-between'>
        <div className='text-[#9CA1AB] 2xl:text-[0.813vw] text-xs font-normal leading-5 2xl:leading-[1.042vw] italic' style={{ fontFamily: 'Open Sans, sans-serif' }}><p>Actual</p></div>
        <div className='text-[#4B586E] 2xl:text-[0.833vw] text-sm font-semibold leading-[24px] 2xl:leading-[1.25vw] 2xl:w-[3.125vw] text-left' style={{ fontFamily: 'Work Sans, sans-serif' }}><span> 40.8</span> </div>
      </div>
      {/*col*/}
      <div className='flex items-center justify-between'>
        <div className='text-[#9CA1AB] 2xl:text-[0.813vw] text-xs font-normal leading-5 2xl:leading-[1.042vw] italic' style={{ fontFamily: 'Open Sans, sans-serif' }}><p>LP Var %</p></div>
        <div className='text-[#4B586E] 2xl:text-[0.833vw] text-sm font-semibold leading-[24px] 2xl:leading-[1.25vw] 2xl:w-[3.125vw] text-left flex gap-5 items-center' style={{ fontFamily: 'Work Sans, sans-serif' }}><span>  2.1</span><i className='maid-triangle-up text-[#31C48D] text-[6px]'></i> </div>
      </div>
      {/*col*/}
            </div>
          </div>
          </div>
          {/*Regular Range*/}
        </div>
      </div>
    </>
  )
}
