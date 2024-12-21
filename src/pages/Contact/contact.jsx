import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs
      .sendForm(
        "service_kvrugkb",
        "template_ftpcwif",
        form.current,
        "pvYCUd5qV8UVNMw8t" // Ensure this matches your public key
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Message failed to send. Please try again later.");
        }
      );
  };

  return (
    <div>
      <section className="mt-5">
        <div className="bg-light py-5">
          <div className="container">
            <div className="d-flex justify-content-between">
              <h1 className="fw-bold">Contact Us</h1>
            </div>
          </div>
        </div>
      </section>

      <main>
        <div className="container py-5">
          <div className="row g-5">
            {/* Contact Information Block */}
            <div className="col-xl-6">
              <div className="row row-cols-md-2 g-4">
                <div
                  className="aos-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="aos-item__inner">
                    <div className="bg-light contact-box d-block p-3">
                      <div className="d-flex justify-content-start">
                        <i className="fa-solid fa-envelope h3 pe-2"></i>
                        <span className="h5">Email</span>
                      </div>
                      <span>info@jcicreatives.com</span>
                    </div>
                  </div>
                </div>
                <div
                  className="aos-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="aos-item__inner">
                    <div className="bg-light contact-box d-block p-3">
                      <div className="d-flex justify-content-start">
                        <i className="fa-solid fa-phone h3 pe-2"></i>
                        <span className="h5">Phone Number</span>
                      </div>
                      <span>(918) 402-5766</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="aos-item mt-4"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="aos-item__inner">
                  <div className="bg-light contact-box d-block p-3">
                    <div className="d-flex justify-content-start">
                      <i className="fa-solid fa-location-pin h3 pe-2"></i>
                      <span className="h5">Office Location</span>
                    </div>
                    <span>Dallas, TX</span>
                  </div>
                </div>
              </div>
              <div className="aos-item" data-aos="fade-up" data-aos-delay="800">
                <div className="mt-4 w-100 aos-item__inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214586.97537118566!2d-96.89636016472886!3d32.820845125463244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1733379203648!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form Block */}
            <div className="col-xl-6">
              <h2 className="pb-4">Leave a Message</h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row g-4">
                  <div className="col-6 mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="first_name"
                      className="form-control"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="last_name"
                      className="form-control"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="+1234567890"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="eventName" className="form-label">
                    Event Name
                  </label>
                  <input
                    id="eventName"
                    type="text"
                    name="event_name"
                    className="form-control"
                    placeholder="Wedding, Birthday, etc."
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">
                    Event Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    className="form-control"
                    placeholder="City, State"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Event Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="photoBooth" className="form-label">
                    Which Photo Booth Would You Like?
                  </label>
                  <select
                    id="photoBooth"
                    name="photo_booth"
                    className="form-select"
                    required
                  >
                    <option value="Standard">Standard</option>
                    <option value="Roaming">Roaming</option>
                    <option value="360 Spin">360 Spin</option>
                  </select>
                </div>
                {/* Add Hidden Input for the Company Name */}
                <input
                  type="hidden"
                  name="company_name"
                  value="Dallas_Photobooth"
                />

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="3"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-lg btn-danger book-now-btn fw-bold">
                  Send Request
                </button>

              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
