import React from "react";
import { RegisterForm } from "../../components/Register-components/RegisterForm";
import { RegisterHeader } from "../../components/Register-components/RegisterHeader";
import styles from "./register.module.css";

export const Register = () => {
  return (
    <div className={styles.registerContainer}>
      <RegisterHeader />
      <RegisterForm />
    </div>
  );
};
