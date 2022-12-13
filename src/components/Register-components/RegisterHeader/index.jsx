import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../Imgs/Logo.svg";
import { ButtonSmaller, StyleRegisterHeader } from "../../../styles";

export const RegisterHeader = () => {
  const navigate = useNavigate();

  return (
    <StyleRegisterHeader>
      <img src={logo} alt="" />
      <ButtonSmaller onClick={() => navigate("/")}>Voltar</ButtonSmaller>
    </StyleRegisterHeader>
  );
};
