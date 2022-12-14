import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { DashNavbarContainer, StyledDashNavbar } from "../../../styles";

export const DashNavbar = () => {
  const { user } = useContext(UserContext);
  return (
    <StyledDashNavbar>
      <DashNavbarContainer>
        <h2>{`Olá, ${user.name}`}</h2>
        <p>{user.course_module}</p>
      </DashNavbarContainer>
    </StyledDashNavbar>
  );
};
