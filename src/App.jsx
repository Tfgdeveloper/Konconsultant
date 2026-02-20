import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Packages from "./pages/Packages";
import TermsandConditions from "./pages/TermsandConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RiskAdvisory from "./pages/RiskAdvisory";
import Assurance from "./pages/Assurance";
import ManagementConsulting from "./pages/ManagementConsulting";
import ScrollManager from "./components/ScrollManager";



function App() {


ReactDOM.createRoot(root).render(
      <BrowserRouter>
        <Header/>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/managementconsulting" element={<ManagementConsulting/>} />
          <Route path="/assurance" element={<Assurance/>} />
          <Route path="/riskadvisory" element={<RiskAdvisory/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsandConditions />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
);
 return (
   <div className="">
      
    </div>
  )
}




export default App;
