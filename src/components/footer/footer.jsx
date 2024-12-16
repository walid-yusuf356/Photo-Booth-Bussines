import "./footer.css";

const footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Brand Section */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">Dallas Photobooth</h4>
            <p>
              Call us today!{" "}
              <a href="tel:9724606616" className="text-white text-decoration-none">
              (918) 402-5766
              </a>
            </p>
          </div>

          {/* General Inquiries Section */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">General Inquiries</h4>
            <p>
              <a href="tel:9184025766" className="text-white text-decoration-none">
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
            <h4 className="fw-bold">Hours</h4>
            <p>
              Monday — Thursday: 10am — 6pm <br />
              Friday — Sunday: 10am — 8pm
            </p>
          </div>
        </div>

        <hr className="bg-light" />

        {/* Social Media & Copyright */}
        <div className="row text-center">
          <div className="col-md-6 mb-2">
            <p className="mb-0">
              © {new Date().getFullYear()} Dallas Photobooth. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center">
              <a
                href="https://facebook.com"
                className="text-white mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-white mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="https://instagram.com"
                className="text-white mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="text-white mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
