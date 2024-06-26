import React from "react";
import "./Faq.css";
import arrow from "../../Assets/Icon.png";
import vector from "../../Assets/Vector.png";

const Faq = () => {
  return (
    <div className="faq-container">
      <div className="faq-content">
        <h3 className="faq-title">FAQ's</h3>
        <p className="faq-text">Providing answers to your questions</p>
      </div>
      <div className="accordion-list">
        <ul id="accordion">
          <li>
            <label htmlFor="first">
              Do you have specific princing plans to show?{" "}
              <span className="arrow">
                <img className="acc-logo" src={arrow} alt="" />
              </span>
            </label>
            <input type="radio" name="accordion" id="first" />
            <div className="acc-content">
              <p>
                Donec rutrum, mauris at blandit convallis, orci nulla volutpat
                sapien, id pulvinar leo ligula eget nunc. In quis magna magna.
                Nullam mattis eget.
              </p>
            </div>
          </li>
          <li>
            <label htmlFor="second">
              How many years of experience do you have?{" "}
              <span className="arrow">
                <img className="acc-logo" src={arrow} alt="" />
              </span>
            </label>
            <input type="radio" name="accordion" id="second" />
            <div className="acc-content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium in aperiam eos quis cum porro, nostrum placeat, amet
                recusandae perspiciatis obcaecati asperiores eum magnam
                exercitationem iusto dolore rem sit sapiente.
              </p>
            </div>
          </li>
          <li>
            <label htmlFor="third">
              What companies have you worked with?{" "}
              <span className="arrow">
                <img className="acc-logo" src={arrow} alt="" />
              </span>
            </label>
            <input type="radio" name="accordion" id="third" />
            <div className="acc-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                debitis praesentium voluptate accusantium beatae nisi, incidunt
                excepturi voluptatem, dolor omnis odit? Doloribus deserunt sit
                possimus iste provident asperiores enim suscipit.
              </p>
            </div>
          </li>
          <li>
            <label htmlFor="fourth">
              What companies have you worked with?{" "}
              <span className="arrow">
                <img className="acc-logo" src={arrow} alt="" />
              </span>
            </label>
            <input type="radio" name="accordion" id="fourth" />
            <div className="acc-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                distinctio doloremque quasi sit numquam eius repudiandae eveniet
                odit cumque dolores fugit vitae quam excepturi laudantium, quae
                hic est adipisci magni!
              </p>
            </div>
          </li>
          <textarea
            className="textarea"
            placeholder="Ask us what you want to know..."
          ></textarea>
          <div className="acc-end">
            <p>
              We will answer your questions via email <br /> within 48 hours.
            </p>
            <p>
              <button className="send">Send</button>
            </p>
          </div>
        </ul>
      </div>
      <div className="newsletter">
        <h1 className="letter-head">
          Become part of the <br /> design revolution
        </h1>
        <p className="letter-text">
          Jump on a membership and start <br /> requesting designs right away!
        </p>
        <button className="pricing">
          See Pricing{" "}
          <span>
            <img src={vector} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Faq;
