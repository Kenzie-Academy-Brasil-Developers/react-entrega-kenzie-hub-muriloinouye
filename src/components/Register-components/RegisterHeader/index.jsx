import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../Imgs/Logo.svg";
import styles from "./RegisterHeader.module.css";

export const RegisterHeader = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.registerHeader}`}>
      <img src={logo} alt="" />
      <button onClick={() => navigate("/")} className={styles.loginButton}>
        Voltar
      </button>
    </div>
  );
};
