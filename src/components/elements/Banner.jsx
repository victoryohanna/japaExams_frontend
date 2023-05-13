import { Link} from "react-router-dom";

const Banner = () => {

  return (
    <div className="banner">
      <div className="quickLinks">
        <Link to="/gre" ><span> GRE</span></Link>
        <Link to="/toefl"><span>TOEFL</span> </Link>
        <Link to="/ielts"><span>IELTS</span> </Link>
        <Link to="/gmat"><span>GMAT</span> </Link>
        <Link to="/sat"><span>SAT</span> </Link>
        <Link to="/oet"><span>OET</span> </Link>
        <Link to="/pte"><span>PTE</span> </Link>
        <Link to="/duolingo"><span>Duolingo</span> </Link>
      </div>
      <div className="register_button">
        <Link to='/register' >Register Now</Link>
      </div>
    </div>
  );
};

export default Banner;
