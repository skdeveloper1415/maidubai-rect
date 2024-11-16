//***** Admin ******** /
import { Routes, Route } from "react-router-dom";
//Common
import PageNotFound from '../pages/404Page';
import Landing from "../pages/landing";

import Charts from "../pages/charts";
import Summary from "../pages/summary";
import Drilldown from "../pages/drilldown";
import Login from "./auth/login";

export default function RouteComponent() {
    return (
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/pages/landing" element={<Landing />} />
     
            <Route path="/pages/charts" element={<Charts />} />
            <Route path="/pages/summary" element={<Summary />} />
            <Route path="/pages/drilldown" element={<Drilldown />} />
            {/* {/ Common /} */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}