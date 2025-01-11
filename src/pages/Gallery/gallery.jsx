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

  // Function to handle clicking outside the image to close the modal
  const handleCloseModal = (e) => {
    if (e.target.classList.contains("modal")) {
      setSelectedImg(null);
    }
  };

  return (
    <div className="gallery">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Gallery Image ${index + 1}`}
          className="gallery-image"
          onClick={() => setSelectedImg(img)}
        />
      ))}

      {selectedImg && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close" onClick={() => setSelectedImg(null)}>
            &times;
          </span>
          <img src={selectedImg} alt="Enlarged" className="enlarged-image" />
        </div>
      )}
    </div>
  );
}

export default Gallery;
