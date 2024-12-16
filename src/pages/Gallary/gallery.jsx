import img1 from "../../assets/images/gallery/gallery-1.jpg";   
import img2 from "../../assets/images/gallery/gallery-2.jpg";
import img3 from "../../assets/images/gallery/gallery-3.jpg";
import img4 from "../../assets/images/gallery/gallery-4.jpg";
import img5 from "../../assets/images/gallery/gallery-5.jpg";
import img6 from "../../assets/images/gallery/gallery-6.jpg";
import img7 from "../../assets/images/gallery/gallery-7.jpg";
import img8 from "../../assets/images/home/Service-1.jpg";
import img9 from "../../assets/images/gallery/gallery-9.jpg";
import "./gallery.css"

const gallary = () => {
  return (
    <section className="gallery min-vh-100">
        <div className="container-lg">
            <div className="section-title fw-bold text-center pb-3">
                <h2>Our Gallery</h2>
                <p>Check out our gallery to see our photo booth in action!</p>
            </div>
            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div className="col">
                <div className="gallery-item">
                <img src={img1} alt="gallery" />
                </div>
            </div>
            <div className="col">
                <div className="gallery-item">
                <img src={img2} alt="gallery" />
                </div>
            </div>
            <div className="col">
                <div className="gallery-item">
                <img src={img3} alt="gallery" />
                </div>
            </div>
            <div className="col">
                <div className="gallery-item">
                <img src={img4} alt="gallery" />
                </div>
            </div>
            <div className="col">
                <div className="gallery-item">
                <img src={img5} alt="gallery" />
                </div>
            </div>
            <div className="col">
                <div className="gallery-item">
                <img src={img6} alt="gallery" />
                </div>
            </div>
            <div className="col">
                <div className="gallery-item">
                <img src={img7} alt="gallery" />
                </div>
            </div>
            <div className="col">
                <div className="gallery-item">
                <img src={img8} alt="gallery" />
                </div>
            </div>
            <div className="col">
                <div className="gallery-item">
                <img src={img9} alt="gallery" />
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default gallary
