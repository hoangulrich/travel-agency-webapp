import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTypo3,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Join the Adventure newsletter to receive our best vacation deals
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe at anytime.
          </p>
          <div className="input-areas">
            <form>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="footer-input"
              />
              <Button buttonStyle="btn--outline">Subscribe</Button>
            </form>
          </div>
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to="/sign-up">How it works</Link>
              <Link to="/sign-up">Testimonials</Link>
              <Link to="/sign-up">Careers</Link>
              <Link to="/sign-up">Terms of Service</Link>
            </div>
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <Link to="/sign-up">Contact</Link>
              <Link to="/sign-up">Support</Link>
              <Link to="/sign-up">Destinations</Link>
              <Link to="/sign-up">Sponsorships</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Videos</h2>
              <Link to="/sign-up">Submit Video</Link>
              <Link to="/sign-up">Ambassadors</Link>
              <Link to="/sign-up">Agency</Link>
              <Link to="/sign-up">Influencer</Link>
            </div>
            <div className="footer-link-items">
              <h2>Social Media</h2>
              <Link to="/sign-up">Facebook</Link>
              <Link to="/sign-up">Instagram</Link>
              <Link to="/sign-up">Twitter</Link>
              <Link to="/sign-up">Youtube</Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link className="social-logo">
                TRIPPY <FaTypo3 className="iconLogo" />
              </Link>
            </div>
            <small className="website-rights">TRIPPY © 2020</small>
            <div className="social-icons">
              <Link
                className="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook className="iconFb" />
              </Link>
              <Link
                className="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram className="iconIns" />
              </Link>
              <Link
                className="social-icon-link Youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube className="iconYt" />
              </Link>
              <Link
                className="social-icon-link Twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter className="iconTwt" />
              </Link>
              <Link
                className="social-icon-link linkedin"
                to="/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin className="iconLi" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
