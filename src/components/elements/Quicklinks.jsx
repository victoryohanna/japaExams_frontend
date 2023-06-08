import { Link } from "react-router-dom";
import "../../sass/quicklinks.scss";
import { data } from "./index";

const Quicklinks = () => {
  return (
    <div className="container">
      <div className="header-text">
      <h2>International Exams</h2>
      </div>
      <div className="row ">
        {data.map((item, i) => {
          return (
            <div className="col-md-3 " key={i}>
              <Link to="/">
                <img src={item.image} alt="" />
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quicklinks;
