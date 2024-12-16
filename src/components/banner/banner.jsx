import "./banner.css";
import backgroundVideo from '../../assets/videos/JCi - Spin Booth.mp4';

const Banner = () => {
  return (
    <section className="banner-section d-flex justify-content-center align-items-center position-relative">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="banner-overlay"></div>
      <div className="banner-wrapper d-flex flex-column text-center">
        <div className="inner-banner text-white">
          <h1 className="title">Make Every Moment Picture-Perfect!</h1>
          <p className="text-content pt-4">
            Turn every occasion into a memorable celebration with our premium
            photo booth experiences! 
            Whether it is a wedding, corporate event, birthday party, or any
            special gathering, our photo 
            booths bring fun, creativity, and energy to every event. Capture the
            joy of your guests 
            and create keepsakes they will cherish forever.
          </p>
        </div>

        <div className="quote mt-3 w-100 d-flex justify-content-center">
          <button className="btn btn-danger btn-lg px-5 py-3" type="submit">
            Instant Quotes
          </button>
        </div>
      </div> */}
    </section>
  );
};

export default Banner;