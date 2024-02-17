import React, { useState, useContext, useEffect } from "react";
import "./base.css";
import NavigationBar from "./Navbar";
import Footer from "./footer";


const BasePage = ({ maincontent }) => {
    
      return (
        <div className="app">
          <NavigationBar />
          <div style={{width:"100%", marginTop:"60px"}}>
            {maincontent}
          </div>
          <Footer/>

        </div>
      );
};

export default BasePage;