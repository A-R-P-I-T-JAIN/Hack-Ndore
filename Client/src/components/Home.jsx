// src/components/Home.js
import React from "react";
import Slider from "./Slider";
import PropertyGallery from "./PropertyGallery";
import Footer from "./Footer";
import About from "./About";
import HomeUpdates from "./HomeUpdates";
import TaxDashboard from "./TaxDashboard";
import ChatIcon from "./ChatIcon";
import Navbar2 from "./Navbar2"



const Home = () => {
  return (
    <div >
      <Navbar2 />
      <Slider />
      <ChatIcon/>
      <PropertyGallery />
      <HomeUpdates />
      <TaxDashboard />
      <About />
      <Footer />
    </div>
  );
};

export default Home;