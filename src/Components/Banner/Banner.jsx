import React from "react";
import "./Banner.css";
import Navbar from "../Navbar/Navbar";
import img from "../../Assets/Rectangle 4.png";
import brand from "../../Assets/Brand.png";
import line from "../../Assets/Vector 292.png";
import rocket from "../../Assets/rocket.png";
import pen from "../../Assets/pen.png";
import round from "../../Assets/round.png";

const Banner = () => {
  return (
    <div className="banner-container">
      <Navbar />
      <h1>
        Bringing your <br /> dream into <span className="reality">reality</span>
      </h1>
      <p className="description">
        We increase revenue and ensure sustainable long-term growth <br /> for
        your business through powerful Webflow websites.
      </p>
      <div className="button-div">
        <button className="btn">Book A Meeting</button>
      </div>
      <div className="div3">
        <p>
          <img src={img} alt="" />
        </p>
        <p>TRUSTED BY AMAZING BRANDS</p>
        <p>
          <img src={img} alt="" />
        </p>
      </div>
      <div className="logos">
        <img src={brand} alt="" />
      </div>
      <div className="div4">
        <div>
          <p className="p1">How We Work</p>
          <p className="p2">
            Get a dedicated design team at fraction of the cost.
          </p>
        </div>
        <div>
          <p className="p3">
            Grow your brand with high-quality design for a flat monthly fee.
            Work with senior designers. Subscribe and make as many requests as
            you need - no limits.
          </p>
          <button className="btn3">See Pricing</button>
        </div>
      </div>
      <div className="div5">
        <div>
          <div className="icon-div1">
            <p className="icon1">
              <img src={rocket} alt="" />
            </p>
            <span>
              <img src={line} alt="" />
            </span>
          </div>
          <div className="">
            <p className="p4">Subscribe & get started</p>
            <p className="p5">
              Submit as many design tasks as you need without worrying about
              individual project fees.
            </p>
          </div>
        </div>
        <div>
          <div className="icon-div2">
            <p className="icon2">
              <img src={pen} alt="" />
            </p>
            <span>
              <img src={line} alt="" />
            </span>
          </div>
          <div>
            <p className="p6">Polished designs - on time</p>
            <p className="p7">
              Our designers get to work to deliver your request. Receive your
              design within a few days.
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className="icon3">
              <img src={round} alt="" />
            </p>
          </div>
          <div>
            <p className="p8">Revisions made simple</p>
            <p className="p9">
              Custom designs, prompt replies and as many revisions as you need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
