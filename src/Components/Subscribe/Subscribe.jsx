import React from "react";
import "./Subscribe.css";
import hr from "../../Assets/Vector 285.png";
import star10 from "../../Assets/Star 10.png";
import dots from "../../Assets/images/dots.png";
import shoe from "../../Assets/images/shoe.png";
import ful from "../../Assets/images/ful.png";
import doll from "../../Assets/images/doll.png";
import spin from "../../Assets/images/spin.png";
import color from "../../Assets/images/color.png";

const Subscribe = () => {
  return (
    <div className="sub-container">
      <div>
        <p className="sub-head">Clear & Simple Pricing</p>
        <h2 className="sub-title">Simple pricing to level up your brand.</h2>
        <p className="sub-text">
          Senior experts. On-demand requests. Fast <br /> turnarounds. Flat
          monthly fee. Cancel anytime.
        </p>
      </div>
      <div className="sub-cards">
        <div className="price-card">
          <div className="card-head">
            <p>Standard</p>
            <p>
              <button className="popular-btn">Most Popular</button>
            </p>
          </div>
          <p className="card-text">
            One request at a time. For companies who need on-going design
            support.
          </p>
          <img className="hr" src={hr} alt="" />
          <div>
            <p className="amount">$2,995/m</p>
            <p className="note">Pause or cancel anytime</p>
          </div>
          <img className="hr" src={hr} alt="" />
          <div className="card-list">
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              1x active task at a time
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              Unlimited revisions
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              Dedicated project manager
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              Daily comms through Slack
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              Work with senior designers
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              2-3 days turn around time
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              Top tier design
            </p>
          </div>
          <div className="pay-btn">
            <button className="book">Book A Call</button>
            <button className="click">Click to buy</button>
          </div>
        </div>
        <div className="price-card">
          <div className="card-head">
            <p>Growth</p>
            <p>
              <button className="best-btn">Best value</button>
            </p>
          </div>
          <p className="card-text">
            Double the requests. For companies with increasing design needs.
            Limited spots.
          </p>
          <img className="hr" src={hr} alt="" />
          <div>
            <p className="amount">$4,795/m</p>
            <p className="note">Pause or cancel anytime</p>
          </div>
          <img className="hr" src={hr} alt="" />
          <div className="card-list">
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              <span className="hilite">2x active task</span> at a time
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              Unlimited revisions
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              Dedicated project manager
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              Daily comms through Slack
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              Work with senior designers
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              2-3 days turn around time
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              Top tier design
            </p>
          </div>
          <div className="pay-btn">
            <button className="book">Book A Call</button>
            <button className="click">Click to buy</button>
          </div>
        </div>
        <div className="price-card">
          <div className="card-head">
            <p>Basic - Weekly</p>
          </div>
          <p className="card-text">
            Perfect if you want to try the subscription out or only have a few
            one-off tasks.
          </p>
          <img className="hr" src={hr} alt="" />
          <div>
            <p className="amount">$890/m</p>
            <p className="note">Paid per weekly</p>
          </div>
          <img className="hr" src={hr} alt="" />
          <div className="card-list">
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              Fixed Scope of work
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              2 rounds of revisions
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              Dedicated project manager
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              Daily comms through Slack
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              1x designer
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              2-5 days turn around time
            </p>
            <p>
              <a>
                <img className="star10" src={star10} alt="" />
              </a>
              Top tier design
            </p>
          </div>
          <div className="pay-btn">
            <button className="book">Book A Call</button>
            <button className="click">Click to buy</button>
          </div>
        </div>
      </div>
      <div className="news-container">
        <div className="news-content">
          <p className="sub-head">blogs</p>
          <h2 className="sub-title">News & Articles</h2>
          <p className="sub-text">Best Articles to get started</p>
        </div>
        <div className="articles">
          <div className="news-card">
            <div className="news-img">
              <img src={dots} alt="" />
            </div>
            <div>
              <p className="news-head">Branding</p>
              <h3 className="news-title">
                What is the branding,
                <br /> and what we need it?
              </h3>
              <p className="news-text">
                On the other hand, we denounce with <br /> righteous indignation
                and…
              </p>
            </div>
          </div>
          <div className="news-card">
            <div className="news-img">
              <img src={ful} alt="" />
            </div>
            <div>
              <p className="news-head">tiktok</p>
              <h3 className="news-title">
                What is the branding,
                <br /> and what we need it?
              </h3>
              <p className="news-text">
                On the other hand, we denounce with <br /> righteous indignation
                and…
              </p>
            </div>
          </div>
          <div className="news-card">
            <div className="news-img">
              <img src={shoe} alt="" />
            </div>
            <div>
              <p className="news-head">logo design</p>
              <h3 className="news-title">
                What is the branding,
                <br /> and what we need it?
              </h3>
              <p className="news-text">
                On the other hand, we denounce with <br /> righteous indignation
                and…
              </p>
            </div>
          </div>
          <div className="news-card">
            <div className="news-img">
              <img src={spin} alt="" />
            </div>
            <div>
              <p className="news-head">fb</p>
              <h3 className="news-title">
                What is the branding,
                <br /> and what we need it?
              </h3>
              <p className="news-text">
                On the other hand, we denounce with <br /> righteous indignation
                and…
              </p>
            </div>
          </div>
          <div className="news-card">
            <div className="news-img">
              <img src={color} alt="" />
            </div>
            <div>
              <p className="news-head">ai</p>
              <h3 className="news-title">
                What is the branding,
                <br /> and what we need it?
              </h3>
              <p className="news-text">
                On the other hand, we denounce with <br /> righteous indignation
                and…
              </p>
            </div>
          </div>
          <div className="news-card">
            <div className="news-img">
              <img src={doll} alt="" />
            </div>
            <div>
              <p className="news-head">nft</p>
              <h3 className="news-title">
                What is the branding,
                <br /> and what we need it?
              </h3>
              <p className="news-text">
                On the other hand, we denounce with <br /> righteous indignation
                and…
              </p>
            </div>
          </div>
        </div>
        <div>
          <button className="more-btn">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
