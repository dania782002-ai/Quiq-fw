import React from "react"; 
import Form from "../../molecules/Form/Form";
import styles from "./LoginPage.module.css";   
const LoginPage: React.FC = () => {
    return (

        <div className={styles.loginPage}>
            <h2 className={styles.title}>Login</h2>
            <Form />
        </div>
    );
};
export default LoginPage;
