import React from "react";
import Audience from "../Pages/Audience/Audience";
import Banner from "../Pages/Banner";
import Commercial from "../Pages/Commercial";
import Feedback from "../Pages/Feedback";
import GwaliaLayout from "../Pages/GwaliaLayout";
import Shopprovides from "../Pages/Shopprovides";
import Signs from "../Pages/Signs/Signs";


function App() {
  return (
    <div>
      <Banner />
      <Audience />
      <Signs />
      <Commercial />
      <Shopprovides />
      <GwaliaLayout />
      <Feedback />
    </div>
  );
}

export default App;
