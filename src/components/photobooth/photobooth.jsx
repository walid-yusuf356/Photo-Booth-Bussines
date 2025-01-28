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
          <div className="img-section col-lg-6 mt-5">
            <img src={img} alt="" />
          </div>
          <div className="text-content">
            <h1 className="display-5 fw-bold mb-4 mt-5">
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default photobooth;