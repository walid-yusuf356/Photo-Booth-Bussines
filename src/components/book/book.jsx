import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/gallery/gallery-4.jpg";
import "./book.css";

const Book = () => {
  return (
    <div>
      {/* Video Section */}
      <section className="video-section">
        <div
          className="bg-image"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${img1})`,
            height: "500px",
          }}
        >
          <div className="main_book_wrapper container py-5">
            <div className="row min-vh-75 ">
              <div className="col-lg-6 text-white">
                <h5 className="text-white mb-3">
                  Working since 2017
                  <span className="red-line ms-3"></span>
                </h5>
                <h1 className="display-4 fw-bold mb-4">
                  We are leader <br />
                  in Photobooth
                </h1>
                <div className="d-flex align-items-center gap-4">
                  <Link to="/" className="video-btn">
                    <FontAwesomeIcon icon={faPlay} className="play-icon" />
                  </Link>
                  <div className="video-text">
                    <span className="d-block text-white">
                      Watch intro video
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <div className="mb-5 container">
        <section className="appointment-section bg-danger text-white p-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 mb-2 fw-bold">
                  Schedule Your Appointment Today
                </h2>
                <p className="mb-0">
                    We are ready to capture your special moments. Book your
                    appointment today.
                </p>
              </div>
              <div className="col-lg-6 text-lg-end">
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-end gap-3">
                  <a
                    href="tel:9184025766"
                    className="phone-number h3 mb-0 text-decoration-none pe-5"
                  >
                    1800.456.7890
                  </a>
                  <Link
                    to="/contact"
                    className="btn btn-outline-light px-4 py-2 pe-2 fw-bold"
                  >
                    APPOINTMENT
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Book;
