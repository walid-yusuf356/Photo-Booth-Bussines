import { Link } from "react-router-dom";
import video from "../../assets/videos/about-video.mp4";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function about() {
  return (
    <section className="py-5">
      <div className="container">
        {/* Flex Container for Text and Video */}
        <div className="d-flex flex-column flex-lg-row justify-content-between gap-5">
          {/* Text Content */}
          <div className="text-content">
            <h1 className="welcome">Welcome to our Photobooth</h1>
            <h1 className="display-5 fw-bold mb-4">
              WE ARE THE <span className="text-danger">EXPERTS</span> IN EVENT
              PHOTOGRAPHY!
            </h1>
            <p className="about-text mb-4">
              Our photo booths are perfect for weddings, corporate events,
              birthday parties, and any special gathering. We bring fun,
              creativity, and energy to every event. Capture the joy of your
              guests and create keepsakes they will cherish forever.
            </p>

            <Link
              to="/contact"
              className="btn btn-danger book-now-btn btn-lg fw-bold"
            >
              <FontAwesomeIcon icon={faCamera} className="me-2" />
              <span className="text-bold">About Us</span>
            </Link>
          </div>

          {/* Video Content */}
          <div className="video-section">
            <video src={video} autoPlay loop muted playsInline />
          </div>
        </div>
      </div>
    </section>
  );
}
