import React from "react";
import "./Capabilities.css";
import load from "../../Assets/Group 427320605.png";
import infinity from "../../Assets/icons/inf.png";
import spark from "../../Assets/icons/sprk.png";
import w from "../../Assets/icons/w.png";
import paint from "../../Assets/icons/paint.png";
import calender from "../../Assets/icons/calender.png";
import usd from "../../Assets/icons/usd.png";
import star from "../../Assets/icons/star.png";
import setting from "../../Assets/icons/setting.png";
import doller from "../../Assets/icons/doller.png";

const Capabilities = () => {
  return (
    <div className="capabilities-container">
      <div>
        <p className="heading-title">Our capabilities</p>
        <h2 className="heading-text">We can help you with...</h2>
      </div>
      <div className="btn-container">
        <div className="btn-div1">
          <button>Web design & UI</button>
          <button>Social media visuals</button>
          <button>Infographics</button>
          <button>Design system</button>
          <button>Email design</button>
          <button>Stationery</button>
          <button>Icons</button>
        </div>
        <div className="btn-div2">
          <button>Packaging & merch</button>
          <button>Signage</button>
          <button>Brochures</button>
          <button>Logos & branding</button>
          <button>Digital ads</button>
          <button>Wireframes</button>
        </div>
      </div>
      <p className="load-more">
        <img src={load} alt="" />
      </p>
      <div className="div4">
        <div>
          <p className="p1">BENEFITS</p>
          <p className="p2">
            The design subscription that connects you to your dream team
          </p>
        </div>
        <div>
          <p className="p3">
            A subscription can alleviate the stress of staffing, managing
            expenses, or make design calls like a Creative Director. We partner
            with you to ensure that your design elevates your brand to new
            levels.
          </p>
          <button className="btn3">See Pricing</button>
        </div>
      </div>
      <div className="card-container">
        <div className="card1">
          <img src={infinity} alt="" />
          <h4>1. On-demand requests</h4>
          <p>
            Put all your requests in the design queue in Trello, and we’ll knock
            them out 1 by 1.
          </p>
        </div>
        <div className="card2">
          <img src={spark} alt="" />
          <h4>2. Top-notch quality</h4>
          <p>
            High-end work from a dedicated team of senior designers that's
            always available when you need it.
          </p>
        </div>
        <div className="card3">
          <img src={w} alt="" />
          <h4>3. Powered by - Webflow</h4>
          <p>
            We build every site on Webflow, making them dynamic, accessible, and
            easily scalable. It’s easy for you like Squarespace but better.
          </p>
        </div>
        <div className="card4">
          <img src={paint} alt="" />
          <h4>4. Fast. Responsive. Reliable.</h4>
          <p>
            Get regular updates on your projects and can expect to receive your
            designs within 2-3 days.
          </p>
        </div>
        <div className="card5">
          <img src={calender} alt="" />
          <h4>5. No Lock in contracts</h4>
          <p>
            Pay the same every month, no surprises. You can use it for as long
            as you want and cancel anytime.
          </p>
        </div>
        <div className="card6">
          <img src={usd} alt="" />
          <h4>6. Great value for money</h4>
          <p>
            Get the power of dedicated design team at fraction of the cost of
            full-time employee. ($54k/yr vs. $112k/yr).
          </p>
        </div>
        <div className="card7">
          <img src={setting} alt="" />
          <h4>7. Customized for you</h4>
          <p>
            We design and build custom for you. We’re never starting from a
            template unless you want that? You don't, right?
          </p>
        </div>
        <div className="card8">
          <img src={doller} alt="" />
          <h4>8. Creative paying</h4>
          <p>We’re here when you need us and not on payroll when you don’t.</p>
        </div>
        <div className="card9">
          <img src={star} alt="" />
          <h4>9. Expert turnovers</h4>
          <p>
            You’re getting 10+ years of design experience with every request. No
            hand-holding required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
