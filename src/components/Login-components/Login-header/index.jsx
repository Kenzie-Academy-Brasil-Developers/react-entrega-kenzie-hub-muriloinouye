import React from "react";
import logo from "../../../Imgs/Logo.svg";
import style from "./loginHeader.module.css";

export const LoginHeader = () => {
  return (
    <div className={`container ${style.logoDiv}`}>
      <img src={logo} alt="" />
    </div>
  );
};
