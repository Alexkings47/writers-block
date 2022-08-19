import React from "react";
import styled from "styled-components";
import { GiFeather } from "react-icons/gi";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-top">
        <div className="footer-div">
          {/* <img
            src={require("../../images/fav.jpg")}
            alt="logo"
            className="footer-logo"
          /> */}
          <span className="footer-icon">
            <GiFeather />
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
            dicta!
          </p>
        </div>
        <ul className="footer-list">
          <li>Quick links</li>
          <li>For Companies</li>
          <li>For Talents</li>
          <li>Job Board</li>
        </ul>
        <ul className="footer-list">
          <li>Company</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Testimonials</li>
        </ul>
        <ul className="footer-list">
          <li>support</li>
          <li>Contact Us</li>
          <li>Help Center</li>
          <li>FAQs</li>
        </ul>
      </div>
      <small className="copyright">
        &copy;2022 — Talentco. All Rights Reserved.
      </small>
    </StyledFooter>
  );
};
export default Footer;
const StyledFooter = styled.footer`
  .footer-top {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    justify-content: center;
    border: 1px solid red;
    justify-items: center;
    column-gap: 1.2rem;
    row-gap: 1rem;
    height: 15rem;
    width: 100%;
    font-size: 13.5px;
    text-align: left;
  }
  .footer-list {
    padding: 0 10px;
    text-align: left;
    width: 100%;
    border: 1px solid red;

    li:first-child {
      font-weight: bold;
      font-size: 14px;
      height: 40px;
    }
  }
  .footer-div {
    padding: 0 10px;
    width: 100%;
  }
  .footer-logo {
    width: 3rem;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .footer-icon {
    font-size: 3rem;
    color: var(--lightgreen);
  }
  .copyright {
    /* font-weight: 600; */
    margin-top: 3rem;
    color: gray;
  }
`;
