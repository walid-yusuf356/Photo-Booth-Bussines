import logo from "../../assets/images/home/header_logo.png";
import { Link } from "react-router-dom";
import "./header.css";

const header = () => {
  return (
    <section>
        <div className="contact text-center py-4">
            Call us today! (918) 402-5766
        </div>
      <nav className="main_header_wrapper navbar navbar-expand-lg pt-3">
        <div className="container">
          <Link className="logo rounded navbar-brand d-flex align-items-center gap-3" to="#">
            <img src={logo} alt="" className="rounded" />
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
            className="collapse navbar-collapse justify-content-end "
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Gallary
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Faq">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item nav-link" >
                <button className="btn btn-danger btn-lg p-2" type="submit">
                  Instant Quotes
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default header;
