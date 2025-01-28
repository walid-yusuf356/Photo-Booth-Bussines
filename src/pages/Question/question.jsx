import "./question.css";
const question = () => {
  return (
    <div className="container">
      <h1 className="text-center py-2">Frequently Asked Questions</h1>

      {/* General Questions */}
      <h2 className="text-center mb-4">General Questions</h2>
      <div className="accordion mb-5" id="accordionGeneral">
        <div className="accordion-item">
          <h2
            className="custom_accordion accordion-header"
            id="headingGeneral1"
          >
            <button
              className="custom_accordion accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseGeneral1"
              aria-expanded="true"
              aria-controls="collapseGeneral1"
            >
              What types of photo booths do you offer?
            </button>
          </h2>
          <div
            id="collapseGeneral1"
            className="accordion-collapse collapse show"
            aria-labelledby="headingGeneral1"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              We offer three types of photo booths: the Roaming Booth (a mobile,
              attendant-operated booth), the Standard Booth (a stationary option
              perfect for any event), and the 360 Spin Booth (a video booth that
              captures stunning slow-motion videos).
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingGeneral2">
            <button
              className="custom_accordion accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseGeneral2"
              aria-expanded="false"
              aria-controls="collapseGeneral2"
            >
              How much space is required for the photo booth?
            </button>
          </h2>
          <div
            id="collapseGeneral2"
            className="accordion-collapse collapse"
            aria-labelledby="headingGeneral2"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              For our Standard and 360 Spin Booths, we recommend a 10x10-foot
              area to ensure enough room for the booth, props, and guests. The
              Roaming Booth requires no fixed space, as our attendant moves
              around your event.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingGeneral3">
            <button
              className="custom_accordion accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseGeneral3"
              aria-expanded="false"
              aria-controls="collapseGeneral3"
            >
              Is your photo booth kid-friendly?
            </button>
          </h2>
          <div
            id="collapseGeneral3"
            className="accordion-collapse collapse"
            aria-labelledby="headingGeneral3"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              Yes, our photo booths are fun for all ages! We offer props and
              customization options that cater to both kids and adults.
            </div>
          </div>
        </div>
      </div>

      {/* Booking and Customization */}
      <h2 className="text-center mb-4">Booking and Customization</h2>
      <div className="accordion mb-5 " id="accordionBooking">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingBooking1">
            <button
              className="custom_accordion accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseBooking1"
              aria-expanded="true"
              aria-controls="collapseBooking1"
            >
              How far in advance should I book?
            </button>
          </h2>
          <div
            id="collapseBooking1"
            className="accordion-collapse collapse show"
            aria-labelledby="headingBooking1"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              We recommend booking as soon as you know your event date to secure
              availability, especially during peak seasons.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingBooking2">
            <button
              className="custom_accordion accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseBooking2"
              aria-expanded="false"
              aria-controls="collapseBooking2"
            >
              Can I customize the photo templates?
            </button>
          </h2>
          <div
            id="collapseBooking2"
            className="accordion-collapse collapse"
            aria-labelledby="headingBooking2"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              Yes! We offer fully customizable templates to match your event is
              theme, colors, and branding. You will have the opportunity to
              review and approve the design before your event.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingBooking3">
            <button
              className="custom_accordion accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseBooking3"
              aria-expanded="false"
              aria-controls="collapseBooking3"
            >
              Can you add a logo or branding to the photos?
            </button>
          </h2>
          <div
            id="collapseBooking3"
            className="accordion-collapse collapse"
            aria-labelledby="headingBooking3"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              We can add logos, event hashtags, or custom messages to every
              photo or video.
            </div>
          </div>
        </div>
      </div>

      {/* Event Day Questions */}
      <h2 className="text-center mb-4">Event Day Questions</h2>
      <div className="accordion mb-5" id="accordionEventDay">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEventDay1">
            <button
              className="custom_accordion accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEventDay1"
              aria-expanded="true"
              aria-controls="collapseEventDay1"
            >
              How long does it take to set up?
            </button>
          </h2>
          <div
            id="collapseEventDay1"
            className="accordion-collapse collapse show"
            aria-labelledby="headingEventDay1"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              Setup typically takes 30–60 minutes, depending on the booth type.
              We arrive early to ensure everything is ready before your event
              starts.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEventDay2">
            <button
              className="custom_accordion accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEventDay2"
              aria-expanded="false"
              aria-controls="collapseEventDay2"
            >
              Do you provide an attendant during the event?
            </button>
          </h2>
          <div
            id="collapseEventDay2"
            className="accordion-collapse collapse"
            aria-labelledby="headingEventDay2"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              Yes, all our photo booth packages include a professional attendant
              to assist guests and ensure everything runs smoothly.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEventDay3">
            <button
              className="custom_accordion accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEventDay3"
              aria-expanded="false"
              aria-controls="collapseEventDay3"
            >
              Can guests get digital copies of their photos?
            </button>
          </h2>
          <div
            id="collapseEventDay3"
            className="accordion-collapse collapse"
            aria-labelledby="headingEventDay3"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              Yes, all photos and videos are available digitally via email,
              text, or a downloadable gallery.
            </div>
          </div>
        </div>
      </div>

      {/* Pricing and Payments */}
      <h2 className="text-center mb-4">Pricing and Payments</h2>
      <div className="accordion mb-5" id="accordionPricing">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingPricing1">
            <button
              className="custom_accordion accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePricing1"
              aria-expanded="true"
              aria-controls="collapsePricing1"
            >
              How much does it cost to rent a photo booth?
            </button>
          </h2>
          <div
            id="collapsePricing1"
            className="accordion-collapse collapse show"
            aria-labelledby="headingPricing1"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              Pricing depends on the booth type and rental duration. Packages
              start at $500, and we are happy to create custom packages to meet
              your needs.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingPricing2">
            <button
              className="custom_accordion accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePricing2"
              aria-expanded="false"
              aria-controls="collapsePricing2"
            >
              Do you require a deposit?
            </button>
          </h2>
          <div
            id="collapsePricing2"
            className="accordion-collapse collapse"
            aria-labelledby="headingPricing2"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              No, we require payment in full prior to the event.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingPricing3">
            <button
              className="custom_accordion accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePricing3"
              aria-expanded="false"
              aria-controls="collapsePricing3"
            >
              Are there any additional fees?
            </button>
          </h2>
          <div
            id="collapsePricing3"
            className="accordion-collapse collapse"
            aria-labelledby="headingPricing3"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              Additional fees may apply for travel, extra time, custom props, or
              premium templates. All costs will be discussed upfront to avoid
              surprises.
            </div>
          </div>
        </div>
      </div>

      {/* Add-Ons and Extras */}
      <h2 className="text-center mb-4">Add-Ons and Extras</h2>
      <div className="accordion mb-5" id="accordionAddOns">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAddOns1">
            <button
              className="custom_accordion accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAddOns1"
              aria-expanded="true"
              aria-controls="collapseAddOns1"
            >
              Can I extend the booth rental time during the event?
            </button>
          </h2>
          <div
            id="collapseAddOns1"
            className="accordion-collapse collapse show"
            aria-labelledby="headingAddOns1"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              Additional time can be added at an hourly rate, subject to
              availability.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAddOns2">
            <button
              className="custom_accordion accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAddOns2"
              aria-expanded="false"
              aria-controls="collapseAddOns2"
            >
              Do you provide a social media sharing option?
            </button>
          </h2>
          <div
            id="collapseAddOns2"
            className="accordion-collapse collapse"
            aria-labelledby="headingAddOns2"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              Yes, our booths are equipped with instant sharing options,
              allowing guests to email or text their photos and videos on the
              spot.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAddOns3">
            <button
              className="custom_accordion accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAddOns3"
              aria-expanded="false"
              aria-controls="collapseAddOns3"
            >
              Do you provide props?
            </button>
          </h2>
          <div
            id="collapseAddOns3"
            className="accordion-collapse collapse"
            aria-labelledby="headingAddOns3"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              Yes, we can! We have a variety of props that are available upon
              request.
            </div>
          </div>
        </div>
      </div>

      {/* After the Event */}
      <h2 className="text-center mb-4">After the Event</h2>
      <div className="accordion mb-5" id="accordionAfterEvent">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAfterEvent1">
            <button
              className="custom_accordion accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAfterEvent1"
              aria-expanded="true"
              aria-controls="collapseAfterEvent1"
            >
              How do I access the photos and videos after the event?
            </button>
          </h2>
          <div
            id="collapseAfterEvent1"
            className="accordion-collapse collapse show"
            aria-labelledby="headingAfterEvent1"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              We will provide a link to a private online gallery where you and
              your guests can view, download, and share all the event photos and
              videos.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAfterEvent2">
            <button
              className="custom_accordion accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAfterEvent2"
              aria-expanded="false"
              aria-controls="collapseAfterEvent2"
            >
              How long will the online gallery be available?
            </button>
          </h2>
          <div
            id="collapseAfterEvent2"
            className="accordion-collapse collapse"
            aria-labelledby="headingAfterEvent2"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              The gallery is available for 30 days after the event. Extended
              access can be arranged if needed.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAfterEvent3">
            <button
              className="custom_accordion accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAfterEvent3"
              aria-expanded="false"
              aria-controls="collapseAfterEvent3"
            >
              Can I get physical copies of the photos?
            </button>
          </h2>
          <div
            id="collapseAfterEvent3"
            className="accordion-collapse collapse"
            aria-labelledby="headingAfterEvent3"
            data-bs-parent="#c42731ordionGeneral"
          >
            <div className="accordion-body">
              While our primary focus is on digital delivery, we can arrange for
              physical prints of select photos upon request. This service may
              incur an additional fee, which we can discuss based on your
              specific needs and preferences.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default question;
