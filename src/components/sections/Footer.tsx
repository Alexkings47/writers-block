import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-div">
        <img
          src={require("../../images/fav.jpg")}
          alt="logo"
          className="footer-logo"
        />
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, dicta!
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
      <small className="copyright">
        &copy;2022 — Talentco. All Rights Reserved.
      </small>
    </StyledFooter>
  );
};
export default Footer;
const StyledFooter = styled.footer`
display: flex;
justify-content: space-between;
align-items: flex-start;
flex-wrap: wrap;
min-height: 15rem;
align-content: space-between ;

.footer-list{
    font-size:13.5px ;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    width: 20%;
}
.footer-logo{
 width  :2rem ;
}
`;
