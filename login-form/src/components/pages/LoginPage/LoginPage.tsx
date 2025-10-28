import React from "react";
import { Link } from "react-router-dom";
import Form from "../../molecules/Form/Form"; // استخدم الفورم الموجود عندك
import styles from "./LoginPage.module.css";

const LoginPage: React.FC = () => {
  return (
    <div className={styles.loginPage}>
      <h2 className={styles.title}>Login</h2>
      <Form />
      <p style={{ marginTop: "10px", textAlign: "center" }}>
        Forgot your password? <Link to="/forgot-password">Reset it here</Link>
      </p>
    </div>
  );
};

export default LoginPage;


