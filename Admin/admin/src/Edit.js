import React, { useState } from 'react';
import './Style.css';
import EditProduct from './Cred/EditProduct';
import { Link } from 'react-router-dom'

const Edit = () => {


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
      <Link to="#" className="profile">
        <img src="people.jpg" alt="profile" />
      </Link>
        <section id="sidebar">
        <Link to="#" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text" style={{ fontSize: "0.9rem" }}>
            {/* <span className="welcome-1">Welcome {username}</span> */}
          </span>
        </Link>
        <ul className="side-menu top">
          <li>
            <Link to='/'>
              <i className="bx bxs-dashboard"></i>
              <span className="text">Add Product</span>
            </Link>
          </li>
          <li className="active">
            <Link to='/edit'>
              <i className="bx bxs-doughnut-chart"></i>
              <span className="text">Edit Product</span>
            </Link>
          </li>
          <li>
            <Link to='/users'>
              <i className="bx bxs-group"></i>
              <span className="text">Users</span>
            </Link>
          </li>
        </ul>
        <ul className="side-menu">
       
          <li>
            < Link to="/" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span className="text">Logout</span>
            </Link>
          </li>
        </ul>
      </section>
      
    </nav>
    <EditProduct/>
          </section>
        </div>   
   </>
  );
};

export default Edit;
