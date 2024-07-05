import React, { useState, useEffect } from "react";
import AdminDashboard from './AdminDashboard'
import Navbar from "../Navbar/Navbar";
function AdminHome() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
<>
<div className="App">
      {isLoading ? (
        <div className="loader">
          <span className="loader-text">loading</span>
          <span className="load"></span>
        </div>
      ) : (
        <div className="cont-1">
          {/* <Sidebar /> */}
          <section id="content">
            <Navbar />
            
            <AdminDashboard/>
          </section>
        </div>
      )}
    </div>
</>
)
}

export default AdminHome