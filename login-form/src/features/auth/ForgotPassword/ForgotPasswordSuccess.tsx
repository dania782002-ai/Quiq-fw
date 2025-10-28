import React from "react";
import { Link } from "react-router-dom";

const ForgotPasswordSuccess: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h2>Success!</h2>
      <p>Check your email for the password reset link.</p>
      <Link to="/login">Back to Login</Link>
    </div>
  );
};

export default ForgotPasswordSuccess;
