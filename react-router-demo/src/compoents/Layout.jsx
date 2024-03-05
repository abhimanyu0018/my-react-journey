import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="header">
        <h2>logo</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>

      <Outlet />

      <div className="footer">
        <h2>footer</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </>
  );
}

export default Layout;
