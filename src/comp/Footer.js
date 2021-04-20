import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div class="d-flex justify-content-center p-5 bg-dark">
      <footer>
        <h3 className="text-center ml-3">
          <Link to="/" className="text-warning">
            YO-CODER
            <span>
              <FaCode className="ml-1 code" />
            </span>
          </Link>
        </h3>
        <Link to="*" className=" ml-4 text-light">
          Terms & Conditions
        </Link>
        <a href="*" className="d-block ml-5 text-light">
          Privacy policy
        </a>
        <div className="mt-3 icons">
          <a href="www.fb.com" className="text-light">
            <FaFacebookF />
          </a>
          <a href="www.whatsapp.com" className="text-light">
            <FaWhatsapp />
          </a>
          <a href="www.instagram.com" className="text-light">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
