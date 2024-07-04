import React, { useState } from 'react';
import './Style.css';
import GetUsers from './Cred/GetUsers';

const Users = () => {


  return (
   <>
<div className="cont-1">
          {/* <Sidebar /> */}
          <section id="content">
          <nav>
      <i className="bx bx-menu"></i>
      <form>
        <div >
          <button type="submit">
          </button>
        </div>
      </form>
      <input type="checkbox" id="switch-mode" hidden />
      <label htmlFor="switch-mode" className="switch-mode"></label>
      <a href="#" className="profile">
        <img src="people.jpg" alt="profile" />
      </a>
        <section id="sidebar">
        <a href="#" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text" style={{ fontSize: "0.9rem" }}>
            {/* <span className="welcome-1">Welcome {username}</span> */}
          </span>
        </a>
        <ul className="side-menu top">
          <li>
            <a href="/">
              <i className="bx bxs-dashboard"></i>
              <span className="text">Add Product</span>
            </a>
          </li>
          <li>
            <a href='/edit'>
              <i className="bx bxs-doughnut-chart"></i>
              <span className="text">Edit Product</span>
            </a>
          </li>
          <li className="active">
            <a href='/users'>
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
      
    </nav>


    <GetUsers/>
          </section>
        </div>   
   </>
  );
};

export default Users;
