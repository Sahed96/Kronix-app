import React from "react";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import Capabilities from "./Capabilities/Capabilities";
import Testimonial from "./Testimonial/Testimonial";
import Subscribe from "./Subscribe/Subscribe";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Gallery />
      <Capabilities />
      <Testimonial />
      <Subscribe />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
