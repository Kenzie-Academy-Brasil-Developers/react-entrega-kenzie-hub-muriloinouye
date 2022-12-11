import React from "react";
import { LoginForm } from "../../components/Login-components/Login-form";
import { LoginHeader } from "../../components/Login-components/Login-header";
import styles from "./login.module.css";

export const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <LoginHeader />
      <LoginForm />
    </div>
  );
};
