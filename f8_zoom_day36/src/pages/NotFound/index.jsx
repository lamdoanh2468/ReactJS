import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "10%" }}>
      <h1 style={{ fontSize: "4rem", color: "#ff4d4f" }}>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link to="/" style={{ color: "#1890ff", textDecoration: "underline" }}>
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
