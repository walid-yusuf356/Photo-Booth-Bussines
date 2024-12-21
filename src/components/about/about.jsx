import { Link } from "react-router-dom";
import video from "../../assets/videos/about-video.mp4";
import "./about.css";

export default function HeroSection() {
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
              
              <span className="text-bold">Book Now</span>
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

// import { Link } from "react-router-dom";
// import video from "../../assets/videos/about-video.mp4";
// import "./about.css";

// export default function HeroSection() {
//   return (
//     <section className="py-5">
//       <div className="container">
//         {/* Row for Text and Video */}
//         <div className="row align-items-center">
//           {/* Text Content */}
//           <div className="col-lg-6">
//             <h1 className="welcome">
//               Welcome to our Photobooth
//             </h1>
//             <h1 className="display-5 fw-bold mb-4">
//               We have <span className="text-danger">over 7 years</span> experience in
//               photography!
//             </h1>
//             <p className="about-text mb-4">
//               Our photo booths are perfect for weddings, corporate events,
//               birthday parties, and any special gathering. We bring fun,
//               creativity, and energy to every event. Capture the joy of your
//               guests and create keepsakes they will cherish forever.
//             </p>
//             <Link
//               className="btn btn-danger btn-lg px-4 py-2 d-inline-flex align-items-center gap-2"
//               to="/about"
//             >
//               ABOUT US
//             </Link>
//           </div>

//           {/* Video Content */}
//           <div className="col-lg-6">
//             <div className="video-section ratio ratio-16x9">
//               <video src={video} autoPlay loop muted playsInline className="w-100" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
