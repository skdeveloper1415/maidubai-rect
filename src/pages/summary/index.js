import React from 'react';
import BottleRange from './bottlerange'
import Trendanalysisactualtarget from './trendanalysis'
import PerformanceByDistrict from './performancedistrict'
import Layout from '../../components/common/layout/layout';
import FilterComponentGeospatial from '../../components/filtercomponent/page';
import BottomComponent from '../../components/bottomcomponent';
import AverageSale from './averagesalecomponent/averagesale';
import Customersubchannel from './customersubchannel';
import Ranking from './ranking';
import { ScrollPanel } from 'primereact/scrollpanel';
import DistributionChannel from './distributionchannel';


export default function Summary(props) {
  
  return (
    <>
      <Layout pageTitle="Summary Page" />
      <div className='pl-[130px] pt-[100px] xl:pt-[5.625vw] pr-[30px] xl:pr-[1.083vw] bg-[#F0F2F6] pb-[30px] xl:pb-[60px] 3xl:pb-[3.125vw]'>
        <FilterComponentGeospatial />
        <ScrollPanel className='w-full h-[100px] xl:h-[23.438vw] 2xl:h-[28.125vw]'>
        <div className='2xl:space-y-[1.25vw] space-y-5'>
        <BottleRange />
        <div className='grid grid-cols-12 2xl:gap-[1.25vw] gap-5 h-full'>
          <div className='col-span-12 lg:col-span-7 h-full'>
          <Trendanalysisactualtarget />
          </div>
          {/*col*/}
          <div className='col-span-12 lg:col-span-5 h-full'>
         <Ranking/>
          </div>
          {/*col*/}
        </div>
        {/*grid-cols-12*/}
        <div className='grid grid-cols-12 2xl:gap-[1.25vw] gap-5'>
          <div className='col-span-9'>
          <PerformanceByDistrict />
          </div>
          {/*col*/}
          <div className='col-span-3'>

          <AverageSale/>

          </div>
          {/*col*/}
        </div>
        {/*grid-cols-12*/}
        <div className='grid grid-cols-12'>
        <div className='col-span-12'> <Customersubchannel/></div>
        </div>
    
        <DistributionChannel/>



            </div>
        </ScrollPanel>
      </div>
      <div className='fixed bottom-0'>
        <BottomComponent />
      </div>
    </>
  )
}
