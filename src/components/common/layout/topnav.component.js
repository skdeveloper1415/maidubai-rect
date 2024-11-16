import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import chat from '../../../../src/assets/images/chat.svg'
import Notification from '../../../../src/assets/images/notification.svg'
import { ScrollPanel } from 'primereact/scrollpanel';
import { InputText } from "primereact/inputtext";
import { OverlayPanel } from 'primereact/overlaypanel';

export default function TopNav({ pageTitle }){
  const [value, setValue] = useState('');

  const mobover = useRef(null);

  return (
    <div>
      <div className="w-full text-gray-700 bg-white fixed top-0 z-10 py-[20px] xl:py-[1.042vw] pl-[130px] pr-[32px] xl:pr-[1.667vw] shadow1">
        <div className="flex items-center justify-between" data-aos="fade-down" data-aos-duration="800">
          <div className="col space-y-[4px]">
            <div className="flex space-x-[8px] items-center">
              <div className="text-[#9CA1AB] text-[12px] xl:text-[0.729vw] leading-none">
                Home
              </div>
              <i className="maid-arrow-right-big text-[8px] text-[#9CA1AB]"></i>
              <div className="text-[#9CA1AB] text-[12px] xl:text-[0.729vw] leading-none">
                Page 1
              </div>
              <i className="maid-arrow-right-big text-[8px] text-[#9CA1AB]"></i>
              <div className="text-[#374151] text-[12px] xl:text-[0.729vw] leading-none">
                Current Page
              </div>
            </div>
            <div className="text-[#374151] text-[20px] xl:text-[1.25vw] font-semibold leading-[1.2]">
            {pageTitle}
            </div>
          </div>

          <div className="col flex gap-[24px] 3xl:gap-[1.25vw] items-center">
            <div className='relative cust_search '>
              <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder="Quick Search" className="3xl:h-[2.5vw] h-[40px] placeholder:text-[#6C768B] placeholder:text-sm placeholder:font-normal placeholder:leading-5 3xl:placeholder:text-[0.833vw] 3xl:placeholder:leading-[1.042vw] 3xl:w-[17.708vw] w-[240px] pb-4 3xl:py-[1.042vw] pl-4 3xl:pl-[0.833vw] pr-10 3xl:pr-[2.083vw]" />
              <div className="text-[#6C768B] text-xl xl:text-[1.146vw] 3xl:text-[1.25vw] absolute right-4 3xl:right-[1.042vw] inset-y-[20%]"><i className="pi pi-search"></i></div>
            </div>

            <div className="space-x-[44px] xl:space-x-[2.292vw] flex items-center mx-[20px] 3xl:mx-[1.25vw]">
              <Link to="" className="inline-block">
                <img src={chat} alt="" />
              </Link>
              <Link to="" className="inline-block relative" onClick={(e) => mobover.current.toggle(e)}>
                <img src={Notification} alt="" />
                <div className="absolute top-[-20px] right-[-5px]">
                  <i className="pi pi-circle-fill" style={{ fontSize: 4, color: '#D92D20' }}></i></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9FAFB] absolute left-0 right-0 top-[88px] xl:top-[4.583vw] h-full max-h-[112px] xl:max-h-[5.833vw] -z-[1]"></div>

      <OverlayPanel ref={mobover} className="mob_popup" onMouseLeave={() => mobover.current.hide()} onScroll={() => mobover.current.hide()}
 
      >

        <div className="w-[400px] 2xl:w-[20.833vw] rounded">
          <div className="flex justify-between items-center mb-[14px] 2xl:mb-[0.833vw]">
            <div className="text-[20px] 2xl:text-[1.25vw] font-semibold text-[#374151]">Alerts</div>
            <Link to="" ><div className="text-white bg-[#000] rounded-lg p-[8px] text-[12px] 2xl:text-[0.729vw]">Manage Alerts</div></Link>
          </div>
          <div className="text-[#374151] text-[14px] 2xl:text-[0.833vw] mb-[14px] 2xl:mb-[0.833vw]">Recent Alerts</div>
          <ScrollPanel style={{ width: '100%', height: '400px' }}>
          <div className="space-y-[8px] 2xl:space-y-[0.420vw]">
            <div className="border border-[#E5E7EB] bg-white rounded-lg px-[10px] 2xl:px-[0.625vw] py-[8px] 2xl:py-[0.521vw] ">
              <div className="flex justify-between items-center mb-[8px]">
                <div className="text-[12px] 2xl:text-[0.729vw] font-light text-[#374151]">Dubai</div>
                <div className="flex justify-end items-center gap-1 ">
                  <i className="flag-yellow"></i>
                  <i className="view-more"></i>
                </div>
              </div>
              <div className="flex justify-between items-center mb-[8px] text-[#374151] mb-[10px] 2xl:mb-[0.625vw]">
                <div className="text-[12px] 2xl:text-[0.729vw] font-semibold">Sales Variance</div>
                <div className="text-[12px] 2xl:text-[0.729vw] font-light"> Period: MTD </div>
              </div>

              <div className="flex justify-between items-center text-[#374151] bg-[#F5F6F7] p-[10px] p-[0.625vw] rounded-[4px]">
                <div>
                  <div className="text-[10px] 2xl:text-[0.625vw] font-normal">Threshold</div>
                  <div className="text-[12px] 2xl:text-[0.729vw] font-bold">8%</div>
                </div>
                <div className="rounded-full border border-[#E5E7EB] text-[11px] p-1 text-[#9CA1AB] h-6 w-6 flex items-center justify-center">vs</div>
                <div>
                  <div className="text-[10px] 2xl:text-[0.625vw] font-normal">Actual</div>
                  <div className="text-[12px] 2xl:text-[0.729vw] font-bold">10%</div>
                </div>
              </div>
            </div>
            <div className="border border-[#E5E7EB] bg-white rounded-lg px-[10px] 2xl:px-[0.625vw] py-[8px] 2xl:py-[0.521vw] ">
              <div className="flex justify-between items-center mb-[8px]">
                <div className="text-[12px] 2xl:text-[0.729vw] font-light text-[#374151]">Sharjah</div>
                <div className="flex justify-end items-center gap-1 ">
                  <i className="flag-green"></i>
                  <i className="view-more"></i>
                </div>
              </div>
              <div className="flex justify-between items-center mb-[8px] text-[#374151] mb-[10px] 2xl:mb-[0.625vw]">
                <div className="text-[12px] 2xl:text-[0.729vw] font-semibold">Sales Variance</div>
                <div className="text-[12px] 2xl:text-[0.729vw] font-light"> Period: MTD </div>
              </div>

              <div className="flex justify-between items-center text-[#374151] bg-[#F5F6F7] p-[10px] p-[0.625vw] rounded-[4px]">
                <div>
                  <div className="text-[10px] 2xl:text-[0.625vw] font-normal">Threshold</div>
                  <div className="text-[12px] 2xl:text-[0.729vw] font-bold">7%</div>
                </div>
                <div className="rounded-full border border-[#E5E7EB] text-[11px] p-1 text-[#9CA1AB] h-6 w-6 flex items-center justify-center">vs</div>
                <div>
                  <div className="text-[10px] 2xl:text-[0.625vw] font-normal">Actual</div>
                  <div className="text-[12px] 2xl:text-[0.729vw] font-bold">12%</div>
                </div>
              </div>
            </div>
            <div className="border border-[#E5E7EB] bg-white rounded-lg px-[10px] 2xl:px-[0.625vw] py-[8px] 2xl:py-[0.521vw] ">
              <div className="flex justify-between items-center mb-[8px]">
                <div className="text-[12px] 2xl:text-[0.729vw] font-light text-[#374151]">Abu Dhabi</div>
                <div className="flex justify-end items-center gap-1 ">
                  <i className="flag-yellow"></i>
                  <i className="view-more"></i>
                </div>
              </div>
              <div className="flex justify-between items-center mb-[8px] text-[#374151] mb-[10px] 2xl:mb-[0.625vw]">
                <div className="text-[12px] 2xl:text-[0.729vw] font-semibold">Sales Variance</div>
                <div className="text-[12px] 2xl:text-[0.729vw] font-light"> Period: MTD </div>
              </div>

              <div className="flex justify-between items-center text-[#374151] bg-[#F5F6F7] p-[10px] p-[0.625vw] rounded-[4px]">
                <div>
                  <div className="text-[10px] 2xl:text-[0.625vw] font-normal">Threshold</div>
                  <div className="text-[12px] 2xl:text-[0.729vw] font-bold">8%</div>
                </div>
                <div className="rounded-full border border-[#E5E7EB] text-[11px] p-1 text-[#9CA1AB] h-6 w-6 flex items-center justify-center">vs</div>
                <div>
                  <div className="text-[10px] 2xl:text-[0.625vw] font-normal">Actual</div>
                  <div className="text-[12px] 2xl:text-[0.729vw] font-bold">10%</div>
                </div>
              </div>
            </div>
            <div className="border border-[#E5E7EB] bg-white rounded-lg px-[10px] 2xl:px-[0.625vw] py-[8px] 2xl:py-[0.521vw] ">
              <div className="flex justify-between items-center mb-[8px]">
                <div className="text-[12px] 2xl:text-[0.729vw] font-light text-[#374151]">Ajman</div>
                <div className="flex justify-end items-center gap-1 ">
                  <i className="flag-green"></i>
                  <i className="view-more"></i>
                </div>
              </div>
              <div className="flex justify-between items-center mb-[8px] text-[#374151] mb-[10px] 2xl:mb-[0.625vw]">
                <div className="text-[12px] 2xl:text-[0.729vw] font-semibold">Sales Variance</div>
                <div className="text-[12px] 2xl:text-[0.729vw] font-light"> Period: MTD </div>
              </div>

              <div className="flex justify-between items-center text-[#374151] bg-[#F5F6F7] p-[10px] p-[0.625vw] rounded-[4px]">
                <div>
                  <div className="text-[10px] 2xl:text-[0.625vw] font-normal">Threshold</div>
                  <div className="text-[12px] 2xl:text-[0.729vw] font-bold">8%</div>
                </div>
                <div className="rounded-full border border-[#E5E7EB] text-[11px] p-1 text-[#9CA1AB] h-6 w-6 flex items-center justify-center">vs</div>
                <div>
                  <div className="text-[10px] 2xl:text-[0.625vw] font-normal">Actual</div>
                  <div className="text-[12px] 2xl:text-[0.729vw] font-bold">10%</div>
                </div>
              </div>
            </div>
          </div>
          </ScrollPanel>
        </div>
      </OverlayPanel>

    </div>
  );
}