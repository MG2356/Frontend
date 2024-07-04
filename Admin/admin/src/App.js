import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import "./Style.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar/Navbar";
import AdminDashboard from "./AdminDashboard";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminHome from "./AdminHome";
import EditProduct from "./Cred/EditProduct";
import Edit from "./Edit";
import Users from "./Users";
import GetUsers from "./Cred/GetUsers";
// import TaskManager from "./components/TaskManager";

function App() {
 

  return (
    <>
 
    <Router>
      <Routes>
       
        <Route path="/" element={<AdminHome />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/users" element={<Users />} />
        <Route path="/getusers" element={<GetUsers />} />

      </Routes>
    </Router>
          </>

  );
}

export default App;
