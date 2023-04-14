import { Link } from "react-router-dom";


const Banner = () => {


  return (
    <div className="banner">
      {/* <div className="banner-text">
        <div
          className="carousel slide  carousel-section"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Link>
                <h3>
                  learn the most on demand skills needed by businesses and
                  employers world wide"
                </h3>
              </Link>
            </div>
            <div className="carousel-item">
              <Link>
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  voluptates!
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="quickLinks">
        <Link to="/gre" ><span> GRE</span></Link>
        <Link to="/toefl"><span>TOEFL</span> </Link>
        <Link to="/ielts"><span>IELTS</span> </Link>
        <Link to="/gmat"><span>GMAT</span> </Link>
        <Link to="/sat"><span>SAT</span> </Link>
        <Link to="/oet"><span>OET</span> </Link>
        <Link to="/pte"><span>PTE</span> </Link>
      </div>
    </div>
  );
};

export default Banner;
