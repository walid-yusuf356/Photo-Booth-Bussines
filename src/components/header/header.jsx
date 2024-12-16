import logo from "../../assets/images/home/DFC_Logo-1.PNG";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="sticky-top">
      <div className="contact text-center py-2">
        Call us today! (918) 402-5766
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="#">
            <img src={logo} alt="Logo" className="rounded me-2" />
            <span className="brand-text"></span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallary">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Faq">
                  FAQ
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li> */}
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <Link to="/contact"
                  className="btn btn-outline-danger btn-lg"
                  type="submit"
                  style={{ fontWeight: 700, fontSize: "20px" }}
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
