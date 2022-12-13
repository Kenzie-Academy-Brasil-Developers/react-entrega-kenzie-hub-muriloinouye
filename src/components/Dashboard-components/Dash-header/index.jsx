import React from "react";
import styles from "./dashHeader.module.css";
import logo from "../../../Imgs/Logo.svg";
import { useNavigate } from "react-router-dom";
import {
  ButtonSmaller,
  DashHeaderContainer,
  StyledDashHeader,
} from "../../../styles";

export const DashHeader = () => {
  const navigate = useNavigate();

  function logout() {
    window.localStorage.clear();
    navigate("/");
  }

  return (
    <StyledDashHeader>
      <DashHeaderContainer>
        <img src={logo} alt="" />
        <ButtonSmaller onClick={logout}>Sair</ButtonSmaller>
      </DashHeaderContainer>
    </StyledDashHeader>
  );
};
