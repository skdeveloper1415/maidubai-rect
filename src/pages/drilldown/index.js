import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import Layout from "../../components/common/layout/layout";
import FilterComponentGeospatial from "../../components/filtercomponent/page";
import { DrillDownChart } from "../../components/charts/DrillDownChart";

export default function Drilldown() {
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLevel1, setSelectedLevel1] = useState(null);
  const [selectedLevel2, setSelectedLevel2] = useState(null);
  const [selectedLevel3, setSelectedLevel3] = useState(null);
  const [selectedLevel4, setSelectedLevel4] = useState(null);

  const Metric = [
    { name: "Billed Quantity (Units)", code: "NY" },
    { name: "Billed Quantity - Contribution (%)", code: "RM" },
    { name: "Sales ($)", code: "LDN" },
    { name: "Sales - Contribution (%)", code: "IST" },
    { name: "Total Rebate Amount", code: "PRS" },
    { name: "Gross Margin ($)", code: "PRS" },
    { name: "Average Price per Unit", code: "PRS" },
  ];

  const Level1 = [
    { name: "Months", code: "NY" },
    { name: "Weeks", code: "RM" },
    { name: "Sales Districts", code: "LDN" },
    { name: "Customer Group", code: "IST" },
    { name: "Customer Type", code: "PRS" },
    { name: "Customer", code: "PRS" },
    { name: "Order Source", code: "PRS" },
    { name: "Sales Order Type", code: "PRS" },
    { name: "Distribution Channel", code: "PRS" },
    { name: "Material Type", code: "PRS" },
    { name: "Material Product Group", code: "PRS" },
    { name: "MPN", code: "PRS" },
    { name: "Billing Types", code: "PRS" },
    { name: "Customer Sub-Channel", code: "PRS" },
    { name: "Material Group 1", code: "PRS" },
    { name: "Material Group 2", code: "PRS" },
  ];
  

  return (
    <div>
      <Layout pageTitle="Drilldown Analysis" />
      <div className="pl-[130px] pt-[100px] xl:pt-[5.625vw] pr-[30px] xl:pr-[1.083vw] bg-[#F9FAFB]">
        <FilterComponentGeospatial />
        <div className="xl:mt-[0.833vw] mt-[16px]">
          <div className="grid grid-cols-12 gap-[24px] xL:gap-[1.250vw]">
            <div className="xl:col-span-2 col-span-12">
              <div className="bg-white h-full dark:bg-[#191A1E] p-[16px] xl:p-[0.833vw] xl:rounded-[0.417vw] rounded-[8px]">
                <div className="xl:mb-[1.250vw] mb-[24px] ">
                  <label
                    for="name"
                    className="text-[#374151] text-[14px] xl:text-[0.833vw] font-medium dark:text-[#FFFFFF] "
                  >
                    Select Metric
                  </label>
                  <Dropdown
                    value={selectedModule}
                    onChange={(e) => setSelectedModule(e.value)}
                    options={Metric}
                    optionLabel="name"
                    placeholder="Billed Quantity (Units)"
                    className="w-full xl:mt-[0.417vw] mt-[8px] custBgColor"
                    panelClassName="custDropdown"
                  />
                </div>
                <div className="xl:mb-[1.250vw] mb-[24px] ">
                  <label
                    for="name"
                    className="text-[#374151] text-[14px] xl:text-[0.833vw] font-medium dark:text-[#fff] "
                  >
                    Level 1
                  </label>
                  <Dropdown
                    value={selectedMetric}
                    onChange={(e) => setSelectedLevel1(e.value)}
                    options={Level1}
                    optionLabel="name"
                    placeholder="Month"
                    className="w-full xl:mt-[0.417vw] mt-[8px] custBgColor"
                    panelClassName="custDropdown"
                  />
                </div>
                <div className="xl:mb-[1.250vw] mb-[24px] ">
                  <label
                    for="name"
                    className="text-[#374151] text-[14px] xl:text-[0.833vw] font-medium dark:text-[#fff] "
                  >
                    Level 2
                  </label>
                  <Dropdown
                    value={selectedLevel1}
                    onChange={(e) => setSelectedLevel1(e.value)}
                    options={Metric}
                    optionLabel="name"
                    placeholder="Week"
                    className="w-full xl:mt-[0.417vw] mt-[8px] custBgColor"
                    panelClassName="custDropdown"
                  />
                </div>
                <div className="xl:mb-[1.250vw] mb-[24px] ">
                  <label
                    for="name"
                    className="text-[#374151] text-[14px] xl:text-[0.833vw] font-medium dark:text-[#fff] "
                  >
                    Level 3
                  </label>
                  <Dropdown
                    value={selectedLevel2}
                    onChange={(e) => setSelectedLevel2(e.value)}
                    options={Metric}
                    optionLabel="name"
                    placeholder="Sales District"
                    className="w-full xl:mt-[0.417vw] mt-[8px] custBgColor"
                    panelClassName="custDropdown"
                  />
                </div>
                <div className="xl:mb-[1.250vw] mb-[24px] ">
                  <label
                    for="name"
                    className="text-[#374151] text-[14px] xl:text-[0.833vw] font-medium dark:text-[#fff] "
                  >
                    Level 4
                  </label>
                  <Dropdown
                    value={selectedLevel3}
                    onChange={(e) => setSelectedLevel3(e.value)}
                    options={Metric}
                    optionLabel="name"
                    placeholder="Customer Group"
                    className="w-full xl:mt-[0.417vw] mt-[8px] custBgColor"
                    panelClassName="custDropdown"
                  />
                </div>
                <div className="xl:mb-[1.250vw] mb-[24px] ">
                  <label
                    for="name"
                    className="text-[#374151] text-[14px] xl:text-[0.833vw] font-medium dark:text-[#fff] "
                  >
                    Level 5
                  </label>
                  <Dropdown
                    value={selectedLevel4}
                    onChange={(e) => setSelectedLevel4(e.value)}
                    options={Metric}
                    optionLabel="name"
                    placeholder="Material Type"
                    className="w-full xl:mt-[0.417vw] mt-[8px] custBgColor"
                    panelClassName="custDropdown"
                  />
                </div>
                <div className="">
                  <Link
                    to="/"
                    className="bg-[#1F2A37] text-white block text-center p-[8px] xl:p-[0.417vw] rounded-[4px] xl:rounded-[0.208vw]"
                    title="Add Levels"
                  >
                    <i className="maid-plus mr-[10px] xl:mr-[0.521vw]"></i> Add
                    Levels
                  </Link>
                </div>
              </div>
            </div>
            <div className="xl:col-span-10 col-span-12">
              <div className="bg-white dark:bg-[#191A1E] p-[20px] xl:p-[1.042vw] xl:rounded-[0.417vw] rounded-[8px]">
                <div className="">
                    <DrillDownChart />
                </div>
                 <div className="xl:py-[0.521vw] py-[10px] xl:px-[0.833vw] px-[16px] rounded-[8px] xl:rounded-[0.417vw] bg-[#F6F7F9] dark:bg-[#24262D] relative top-[-100px] block mt-[100px] xl:mt-[5.208vw]">
                    <div className="absolute right-[14px] xl:right-[0.729vw] top-[8px] xl:top-[0.417vw]">
                        <Link to={""} className="inline-flex items-center justify-center bg-[#E4E7E9] inline-block w-[22px] h-[22px] rounded-[4px]">
                            <i className="maid-settings text-[12px] xl:text-[0.625vw]"></i>
                        </Link>
                    </div>
                  <div className="text-[#4B586E] dark:text-[#FFFFFF] block text-[14px] xl:text-[0.729vw] font-normal">
                    Applied Dimensions
                  </div>
                  <div className="flex gap-[16px] xl:gap-[0.833vw] xl:mt-[0.417vw] mt-[8px] items-center">
                    <div>
                      <div className="text-[#4B586E] dark:text-[#FFFFFF] text-[11px] xl:text-[0.573vw] font-normal leading-4">
                        Level 1
                      </div>
                      <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium  dark:text-[#FFFFFF]">
                        Month
                      </div>
                    </div>
                    <i className="maid-arrow-right-smal text-[9px]"></i>
                    <div>
                      <div className="text-[#4B586E] text-[11px] xl:text-[0.573vw] font-normal leading-4 dark:text-[#FFFFFF]">
                        Level 2
                      </div>
                      <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium  dark:text-[#FFFFFF]">
                      Week
                      </div>
                    </div>
                    <i className="maid-arrow-right-smal text-[9px]"></i>
                    <div>
                      <div className="text-[#4B586E] text-[11px] xl:text-[0.573vw] font-normal leading-4 dark:text-[#FFFFFF]">
                      Level 3
                      </div>
                      <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium  dark:text-[#FFFFFF]">
                      Sales District
                      </div>
                    </div>
                    <i className="maid-arrow-right-smal text-[9px]"></i>
                    <div>
                      <div className="text-[#4B586E] text-[11px] xl:text-[0.573vw] font-normal leading-4 dark:text-[#FFFFFF]">
                      Level 4
                      </div>
                      <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium  dark:text-[#FFFFFF]">
                      Customer Group
                      </div>
                    </div>
                    <i className="maid-arrow-right-smal text-[9px]"></i>
                    <div>
                      <div className="text-[#4B586E] text-[11px] xl:text-[0.573vw] font-normal leading-4 dark:text-[#FFFFFF]">
                      Level 5
                      </div>
                      <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium  dark:text-[#FFFFFF]">
                      Material Type
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
