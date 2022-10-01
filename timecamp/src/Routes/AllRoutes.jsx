import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Pricing from "./Pricing";
import Automatic from "../Pages/Features/Automatic"
import Feature from "../Pages/Features/Features";
import Invoicing from "../Pages/Features/Invoicing";
import Productivity from "../Pages/Features/Productivity";
import Reporting from "../Pages/Features/Reporting";
import Timesheet from "../Pages/Features/Timesheet";
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"
import TimeSheet from "../Pages/User_Dashboard/TimeSheet";
import Projects from "../Pages/User_Dashboard/Projects";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Automatic" element={<Automatic />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/invoicing" element={<Invoicing />} />
        <Route path="/productivity" element={<Productivity />} />
        <Route path="/reporting" element={<Reporting />} />
        <Route path="/timesheet" element={<Timesheet />} />
        <Route path="/auth/login" element={<Login/>} />
        <Route path="/auth/signup" element={<Signup/>} />
        <Route path="/dashboard/timesheet" element={<TimeSheet/>} />
        <Route path="/dashboard/projects" element={<Projects/>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
