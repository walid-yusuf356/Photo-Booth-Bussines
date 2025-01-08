import "./about.css";
import { Link } from "react-router-dom";
import img from "../../assets/images/about/about_us.png";

function about() {
  return (
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="about-title fw-bold mb-4 display-5 text-center ">
              Why Choose Us?
            </h2>
            <p className="upper_text text-secondary mb-5 text-center lead fs-4">
              We pride ourselves on delivering top-notch photobooth and
              maintenance solutions to cyclists of all levels.
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>
      <div className="container btm-about">
        <div className="row gy-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6">
            <img
              src={img}
              className="img-fluid rounded border border-dark "
              loading="lazy"
              alt="About Us"
              style={{ width: "100%",
              height: "400px"
               }}
            />
          </div>
          <div className="col-12 col-lg-6 col-xxl-6">
            <div className="row justify-content-lg-end justify-content-xxl-around">
              <div className="col-12 col-lg-11 col-xxl-10">
                <div className="card border-0 mb-4">
                  <div className="card-body p-0">
                    <h4 className="card-title mb-3">Modern, Sleek Designs</h4>
                    <ul className="list-unstyled m-0 p-0 d-sm-flex flex-sm-wrap">
                      <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                        <span className="text-danger">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-check-all"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                          </svg>
                        </span>
                        <span>
                          Our photo booths complement any event’s aesthetic
                        </span>
                      </li>
                      <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                        <span className="text-danger">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-check-all"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                          </svg>
                        </span>
                        <span>
                          Perfect for elegant, modern, or themed events
                        </span>
                      </li>
                      <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                        <span className="text-danger">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-check-all"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                          </svg>
                        </span>
                        <span>Add style and charm to every celebration</span>
                      </li>
                      <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                        <span className="text-danger">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-check-all"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                          </svg>
                        </span>
                        <span>Designed to seamlessly blend with any decor</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card border-0 mb-4 mb-xxl-5">
                  <div className="card-body p-0">
                    <h4 className="card-title mb-3">
                      Professional-Quality Photos and Videos
                    </h4>
                    <ul className="list-unstyled m-0 p-0 d-sm-flex flex-sm-wrap">
                      <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                        <span className="text-danger">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-check-all"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                          </svg>
                        </span>
                        <span>high-resolution cameras</span>
                      </li>
                      <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                        <span className="text-danger">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-check-all"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                          </svg>
                        </span>
                        <span>Studio-grade backdrops</span>
                      </li>
                      <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                        <span className="text-danger">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-check-all"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                          </svg>
                        </span>
                        <span>professional lighting</span>
                      </li>
                      <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                        <span className="text-danger">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-check-all"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                          </svg>
                        </span>
                        <span>Moments captured in incredible detail</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="btn btn-danger book-now-btn btn-lg fw-bold"
                >
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg e-far-calendar-alt me-2 mb-2"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6-5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>
                  </svg>
                  <span className="text-bold">Book Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default about;
