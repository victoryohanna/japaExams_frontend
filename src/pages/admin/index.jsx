// import { Link } from "react-router-dom";
import "../../sass/admin/admin.scss";
import { FaShoppingCart, FaShoppingBag, FaChartLine } from "react-icons/fa";

import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";
import Navbar from "../../components/sideNavbar/Navbar";

const AdminDashboard = () => {
  return (
    <div className="admin-wrapper">
      <div className="side-navbar">
        {/* <div className="averta-section"> 
          <img src="" alt="" />
        </div>  */}
        <Navbar />
      </div>
      <div className=" dashboar-overview">
        <div className="order-section">
          <div className="order-received">
            <h4>New Order</h4>
            <div className="count">
              <span>
                <FaShoppingCart style={{ color: "#008b8b", fontSize: 40 }} />
              </span>
              <span>355</span>
            </div>
            <div className="percent">
              <span>15% Higher than Last Month</span>
            </div>
          </div>
          <div className="order-completed">
            <h4>Recieved Order</h4>
            <div className="count">
              <span>
                <FaShoppingBag style={{ color: "#ee0996", fontSize: 40 }} />
              </span>
              <span>869</span>
            </div>
            <div className="percent">
              <span>25% Higher than Last Month</span>
            </div>
          </div>
          <div className="order-new">
            <h4>Completed Order</h4>
            <div className="count">
              <span>
                <FaChartLine style={{ color: "#3cb371", fontSize: 40 }} />
              </span>
              <span>145</span>
            </div>
            <div className="percent">
              <span>15% Higher than Last Month</span>
            </div>
          </div>
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months Order" aspect={2 / 1} />
        </div>
        <div className="table-section">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
