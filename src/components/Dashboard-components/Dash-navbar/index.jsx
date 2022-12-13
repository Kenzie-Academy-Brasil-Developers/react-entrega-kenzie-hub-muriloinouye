import React from "react";
import { DashNavbarContainer, StyledDashNavbar } from "../../../styles";

export const DashNavbar = ({ user }) => {
  return (
    <StyledDashNavbar>
      <DashNavbarContainer>
        <h2>{`Olá, ${user.name}`}</h2>
        <p>{user.course_module}</p>
      </DashNavbarContainer>
    </StyledDashNavbar>
  );
};
