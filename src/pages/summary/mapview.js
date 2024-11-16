import React from "react";
// import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import Pointone from '../../assets/images/map-icon/1.png';
import Pointtow from '../../assets/images/map-icon/2.png';
import Pointthree from '../../assets/images/map-icon/3.png';
import Pointfour from '../../assets/images/map-icon/4.png'; 
import Pointfive from '../../assets/images/map-icon/5.png';
import PiechartRevenue from '../../components/charts/salesrevenuepiechart/piechartrevenue'
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

// const MapContainer = dynamic(
//   () => import("react-leaflet").then((module) => module.MapContainer),
//   { ssr: false }
// );
// const TileLayer = dynamic(
//   () => import("react-leaflet").then((module) => module.TileLayer),
//   { ssr: false }
// );
// const Marker = dynamic(
//   () => import("react-leaflet").then((module) => module.Marker),
//   { ssr: false }
// );
// const Popup = dynamic(
//   () => import("react-leaflet").then((module) => module.Popup),
//   { ssr: false }
// );
// const Tooltip = dynamic(
//   () => import("react-leaflet").then((module) => module.Tooltip),
//   { ssr: false }
// );


export default function MapView({ setVisibleRight }) {
  // markers
  const markers = [
    {
      geocode: [48.86, 2.3522],
    },
    {
      geocode: [48.85, 2.3522],
    },
    {
      geocode: [48.87, 2.37],
    },
    {
      geocode: [48.86, 2.37],
    },
    {
      geocode: [48.84, 2.37],
    },
  ];

  const customIcon = new Icon({
    iconUrl: Pointone,
    iconSize: [25, 25],
  });

  const customIcon2 = new Icon({
    iconUrl: Pointtow,
    iconSize: [25, 25],
  });

  const customIcon3 = new Icon({
    iconUrl: Pointthree,
    iconSize: [25, 25],
  });

  const customIcon4 = new Icon({
    iconUrl: Pointfour,
    iconSize: [25, 25],
  });

  const customIcon5 = new Icon({
    iconUrl: Pointfive,
    iconSize: [25, 25],
  });

  const handleMarkerClick = () => {
    setVisibleRight(true);
  };

  return (
    <div>
      <MapContainer
        center={[48.8566, 2.3522]}
        zoom={13}
        className="map-container h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker, index) => (
          <Marker
            key=""
            position={marker.geocode}
            eventHandlers={{ click: handleMarkerClick }}
            icon={
              index === 0 ? customIcon : index === 1 ? customIcon2 : index === 2 ? customIcon3 : index === 3 ? customIcon4 : customIcon5
            }
          >
            <Tooltip sticky>
                <div className="bg-white 2xl:rounded-[0.833vw] rounded-2xl w-full 2xl:space-y-[0.833vw] space-y-4">
                  {/*col*/}
                  <div style={{ fontFamily: 'Inter, sans-serif' }}>
                    <div className="text-[#374151] 2xl:text-[1.25vw] text-xl font-semibold 2xl:leading-[1.25vw] leading-6"><span>POC: Lulu Hypermarket</span></div>
                    <div className="text-[#9CA1AB] 2xl:text-[0.833vw] text-base font-normal 2xl:leading-[1.25vw] leading-6"><span>Lulu Hypermarket, D Ring Road, Doha, Qatar</span></div>
                  </div>
                  <div className="bg-[#F5F6F7] 2xl:py-[0.625vw] py-2.5 px-3.5 2xl:px-[0.833vw] 2xl:rounded-[0.417vw] rounded-lg 2xl:space-y-[0.714vw] space-y-3">
                    <div className="text-[#374151] flex items-center justify-between" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <div className="2xl:text-[0.938vw] text-base font-semibold 2xl:leading-[1.25vw] leading-6">Sales Revenue</div>
                      <div className="2xl:text-[1.25vw] text-xl font-semibold 2xl:leading-[1.25vw] leading-5">$6.5M</div>
                    </div>

                    <div className="w-full h-[200px]"><PiechartRevenue /></div>
                  </div>
                  <div className="grid grid-cols-2 2xl:grid-cols-3 2xl:gap-[0.417vw] gap-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {/*col*/}
                      <div className="bg-[#F5F6F7] 2xl:border-l-[0.208vw] border-l-4 border-[#470C08] rounded-lg 2xl:rounded-[#470C08] 2xl:pl-[0.521vw] pl-2.5 2xl:py-[0.521vw] py-2 2xl:pr-[0.521vw] pr-2 2xl:space-y-[0.208vw] space-y-1">
                        <div className="text-[#374151] text-xs font-normal leading-normal 2xl:text-[0.625vw]"><span>Regular Range</span></div>
                        <div className="flex items-center gap-1 2xl:gap-[0.208vw]">
                          <div className="text-[#374151] 2xl:text-[0.833vw] text-base font-bold"><span>$1.5 M</span></div>
                          <div className="text-[#046C4E] 2xl:text-[0.573vw] text-xs font-normal leading-normal flex items-center gap-0.5 2xl:gap-[0.104vw]"><i className="maid-arrow-circle-up"></i><span>20%</span></div>
                        </div>
                      </div>
                      {/*col*/}
                      <div className="bg-[#F5F6F7] 2xl:border-l-[0.208vw] border-l-4 border-[#9D2017] rounded-lg 2xl:rounded-[#470C08] 2xl:pl-[0.521vw] pl-2.5 2xl:py-[0.521vw] py-2 2xl:pr-[0.521vw] pr-2 2xl:space-y-[0.208vw] space-y-1">
                        <div className="text-[#374151] text-xs font-normal leading-normal 2xl:text-[0.625vw]"><span>Glass Range</span></div>
                        <div className="flex items-center gap-1 2xl:gap-[0.208vw]">
                          <div className="text-[#374151] 2xl:text-[0.833vw] text-base font-bold"><span>$1.4 M</span></div>
                          <div className="text-[#046C4E] 2xl:text-[0.573vw] text-xs font-normal leading-normal flex items-center gap-0.5 2xl:gap-[0.104vw]"><i className="maid-arrow-circle-up"></i><span>20%</span></div>
                        </div>
                      </div>
                      {/*col*/}
                      <div className="bg-[#F5F6F7] 2xl:border-l-[0.208vw] border-l-4 border-[#DA291C] rounded-lg 2xl:rounded-[#470C08] 2xl:pl-[0.521vw] pl-2.5 2xl:py-[0.521vw] py-2 2xl:pr-[0.521vw] pr-2 2xl:space-y-[0.208vw] space-y-1">
                        <div className="text-[#374151] text-xs font-normal leading-normal 2xl:text-[0.625vw]"><span>Functional Range</span></div>
                        <div className="flex items-center gap-1 2xl:gap-[0.208vw]">
                          <div className="text-[#374151] 2xl:text-[0.833vw] text-base font-bold"><span>$1.5M</span></div>
                          <div className="text-[#046C4E] 2xl:text-[0.573vw] text-xs font-normal leading-normal flex items-center gap-0.5 2xl:gap-[0.104vw]"><i className="maid-arrow-circle-up"></i><span>20%</span></div>
                        </div>
                      </div>
                      {/*col*/}
                      <div className="bg-[#F5F6F7] 2xl:border-l-[0.208vw] border-l-4 border-[#FD766C] rounded-lg 2xl:rounded-[#470C08] 2xl:pl-[0.521vw] pl-2.5 2xl:py-[0.521vw] py-2 2xl:pr-[0.521vw] pr-2 2xl:space-y-[0.208vw] space-y-1">
                        <div className="text-[#374151] text-xs font-normal leading-normal 2xl:text-[0.625vw]"><span>Bulk Range</span></div>
                        <div className="flex items-center gap-1 2xl:gap-[0.208vw]">
                          <div className="text-[#374151] 2xl:text-[0.833vw] text-base font-bold"><span>$1.5 M</span></div>
                          <div className="text-[#046C4E] 2xl:text-[0.573vw] text-xs font-normal leading-normal flex items-center gap-0.5 2xl:gap-[0.104vw]"><i className="maid-arrow-circle-up"></i><span>20%</span></div>
                        </div>
                      </div>
                      {/*col*/}
                      <div className="bg-[#F5F6F7] 2xl:border-l-[0.208vw] border-l-4 border-[#FFCCC8] rounded-lg 2xl:rounded-[#470C08] 2xl:pl-[0.521vw] pl-2.5 2xl:py-[0.521vw] py-2 2xl:pr-[0.521vw] pr-2 2xl:space-y-[0.208vw] space-y-1">
                        <div className="text-[#374151] text-xs font-normal leading-normal 2xl:text-[0.625vw]"><span>Other Products</span></div>
                        <div className="flex items-center gap-1 2xl:gap-[0.208vw]">
                          <div className="text-[#374151] 2xl:text-[0.833vw] text-base font-bold"><span>$1.2 M</span></div>
                          <div className="text-[#046C4E] 2xl:text-[0.573vw] text-xs font-normal leading-normal flex items-center gap-0.5 2xl:gap-[0.104vw]"><i className="maid-arrow-circle-up"></i><span>20%</span></div>
                        </div>
                      </div>
                      {/*col*/}
                    </div>
                </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
