import React, { useContext, useEffect, useState } from "react";
import { DashList } from "../../components/Dashboard-components/Dash-List";
import { DashHeader } from "../../components/Dashboard-components/Dash-header";
import { DashNavbar } from "../../components/Dashboard-components/Dash-navbar";
import { redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { AddTech } from "../../components/Dashboard-components/AddTech";

import { DashboardContainer } from "../../styles";
import { UserContext } from "../../contexts/UserContext";

export const Dashboard = () => {
  const { fetchUser, id, token, user } = useContext(UserContext);
  const navigate = useNavigate();

  function verifyLogin() {
    if (token === null || id === null) {
      navigate("/");
    }
  }

  useEffect(() => {
    verifyLogin();
    fetchUser();
  }, []);

  return (
    <DashboardContainer>
      <DashHeader />
      <DashNavbar />
      <AddTech />
      <DashList />
    </DashboardContainer>
  );
};
