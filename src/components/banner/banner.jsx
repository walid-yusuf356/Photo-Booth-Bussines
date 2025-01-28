import "./banner.css";
import backgroundVideo from '../../assets/videos/JCi - Spin Booth.mp4';

const Banner = () => {
  return (
    <section className="banner-section d-flex justify-content-center align-items-center position-relative">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Banner;