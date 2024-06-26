import { RiLoaderFill } from "react-icons/ri";
import "./Gallery.css";
import img1 from "../../Assets/images/img1.png";
import img2 from "../../Assets/images/img2.png";
import img3 from "../../Assets/images/img3.png";
import img4 from "../../Assets/images/img4.png";
import img5 from "../../Assets/images/img5.png";
import img6 from "../../Assets/images/img6.png";
import img7 from "../../Assets/images/img7.png";
import img8 from "../../Assets/images/img8.png";
import img9 from "../../Assets/images/img9.png";
import img10 from "../../Assets/images/img10.png";
import img11 from "../../Assets/images/img11.png";
import img12 from "../../Assets/images/img12.png";

const Gallery = () => {
  return (
    <section className="gallery-container">
      <div className="content">
        <h2 className="heading">Our Beautiful Works</h2>
        <p className="gallery-description">
          We help our clients grow their bottom-line with clear and <br />{" "}
          professional websites.
        </p>
        <button className="load-btn">
          <RiLoaderFill className="icon" />
          Load More
        </button>
      </div>
      <div className="img-container">
        <div className="col1">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
        <div className="col2">
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
        <div className="col3">
          <img src={img7} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
        </div>
        <div className="col4">
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
