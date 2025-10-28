import React from "react";
import { Link } from "react-router-dom";

const ForgotPasswordExpired: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h2>Link Expired</h2>
      <p>This password reset link is no longer valid.</p>
      <Link to="/forgot-password">Request a new link</Link>
    </div>
  );
};

export default ForgotPasswordExpired;