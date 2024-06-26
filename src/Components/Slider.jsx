import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import pic from "../Assets/Ellipse 232.png";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      autoplay={true}
    >
      <SwiperSlide>
        <div className="review-card">
          <div>
            <p className="rev-name">Gymstory</p>
            <p className="rev-title">
              Kornix is the best digital agency i have <br /> ever seen! Highly
              Recommended!
            </p>
            <p className="comment">
              I recently hired <span className="idea">Ideapeel</span> for a
              custom web development project and couldn't be happier with the
              results. The team was able to bring my unique ideas to life and
              create a website that truly stands out.
            </p>
            <p className="name">Diana Loreza</p>
            <p className="position">
              Director of <span className="gym">Gymstory</span>
            </p>
          </div>
          <div>
            <img src={pic} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="review-card">
          <div>
            <p className="rev-name">Gymstory</p>
            <p className="rev-title">
              Kornix is the best digital agency i have <br /> ever seen! Highly
              Recommended!
            </p>
            <p className="comment">
              I recently hired <span className="idea">Ideapeel</span> for a
              custom web development project and couldn't be happier with the
              results. The team was able to bring my unique ideas to life and
              create a website that truly stands out.
            </p>
            <p className="name">Diana Loreza</p>
            <p className="position">
              Member of <span className="gym">Gymstory</span>
            </p>
          </div>
          <div>
            <img src={pic} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="review-card">
          <div>
            <p className="rev-name">Gymstory</p>
            <p className="rev-title">
              Kornix is the best digital agency i have <br /> ever seen! Highly
              Recommended!
            </p>
            <p className="comment">
              I recently hired <span className="idea">Ideapeel</span> for a
              custom web development project and couldn't be happier with the
              results. The team was able to bring my unique ideas to life and
              create a website that truly stands out.
            </p>
            <p className="name">Diana Loreza</p>
            <p className="position">
              Director of <span className="gym">Gymstory</span>
            </p>
          </div>
          <div>
            <img src={pic} alt="" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
