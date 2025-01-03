import img from "../../assets/images/gallery/gallery-4.jpg";
import "./photobooth.css";
import { Link } from "react-router-dom";

const photobooth = () => {
  return (
    <section className="py-5 mt-5">
      <div className="container">
        {/* Flex Container for Text and Video */}
        <div className="d-flex flex-column flex-lg-row justify-content-between gap-5">
          {/* Text Content */}
          {/* Img Content */}
          <div className="img-section col-lg-6">
            <img src={img} alt="" />
          </div>
          <div className="text-content">
            <h1 className="display-5 fw-bold mb-4">
              Relive Your <span className="text-danger">Special</span> Moments
            </h1>
            <p className="about-text mb-4">
              Browse through our gallery to see the joy and excitement our
              photobooth brings to every event. From lively celebrations to
              professional gatherings, we make sure every moment is captured
              beautifully.
            </p>

            <Link
              to="/gallery"
              className="btn btn-danger book-now-btn btn-lg fw-bold"
            >
              <span className="text-bold pe-2">See More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
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
              {/* <svg
                aria-hidden="true"
                className="e-font-icon-svg e-far-calendar-alt me-2"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6-5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>
              </svg> */}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default photobooth;
