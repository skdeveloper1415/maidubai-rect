import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './skstyle.css';
import './nstyle.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store'
import { Provider as ReduxProvider } from "react-redux";


// import awsExports from "./aws-exports";
import 'primeicons/primeicons.css';







// DataStore.start();




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
      <BrowserRouter>
        
          <ReduxProvider store={store}>
            <App />
          </ReduxProvider>
        
      </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();