import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";


function App() {


ReactDOM.createRoot(root).render(
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
);
 return (
   <div className="">
      
    </div>
  )
}




export default App;
