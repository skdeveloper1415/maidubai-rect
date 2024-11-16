import { Link, useNavigate } from "react-router-dom";
import { React, useState } from "react";
import SimpleBar from "simplebar-react";
import { Button } from 'primereact/button';
import "simplebar-react/dist/simplebar.min.css";
import LogoIcon from '../../../../src/assets/images/left-menu-icons/Logo-small.svg'
import Logo from '../../../../src/assets/images/left-menu-icons/Logo-big.svg'
import Executive from '../../../../src/assets/images/left-menu-icons/exe.svg'
import Profile from '../../../../src/assets/images/left-menu-icons/user.svg'
import UserProfile from '../../../../src/assets/images/left-menu-icons/profile.svg'



export default function LeftSideBar() {
  



  const [activate, setActivate] = useState("");
  const toggleActive = () => {
    setActivate(activate === "active" ? "" : "active");
  };

  return (
    // < !--Sidebar -- >
    <div className="fixed top-0 left-0 z-[9999] max-md:h-full left-menu-mobile-H">
      <div className="w-[96px] lg:hover:w-[280px] bg-white shadow-[0px_24px_48px_-12px_rgba(16,24,40,0.25)] left-menu-h py-4 2xl:py-6 px-4 overflow-hidden max-md:h-full left-menu-mobile" id={activate}>

        <div className="relative h-full">
          <div className="logo_icon pl-2 mb-4" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
            <img src={LogoIcon} alt="logo icon" />
          </div>
          <div className="logo min-w-[222px] pl-2 mb-4">
            <Link to={''}>
              <img src={Logo} alt="logo icon" />
            </Link>
          </div>

          <SimpleBar style={{ maxHeight: "100%", height: "calc(100%)" }}>
            <div data-simplebar>
              <div className="visible lg:hidden">
                <Button icon="pi pi-bars" onClick={toggleActive} style={{ color: '#8F91AD', background: '#FFF', border: '0', padding: '10px', marginLeft: '10px' }}></Button></div>
              <ul className="left-menu h-full">
                <li className="divide"></li>
                <li className="dashboard">
                  <Link to={'/pages/landing'}>
                    <span>Home</span>
                  </Link>
                </li>
                <li className="summary">
                  <Link to={'/pages/summary'}>
                    <span>Summary</span>
                  </Link>
                </li>
                <li className="businessinsights">
                  <Link to={''}>
                    <span>Business Insight</span>
                  </Link>
                </li>

                <li className="priceexplorer">
                  <Link to={''}>
                    <span>Price Explorer</span>
                  </Link>
                </li>
                <li className="drilldown">
                  <Link to={'/pages/drilldown'}>
                    <span>Drilldown Analysis</span>
                  </Link>
                </li>
                <li className="map">
                  <Link to={''}>
                    <span>Geospatial Analysis</span>
                  </Link>
                </li>
                <li className="reports">
                  <Link to={''}>
                    <span>Reports</span>
                  </Link>
                </li>
                <li className="alerts">
                  <Link to={''}>
                    <span>Manage Alerts</span>
                  </Link>
                </li>
              </ul>
            </div>
          </SimpleBar>
          <div className="absolute left-0 right-0 bottom-0">
            <ul className="left-menu hoverNone">
              <li className="divide pb-3"></li>
              <li className="settings">
                <Link to={''}>
                  <span>Settings</span>
                </Link>
              </li>
              <li className="darkMode pb-2">
                <Link to={''}>
                  <span>Dark Theme</span>
                </Link>
              </li>
              <li className="divide pb-5"></li>
              <li className="userProfile relative">
                <div className="flex items-center ">
                  <div className="userPic relative">
                    <div className="absolute right-[-5px] top-[-5px] bg-[#D96B1C] w-5 h-5 rounded-full flex items-center justify-center text-[8px] text-white">3</div>
                    <img
                      src={Profile}
                      width={"48"}
                      height={"48"}
                      alt=""
                    />
                  </div>
                  <div>
                    <Link to={''}>
                      <span className="text-[#4C525F] text-[12px] xl:text-[0.729vw] font-semibold block">
                        Jhon Nassir Jr.
                      </span>
                      <span className="text-[#374151] text-[11px] xl:text-[0.629vw] block executepic">
                        <img src={Executive} alt="" />
                        Executive
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 userprofileIcon">
                  <Link to='#'>
                    <img src={UserProfile} alt="" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
