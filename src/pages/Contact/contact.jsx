'use client'

import { useRef } from "react"
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2"
import "./contact.css"

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          // sweat alert here
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
        }
      )
      .catch(
        () => {
          // sweat alert here
          Swal.fire({
            title: "Oops...",
            text: "Something went wrong!",
            icon: "error"
          });
        }
      );
    form.current.reset()

  };

  return (
    <div>
      <section className="upper_title d-flex align-items-center justify-content-center">
        <h1 className="book_txt fw-bold text-danger">Book Now</h1>
      </section>

      <div className="container py-5">
        <div className="row g-5">
          {/* Contact Information Block */}
          <div className="col-lg-6">
            {/* Email and Phone in same row */}
            <div className="d-flex flex-column flex-md-row gap-3">
              <div className="contact-box flex-grow-1">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa-solid fa-envelope h3 me-2"></i>
                  <h3 className="h5 mb-0">Email</h3>
                </div>
                <p className="mb-0">info@jcicreatives.com</p>
              </div>
              
              <div className="contact-box flex-grow-1">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa-solid fa-phone h3 me-2"></i>
                  <h3 className="h5 mb-0">Phone Number</h3>
                </div>
                <p className="mb-0">(918) 402-5766</p>
              </div>
            </div>

            {/* Office Location */}
            <div className="contact-box mt-3">
              <div className="d-flex align-items-center mb-2">
                <i className="fa-solid fa-location-pin h3 me-2"></i>
                <h3 className="h5 mb-0">Office Location</h3>
              </div>
              <p className="mb-0">Dallas, TX</p>
            </div>

            {/* Map */}
            <div className="map-container mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214586.97537118566!2d-96.89636016472886!3d32.820845125463244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1733379203648!5m2!1sen!2sus"
                className="w-100"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form Block */}
          <div className="col-lg-6">
            <h2 className="mb-4">Leave a Message</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="first_name"
                    className="form-control custom-input"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="last_name"
                    className="form-control custom-input"
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
                  className="form-control custom-input"
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
                  type="tel"
                  name="phone"
                  className="form-control custom-input"
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
                  className="form-control custom-input"
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
                  className="form-control custom-input"
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
                  className="form-control custom-input"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Which Photo Booth Would You Like?</label>
                <div className="custom-radio-group">
                  <div className="form-check">
                    <input
                      className="form-check-input custom-radio"
                      type="radio"
                      name="photo_booth"
                      id="standard"
                      value="Standard"
                      required
                    />
                    <label className="form-check-label" htmlFor="standard">
                      Standard
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input custom-radio"
                      type="radio"
                      name="photo_booth"
                      id="roaming"
                      value="Roaming"
                      required
                    />
                    <label className="form-check-label" htmlFor="roaming">
                      Roaming
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input custom-radio"
                      type="radio"
                      name="photo_booth"
                      id="spin"
                      value="360 Spin"
                      required
                    />
                    <label className="form-check-label" htmlFor="spin">
                      360 Spin
                    </label>
                  </div>
                </div>
              </div>

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
                  className="form-control custom-input"
                  rows={3}
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-danger fw-bold book-now-btn"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
