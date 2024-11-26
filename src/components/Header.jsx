import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,faFacebook, faInstagram, faPinterest,faXbox   } from "@fortawesome/free-brands-svg-icons";
import dropDown from "../assets/images/caret-down-solid.svg";
const Header = () => {
  return (
    <>
      <header>
        <div className="logo-section">
          <ul>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faXbox } size="2x" />
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
          </ul>
        </div>
        <div className="header-messages">
          <h1>Fantastic theme! Beautifully designed!</h1>
        </div>
        <div className="nav-item">
          <ul>
            <li>
              <a href="">English</a>
              <a href="">
                <img src={dropDown} alt="Dropdown" />
              </a>
            </li>
            <li>
              <a href="">USD</a>
              <a href="">
                <img src={dropDown} alt="Dropdown" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
