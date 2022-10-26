import { Outlet } from "react-router-dom";
import Footer from "../client/inc/Footer";
import Header from "../client/inc/Header";
import Sidebar from "../client/inc/Sidebar";

const Client = () => {
  return (
    <div>
      <Header />
      <div className="container" style={{ minHeight: "90vh" }}>
        <div className="row">
          <Outlet />
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Client;
