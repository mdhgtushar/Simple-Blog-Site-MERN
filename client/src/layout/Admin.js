import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../admin/inc/Header";

const Admin = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid" style={{ minHeight: "90vh" }}>
        <div className="row">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
