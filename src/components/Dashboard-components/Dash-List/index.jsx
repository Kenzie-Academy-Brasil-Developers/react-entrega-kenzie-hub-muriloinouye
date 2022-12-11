import React from "react";
import { TechCard } from "../TechCard";
import styles from "./dashList.module.css";

export const DashList = ({ techs, token, fetchUser }) => {
  return (
    <div className={`container ${styles.dashDiv} `}>
      {techs.map((obj, index) => (
        <TechCard obj={obj} key={index} token={token} fetchUser={fetchUser} />
      ))}
    </div>
  );
};
