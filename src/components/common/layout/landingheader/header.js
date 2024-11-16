import React, { useRef, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
// import { IconField } from "primereact/iconfield";
// import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import ProfileImage from "../../../../assets/images/profile-img.png";
import { Menubar } from 'primereact/menubar';
import { OverlayPanel } from 'primereact/overlaypanel';


export default function LandingHeader() {
  const profile = useRef(null);
  const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState('Home'); // Track the active menu item
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            className: activeItem === 'Home' ? 'p-menuitem-active' : '',
            command: () => setActiveItem('Home') // Set active on click
        },
        {
            label: 'Summary',
            icon: 'maid-grid-3',
            command: () => {
              navigate('/pages/summary'); // Navigate to the home page
            }
        },
        
        {
            label: 'Reports',
            icon: 'maid-document'
        },
        {
            label: 'Drilldown Analysis',
            icon: 'pi pi-envelope',
            command: () => {
              navigate('/pages/drilldown'); // Navigate to the home page
            }
        },
        {
            label: 'Price Explorer',
           icon: 'maid-money-send'
        }
    ];
  return (
    <div>
      <div className="w-full">
        <div className="flex gap-[40px] xl:gap-[2.083vw] items-center">
          <div className="relative cursor-pointer" onClick={(e) => profile.current.toggle(e)}>
            <img
              src={ProfileImage}
              alt="Profile"
              width={40}
              height={40}
              className="xl:w-[2.083vw] xl:h-[2.083vw] rounded-full"
            />
            <div className="absolute top-[-10px] right-[-10px]">
              <div className="bg-[#DA291C] rounded-full text-[10px] text-white p-[8px] h-[10px] w-[10px] flex justify-center items-center">
                3
              </div>
            </div>
             </div>
            <OverlayPanel ref={profile} className="profile_popup">
          <div >
            <div className=" flex flex-col gap-4 3xl:gap-[0.833vw] text-sm font-normal leading-[14px] 3xl:text-[0.729vw] 3xl:leading-[0.729vw] p-3 3xl:p-[0.625vw]">
              <Link to='' className="flex items-center gap-2 3xl:gap-[0.208vw] text-[#fff]"><i className="pi pi-user"></i><span>Profile</span></Link>
              <Link to='' className="flex items-center gap-2 3xl:gap-[0.208vw] text-[#fff]"><i className="pi pi-key"></i><span>Change Password</span></Link>
              <button  className="flex items-center gap-2 3xl:gap-[0.208vw] text-[#fff]"
              >
                <i className="pi pi-sign-out" ></i><span>Logout</span></button>
            </div>
          </div>
        </OverlayPanel>
         
          <div className="custom_menu"><Menubar model={items} className="text-[14px] xl:text-[0.729vw] text-white" /></div>
        </div>
      </div>
    </div>
  );
}
