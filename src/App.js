import '../src/App.css';

import React, { useEffect } from 'react';
import RouteComponent from './setup/route.component';
import { ToastContainer} from 'react-toastify';
import { useSelector } from 'react-redux';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {

  useEffect(() => {
    AOS.init();
}, [])

  const currentThemeValue = useSelector((state) => state.currentTheme.value);
  const showCurrentTheme = currentThemeValue ==="D" ? "dark" : "light";

  return (
    
    <>
      <RouteComponent />
      <ToastContainer theme={showCurrentTheme} autoClose={1000}  />
    </>

  );
}

export default App;
