
'use client'
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Linechart from "./linechart";
import Barchart from "./barchart";
import ChartWrapper from "../../../components/chartwrapper";



function AverageSale

() {

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
  return (
   <>
   <div className="bg-white shadow-md shadow-[#aaa9a9] border border-[#b6b5b5] 3xl:rounded-[0.833vw] rounded-[10px] h-full">

<ChartWrapper
                    title={"Average Sales"}
                    classname={'3xl:px-[0.833vw] xl:px-[14px] px-[16px] py-[12px] xl:py-[10px] 3xl:py-[0.625vw] '}
                    ExportIcon={true}
                    FilterIcon={false}
                    data={

<div className=" bg-[#fff] p-[10px] xl:p-[10px]  3xl:p-[0.729vw] rounded-[10px] ">
<div className="bg-[#F5F6F7]  p-[10px] rounded-[10px] mb-[12px] ">




<div className="col-span-1">
 <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
             placeholder="Revenue" className="w-[120px]  custDropdown  custDropdown2" />
 </div>


    </div>

 <div className="bg-[#F5F6F7]  p-[10px] xl:p-[10px] 3xl:p-[0.729vw] space-y-[14px] xl:space-y-[14px] 3xl:space-y-[14px] rounded-[10px] ">

 <div className='bg-[#fff] py-[14px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[0.885vw] px-[10px] xl:px-[10px] 3xl:px-[0.521vw] rounded-[10px]'>

<div>

</div>
<div className="grid grid-cols-12 gap-3 divide-x">
<div className="col-span-4 flex  flex-row items-center">


    <div className="flex flex-col items-start">
    <div className="text-[#374151] text-[13px] xl:text-[10px] 3xl:text-[0.573vw] flex items-start">
    Monthly Avg.
    </div>
    <div className="text-[#374151] text-[13px] xl:text-[13px] 2xl:text-[18px] 3xl:text-[0.938vw] font-medium flex justify-start">
    $5.45 MN
    </div>
    <div className="flex gap-1 justify-center items-center">
        <div className="text-[#9CA1AB] text-[9px] xl:text-[7px] 2xl:text-[9px] 3xl:text-[0.469vw]">LP Var %</div>
        <div className="bg-[#DEF7EC] text-[#046C4E] py-[4px] px-[7px] rounded-[6px] 2xl:text-[10px] text-[9px] xl:text-[7px] 3xl:text-[0.469vw]">+ 1,89%</div>
    </div>
    </div>

</div>
<div className="col-span-8">
<div className="h-[110px] xl:h-[115px] 2xl:h-[6.25vw] 3xl:h-[5.800vw] ">
<Linechart/>

</div>
</div>
</div>

  </div>
  <div className='bg-[#fff] py-[14px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[0.885vw] px-[10px] xl:px-[10px] 3xl:px-[0.521vw] rounded-[10px]'>

<div className="grid grid-cols-12 gap-3 text-center divide-x">
<div className="col-span-4  flex  flex-row items-center">
    <div className="flex flex-col  items-start">
    <div className="text-[#374151] text-[13px] xl:text-[10px] 3xl:text-[0.573vw] flex items-start">
    Weekly Avg.
    </div>
    <div className="text-[#374151] text-[13px] xl:text-[13px] 2xl:text-[18px] 3xl:text-[0.938vw] font-medium flex justify-start">
    $1.25 MN
    </div>
    <div className="flex gap-1 justify-center items-center">
        <div className="text-[#9CA1AB] text-[9px] xl:text-[7px] 2xl:text-[9px] 3xl:text-[0.469vw]">LP Var %</div>
        <div className="bg-[#DEF7EC] text-[#046C4E] py-[4px] px-[7px] rounded-[6px] 2xl:text-[10px] text-[9px] xl:text-[7px] 3xl:text-[0.469vw]">+ 1,89%</div>
    </div>
    </div>
</div>
<div className="col-span-8">
<div className="h-[110px] xl:h-[115px] 2xl:h-[6.25vw] 3xl:h-[5.800vw] ">
<Barchart/>

</div>
</div>
</div>

  </div>
  <div className='bg-[#fff]  py-[14px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[0.885vw] px-[10px] xl:px-[10px] 3xl:px-[0.521vw] rounded-[10px] '>

<div className="grid grid-cols-12 gap-3 text-center divide-x">
<div className="col-span-4  flex  flex-row items-center">
    <div className="flex flex-col items-start">
    <div className="text-[#374151] text-[13px] xl:text-[10px] 3xl:text-[0.573vw] flex items-start">
    52 Week Rolling
    </div>
    <div className="text-[#374151] text-[13px] xl:text-[13px] 2xl:text-[18px] 3xl:text-[0.938vw] font-medium flex justify-start">
    $1.3 MN
    </div>
    <div className="flex gap-1 justify-center items-center">
        <div className="text-[#9CA1AB] text-[9px] xl:text-[7px] 2xl:text-[9px] 3xl:text-[0.469vw]">LP Var %</div>
        <div className="bg-[#DEF7EC] text-[#046C4E] py-[4px] px-[7px] rounded-[6px] 2xl:text-[10px] text-[9px] xl:text-[7px] 3xl:text-[0.469vw]">+ 1,89%</div>
    </div>
    </div>
</div>
<div className="col-span-8">
<div className="h-[110px] xl:h-[115px] 2xl:h-[6.25vw] 3xl:h-[5.800vw]">
<Barchart/>

</div>
</div>
</div>

  </div>
 </div>
</div>
                    }
   />
   </div>


   </>
  )
}

export default AverageSale
