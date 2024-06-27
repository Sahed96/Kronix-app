import React from "react";
import "./Footer.css";
import call from "../../Assets/icons/Frame (1).png";
import sms from "../../Assets/icons/Frame.png";
import fb from "../../Assets/icons/f.png";
import insta from "../../Assets/icons/Frame (2).png";
import linkedin from "../../Assets/icons/in.png";
import ball from "../../Assets/icons/Frame (3).png";
import line from "../../Assets/Line 6.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-content">
        <div>
          <p className="nav-title">
            Kro<span className="nix">nix</span>
          </p>
          <p className="footext">
            Kornix - the leading digital agency based in the UK, working with
            top-tier clients, from start-ups to enterprises.
          </p>
        </div>
        <div>
          <div className="contact">
            <p>
              <span>
                <img src={sms} alt="" />
              </span>
              info@kronix.com
            </p>
            <p>
              <span>
                <img src={call} alt="" />
              </span>
              (001) 1231 3435
            </p>
          </div>
          <div className="foot-icons">
            <img className="f" src={fb} alt="" />
            <img className="i" src={insta} alt="" />
            <img src={linkedin} alt="" />
            <img src={ball} alt="" />
          </div>
        </div>
      </div>
      <img className="line" src={line} alt="" />
      <div className="bottom">
        <div className="footList">
          <ul>
            <li>Process</li>
            <li>Benefits</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <p>© 2023 shantogfx - All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
