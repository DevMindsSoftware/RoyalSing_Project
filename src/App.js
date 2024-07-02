import React, { useEffect, useState } from "react";
import "./Comman.css"; // Ensure the correct path to your CSS file
import ScrollingHeader from "./Components/Pages/ScrollingHeader/index";
import Footer from "./Components/Footer/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Pages/Contact";
import Gallery from "./Components/Pages/Gallery";
import Home from "./Components/Home";
import { Switch } from "antd";
import AnimatedCursor from "react-animated-cursor";
import About from "./Components/Pages/About";
import ScrollToTopButton from "./Components/Pages/ScrollToTopButton";
import MapButton from "./Components/Pages/MapButton";
// import Loading from "./Components/Loading";
import CustomCursor from "./Components/Pages/CustomCursor";

function App() {
  const [isBlackBackground, setIsBlackBackground] = useState(true);
  const [buttonText, setButtonText] = useState("White");
  const [loading, setLoading] = useState(true);

  const toggleBackground = () => {
    setIsBlackBackground(!isBlackBackground);
    // Change button text based on isBlackBackground state
    if (isBlackBackground) {
      setButtonText("Black");
    } else {
      setButtonText("White");
    }
  };
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  // useEffect(() => {
  //   // Simulate loading time
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // Adjust the time as needed
  // }, []);

  // if (loading) {
  //   return <Loading />; // Show loading component while loading
  // }
  return (
    <div
      className={`App ${
        isBlackBackground ? "white-background" : "black-background"
      }`}
    >
      <ScrollingHeader />
      <Switch
        defaultChecked={isBlackBackground}
        className={
          isBlackBackground
            ? " toggle-button bg-light"
            : "toggle-button bg-dark"
        }
        onChange={onChange}
        onClick={toggleBackground}
      />
      <div className="devminds-mapbutton">
        <MapButton />
      </div>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={10}
          outerSize={44} 
          // color="255, 147, 1"
          color="0, 0, 1"
          outerAlpha={0.1}
          innerScale={0.7}
          outerScale={1.4}
          showSystemCursor={true}
          trailingSpeed={8}
          innerStyle={{ borderRadius: "50%" }} 
          outerStyle={{
            borderRadius: "50%",
            border: "2px solid rgba(255, 147, 1, 0.3)",
          }} 
        />
      </div>
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
