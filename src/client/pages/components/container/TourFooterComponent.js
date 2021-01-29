import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg app-mobile-center">
      <br />
      <br />
      <div className="container ">
        <div className="row">
          <div className="col l5 s12">
            <h1>{PWA_NAME}</h1>
            <p>
              {PWA_NAME} is committed to delivering a superior and convenient
              shopping experience for our customers at a great value.
            </p>
            <br />
            <br />
          </div>
          <div className="col l3 s12">
            <b>INFORMATION</b>
            <p>
              <Link to="/contact.html">Contact</Link>
            </p>
            <p>
              <Link to="/about.html">About Us</Link>
            </p>
            <p>
              <Link to="/about.html">Privacy Policy</Link>
            </p>
            <p>
              <Link to="/about.html">Become a Vendor</Link>
            </p>
            <p>
              <Link to="/about.html">Become a Dispatcher</Link>
            </p>
            <br />
            <br />
          </div>
          <div className="col l4 s12">
            <b>CONTACT INFO</b>
            <p>
              <span className="material-icons notranslate">headset_mic</span>
              Hotline 24/7: +234 803 192 0968
            </p>
            <p>
              PLOT 1015, GWANDAL CENTRE, FRIA CLOSE, ADEMOLA ADETOKUNBO
              CRESCENT, WUSE II, ABUJA.
            </p>
            <p>{MAIL_NAME}</p>
            <br />
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col l4 s12">
            <h2>JOIN OUR NEWSLETTER NOW</h2>
          </div>
          <div className="col l4 s12">
            Join our growing subscribers and get a new discount coupon every
            Wednesdays.
          </div>
          <div className="col l4 s12">
            <form>
              <input type="email" placeholder="your email address" />
              <button type="submit" className="btn">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      <br />

      <div className="bg bg-secondary app-py-3">
        <div className="container">
          Copyright &copy; 2021 {PWA_NAME}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
