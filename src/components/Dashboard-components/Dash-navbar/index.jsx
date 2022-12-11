import React from "react";
import styles from "./dashNavbar.module.css";

export const DashNavbar = ({ user }) => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navbarContainer} container`}>
        <h2 className={styles.name}>{`Olá, ${user.name}`}</h2>
        <p className={styles.course}>{user.course_module}</p>
      </div>
    </nav>
  );
};
