import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Social Media Section */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-danger">Follow Us</h4>
            <div className="social-links d-flex gap-3">
              <a href="https://www.facebook.com/jarenc" className="social-link">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.linkedin.com/in/jarencollins/"
                className="social-link"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://www.instagram.com/p/C5qzx9uOJAT/"
                className="social-link"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* General Inquiries Section */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-danger">General Inquiries</h4>
            <p>
              <a
                href="tel:9184025766"
                className="text-white text-decoration-none"
              >
                (918) 402-5766
              </a>
              <br />
              <a
                href="mailto:info@jcicreatives.com"
                className="text-white text-decoration-none"
              >
                info@jcicreatives.com
              </a>
            </p>
          </div>

          {/* Hours Section */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-danger">Hours</h4>
            <p>
              Monday — Thursday: 10am — 6pm <br />
              Friday — Sunday: 10am — 8pm
            </p>
          </div>
        </div>

        <hr className="bg-light" />

        {/* Copyright */}
        <div className="row text-center d-flex justify-content-center align-items-center">
          <div className="col-md-6 mb-2">
            <p className="mb-0">
              © Copyright{" "}
              <span className="text-danger fw-bold">Dallas Photobooth </span>{" "}
              {new Date().getFullYear()}. All rights reserved. <br />
              <a href="https://www.Walidyusuf.com">
                <span className="name_text">
                  Designed by{" "}
                  <span className="text-danger fw-bold">Walid Yusuf</span>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
