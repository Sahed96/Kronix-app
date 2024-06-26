import React from "react";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import Capabilities from "./Capabilities/Capabilities";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Capabilities />
      <Testimonial />
    </div>
  );
};

export default Home;
