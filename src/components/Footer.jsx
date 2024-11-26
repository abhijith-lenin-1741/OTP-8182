import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top-section">
          <div className="first-item">
            <h1>
              <img
                src="https://gecko5.myshopify.com/cdn/shop/files/footer-logo_200x.png?v=1613712736"
                alt="logo"
              />
            </h1>
            <ul className="listing-section">
              <li className="address">
                <a href="">184 Main Rd E, St Albans VIC 3021, Australia</a>
              </li>
              <li>
                <a href="">contact@company.com</a>
              </li>
              <li>
                <a href=""> +001 2233 456</a>
              </li>
              {/* <li>
              <a href=""></a>
            </li> */}
            </ul>
          </div>
          <div>
            <h1>CATEGORIES</h1>
            <ul className="listing-section">
              <li>
                <a href="">Men</a>
              </li>
              <li>
                <a href="">Women</a>
              </li>
              <li>
                <a href="">Accessories</a>
              </li>
              <li>
                <a href="">Shoes</a>
              </li>
              <li>
                <a href="">Denim</a>
              </li>
              <li>
                <a href="">Dress</a>
              </li>
            </ul>
          </div>
          <div>
            <h1>INFOMATION</h1>
            <ul className="listing-section">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Returns & Exchanges</a>
              </li>
              <li>
                <a href="">Shipping & Delivery</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h1>USEFUL LINKS</h1>
            <ul className="listing-section">
              <li>
                <a href="">Store Location</a>
              </li>
              <li>
                <a href="">Latest News</a>
              </li>
              <li>
                <a href="">My Account</a>
              </li>
              <li>
                <a href="">Size Guide</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
            </ul>
          </div>
          <div>
            <h1>NEWSLETTER SIGNUP</h1>
            <p>
              Subscribe to our newsletter and get 10% off your first purchase
            </p>
            <div className="enquiry-section">
            <input type="text" placeholder="your email address" />
            <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="items">
          <div className="left">
            <p>Copyright © 2024 Gecko all rights reserved. Powered by The4</p>
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
