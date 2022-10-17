import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../inc/Footer";
import Header from "../inc/Header";
import Sidebar from "../inc/Sidebar";

const Admin = () => {
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

export default Admin;
