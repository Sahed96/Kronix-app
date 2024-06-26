import React from "react";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import Capabilities from "./Capabilities/Capabilities";
import Testimonial from "./Testimonial/Testimonial";
import Subscribe from "./Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Capabilities />
      <Testimonial />
      <Subscribe />
    </div>
  );
};

export default Home;
