// Import images
import img1 from "../../assets/images/home/service-1.jpg";
import img2 from "../../assets/images/home/service-2.jpg";
import img3 from "../../assets/images/home/service-3.jpg";
import "./service.css";

const Service = () => {
  return (
    <section className="service-section py-5">
      <div className="container text-center">
        <h2 className="service_title mb-5 fw-bold">
          Our <span className="text-danger">Photo Booth </span> Services
        </h2>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="service-card p-4 shadow">
              <h3 className="mb-3">Roaming Photo Booth</h3>
              <div className="image-wrapper mb-3">
                <img
                  src={img1}
                  alt="Roaming Photo Booth"
                  className="img-fluid"
                />
              </div>
              <p>
                Let the party come to you! With our Roaming Photo Booth, our
                friendly attendant moves through the crowd, capturing candid and
                spontaneous moments wherever the action is. This mobile
                experience is perfect for keeping everyone engaged and in the
                moment. Whether it’s on the dance floor or during heartfelt
                speeches!
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card p-4 shadow">
              <h3 className="mb-3">Standard Photo Booth</h3>
              <div className="image-wrapper mb-3">
                <img
                  src={img2}
                  alt="Standard Photo Booth"
                  className="img-fluid"
                />
              </div>
              <p>
                The classic experience with a modern twist! Our stationary
                Standard Photo Booth on a stand is perfect for guests to gather
                around and take high-quality photos. It’s equipped with premium
                lighting and customizable backdrops to suit your event’s theme.
                Just strike a pose, and let the fun begin with instant photo
                prints or digital sharing options!
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card p-4 shadow">
              <h3 className="mb-3">360 Spin Booth</h3>
              <div className="image-wrapper mb-3">
                <img src={img3} alt="360 Spin Booth" className="img-fluid" />
              </div>
              <p>
                Make your event unforgettable with our 360 Spin Booth, a
                cutting-edge experience that captures stunning 360° videos. It is
                perfect for creating shareable moments with a unique perspective
                that puts your guests in the spotlight! Add custom branding and
                overlays to make every video unique. It’s the next level of photo booth entertainment!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
