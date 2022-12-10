import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../Imgs/Logo.svg";

export const RegisterHeader = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img src={logo} alt="" />
      <button onClick={() => navigate("/")}>Voltar</button>
    </div>
  );
};
