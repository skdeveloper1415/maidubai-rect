import React from 'react';
import LeftSideBar from './leftnav.component';
import TopNav from './topnav.component';


export default function Layout({...pageProps}) {
    return (
        // < !--Sidebar -- >
        <div>
            <div className="area"></div>

            <LeftSideBar /> 
             <TopNav pageTitle={pageProps.pageTitle} />

          
        </div>
    )
}