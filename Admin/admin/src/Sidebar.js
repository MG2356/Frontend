import React from "react";
import { useLocation } from "react-router-dom";
import './Style.css';

const Sidebar = () => {
//   const location = useLocation();
//   const username = new URLSearchParams(location.search).get("username");

  return (
    <section id="sidebar">
      <a href="#" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text" style={{ fontSize: "0.9rem" }}>
          {/* <span className="welcome-1">Welcome {username}</span> */}
        </span>
      </a>
      <ul className="side-menu top">
        <li className="active">
          <a href="#">
            <i className="bx bxs-dashboard"></i>
            <span className="text">Add Product</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-doughnut-chart"></i>
            <span className="text">Analytics</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-group"></i>
            <span className="text">Users</span>
          </a>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <a href="#">
            <i className="bx bxs-cog"></i>
            <span className="text">Contact</span>
          </a>
        </li>
        <li>
          <a href="login.html" className="logout">
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
