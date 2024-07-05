import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import "./Style.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminHome from "./Admin/AdminHome";
import Edit from "./Edit/Edit";
import Users from "./User/Users";
import GetUsers from "./Cred/GetUsers";
// import TaskManager from "./components/TaskManager";
// import { ProductsProvider } from "./GlobalState/ProductsContext";
// import { CartProvider } from "./GlobalState/CartContext";
import EditProduct from "./Cred/EditProduct";
import Login from "./Auth/Login/Login";

function App() {
 

  return (
    <>
 
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/users" element={<Users />} />
        <Route path="/getusers" element={<GetUsers />} />

      </Routes>
    </Router>
     {/* <ProductsProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/edit-product" component={EditProduct} />
            <Route path="/" element={<AdminHome />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/users" element={<Users />} />
        <Route path="/getusers" element={<GetUsers />} />
          </Routes>
        </Router>
      </CartProvider>
    </ProductsProvider> */}
          </>

  );
}

export default App;
