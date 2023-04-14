import "../sass/header.scss";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.webp";

import Banner from "./elements/Banner";

const Header = () => {
  return (
    <div className="containe container-header">
      <Banner />

      <div
        className="carousel slide carousel-fade carousel-section"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="img-carousel " alt="slide 1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="img-carousel" alt="slide 2" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="img-carousel" alt="slide 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
