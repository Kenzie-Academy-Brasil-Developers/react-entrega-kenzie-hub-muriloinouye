import React from "react";
import styles from "./dashHeader.module.css";
import logo from "../../../Imgs/Logo.svg";
import { useNavigate } from "react-router-dom";

export const DashHeader = () => {
  const navigate = useNavigate();

  function logout() {
    window.localStorage.clear();
    navigate("/");
  }

  return (
    <header className={styles.dashHeader}>
      <div className={`${styles.headerContainer} container`}>
        <img src={logo} alt="" className={styles.logo} />
        <button className={styles.logoutButton} onClick={logout}>
          Sair
        </button>
      </div>
    </header>
  );
};
