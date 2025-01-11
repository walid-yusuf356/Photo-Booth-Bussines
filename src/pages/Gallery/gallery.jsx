import { useState } from "react";
import "./gallery.css";

// Import all images
import img1 from "../../assets/images/gallery/gallery-1.jpg";
import img2 from "../../assets/images/gallery/gallery-2.jpg";
import img3 from "../../assets/images/gallery/gallery-3.jpg";
import img4 from "../../assets/images/gallery/gallery-4.jpg";
import img5 from "../../assets/images/gallery/gallery-5.jpg";
import img6 from "../../assets/images/gallery/gallery-6.jpg";
import img7 from "../../assets/images/gallery/gallery-7.jpg";
import img8 from "../../assets/images/gallery/gallery-8.jpg";
import img9 from "../../assets/images/gallery/gallery-9.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="gallery-section">
      <h1 className="gallery_title">Our Gallery</h1>
      <p className="gallery_description">
        Check out our gallery to see our photo booth in action!
      </p>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery Image ${index + 1}`}
            className="gallery-image"
            onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>

      {selectedImg && (
        <div className="popup-overlay" onClick={() => setSelectedImg(null)}>
          <div className="popup-content">
            <button
              className="popup-close"
              onClick={() => setSelectedImg(null)}
            >
              &times;
            </button>
            <img src={selectedImg} alt="Enlarged" className="popup-img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
