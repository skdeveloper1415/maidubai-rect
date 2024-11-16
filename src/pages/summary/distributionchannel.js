import React, { useState } from "react";
import ChartWrapper from "../../components/chartwrapper";
import { OrganizationChart } from "primereact/organizationchart";
import orange_logo from "../../assets/images/orange_logo.png";


export default function DistributionChannel() {
    const [selection, setSelection] = useState([]);
  const [data] = useState([
      {
          expanded: true,
          label:
          <div className="flex flex-col items-center justify-center bg-[#FFE3E1] p-[16px] w-[250px] rounded-[8px]">
              <img className="w-[130px] h-[30px]" src={orange_logo} alt="shape" width={120} height={30}/>
                <div className="text-[24px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[1.25vw] text-[#4B586E] font-[600] leading-normal">$40.0 M</div>
                <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">(66.6%)</div>
          </div>,
          children: [
              {
                  expanded: true,
                 
                    label:
                    <div className="p-[16px]">
                        <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">Direct Channels</div>
                        <div className="flex items-center gap-[5px]">
                          <div className="text-[18px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[0.938vw] text-[#4B586E] font-[600] leading-normal">$40.0 M</div>
                          <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">(66.6%)</div>
                        </div>
                    </div>,
                  children: [
                      {
                        label:
                        <div className="p-[16px]">
                            <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">Home & Office</div>
                            <div className="flex items-center gap-[5px]">
                              <div className="text-[18px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[0.938vw] text-[#4B586E] font-[600] leading-normal">$25.0 M</div>
                              <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">(62.5%)</div>
                            </div>
                        </div>,
                      },
                      {
                        label:
                        <div className="p-[16px]">
                            <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">E-Commerce </div>
                            <div className="flex items-center gap-[5px]">
                              <div className="text-[18px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[0.938vw] text-[#4B586E] font-[600] leading-normal">$15.0 M</div>
                              <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">(37.5%)</div>
                            </div>
                        </div>,
                      }
                  ]
              },
              {
                  expanded: true,
                  label:
                  <div className="p-[16px]">
                      <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">Indirect Channelss</div>
                      <div className="flex items-center gap-[5px]">
                        <div className="text-[18px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[0.938vw] text-[#4B586E] font-[600] leading-normal">$20.0 M</div>
                        <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">(33.3%)</div>
                      </div>
                  </div>,
                  children: [
                      {
                        label:
                        <div className="p-[16px]">
                            <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">Retail</div>
                            <div className="flex items-center gap-[5px]">
                              <div className="text-[18px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[0.938vw] text-[#4B586E] font-[600] leading-normal">$5.0 M</div>
                              <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">(25%)</div>
                            </div>
                        </div>,
                      },
                      {
                        label:
                        <div className="p-[16px]">
                            <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">Food Service</div>
                            <div className="flex items-center gap-[5px]">
                              <div className="text-[18px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[0.938vw] text-[#4B586E] font-[600] leading-normal">$5.0 M</div>
                              <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">(25%)</div>
                            </div>
                        </div>,
                      },
                      {
                        label:
                        <div className="p-[16px]">
                            <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">Export</div>
                            <div className="flex items-center gap-[5px]">
                              <div className="text-[18px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[0.938vw] text-[#4B586E] font-[600] leading-normal">$5.0 M</div>
                              <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">(25%)</div>
                            </div>
                        </div>,
                      },
                      {
                        label:
                        <div className="p-[16px]">
                            <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">Scrap</div>
                            <div className="flex items-center gap-[5px]">
                              <div className="text-[18px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[0.938vw] text-[#4B586E] font-[600] leading-normal">$5.0 M</div>
                              <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">(25%)</div>
                            </div>
                        </div>,
                      },
                      {
                        label:
                        <div className="p-[16px]">
                            <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">Stock Transfer</div>
                            <div className="flex items-center gap-[5px]">
                              <div className="text-[18px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[0.938vw] text-[#4B586E] font-[600] leading-normal">$5.0 M</div>
                              <div className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#374151] font-[400] leading-normal">(25%)</div>
                            </div>
                        </div>,
                      },
                  ]
              }
          ]
      }
  ]);
 
const nodeTemplate = (node) => {
  if (node.type === 'person') {
      return (
          <div className="custmain flex flex-col items-center justify-center px-[16px] py-[10px] w-[200px]">
              <div className="flex flex-col items-center justify-center">
                  <img alt={node.data.name} src={node.data.image} className="w-[130px] h-[30px]" />
                  <span className="text-[24px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[1.25vw] text-[#4B586E] font-[600]">{node.data.name}</span>
                  <span className="text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[0.625vw] text-[#4B586E] font-[400]">{node.data.title}</span>
              </div>
          </div>
      );
  }
 
  return node.label;
};
    return (
        <>
            <div className="bg-white border border-[#9CA3AF] rounded-2xl 3xl:rounded-[0.833vw]">
                <ChartWrapper
                    title={"Custmor Sub channel"}
                    classname={'3xl:px-[0.833vw] xl:px-[14px] px-[16px] py-[12px] xl:py-[10px] 3xl:py-[0.625vw] border-b border-b-[#DDE1EA] dark:border-b-[#202227]'}
                    ExportIcon={true}
                    graphIcon={true}
                    FilterIcon={true}
                    data={
                        <>

                            <div className="bg-[#F5F6F7] p-[16px] xl:p-[16px] 3xl:p-[0.833vw] rounded-bl-2xl 3xl:rounded-bl-[0.833vw] rounded-br-2xl 3xl:rounded-br-[0.833vw]">
                             
                            <div className="card overflow-x-auto">
                        <OrganizationChart value={data} selectionMode="multiple" selection={selection} onSelectionChange={(e) => setSelection(e.data)} nodeTemplate={nodeTemplate} />
                    </div>

                            </div>

                        </>
                    }

                />
            </div>
        </>
    )
}
