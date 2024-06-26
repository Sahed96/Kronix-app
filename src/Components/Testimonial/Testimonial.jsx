import React from "react";
import "./Testimonial.css";

import Slider from "../Slider";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="test-content">
        <p className="head">testimonial</p>
        <h2 className="heading">
          Customer is Our Top <br /> Priority
        </h2>
        <p className="gallery-description">
          We survey all of our clients, the results of which go directly <br />{" "}
          to our CEO.
        </p>
      </div>
      {/* <div className="review-card">
        <div>
          <p className="rev-name">Gymstory</p>
          <p className="rev-title">
            Kornix is the best digital agency i have <br /> ever seen! Highly
            Recommended!
          </p>
          <p className="comment">
            I recently hired <span className="idea">Ideapeel</span> for a custom
            web development project and couldn't be happier with the results.
            The team was able to bring my unique ideas to life and create a
            website that truly stands out.
          </p>
          <p className="name">Diana Loreza</p>
          <p className="position">
            Director of <span className="gym">Gymstory</span>
          </p>
        </div>
        <div>
          <img src={pic} alt="" />
        </div>
      </div> */}
      <Slider />
    </div>
  );
};

export default Testimonial;
