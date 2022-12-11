import React, { useEffect, useState } from "react";
import { DashList } from "../../components/Dashboard-components/Dash-List";
import { DashHeader } from "../../components/Dashboard-components/Dash-header";
import { DashNavbar } from "../../components/Dashboard-components/Dash-navbar";
import { redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { AddTech } from "../../components/Dashboard-components/AddTech";

export const Dashboard = () => {
  const navigate = useNavigate();

  const token = window.localStorage.getItem("@Token");
  const id = window.localStorage.getItem("@Id");

  const [techs, setTechs] = useState([]);
  const [user, setUser] = useState([]);

  function verifyLogin() {
    if (token === null || id === null) {
      navigate("/");
    }
  }

  function fetchUser() {
    axios
      .get(`https://kenziehub.herokuapp.com/users/${id}`)
      .then((response) => {
        console.log(response);
        setTechs(response.data.techs);
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  }
  console.log(user);

  useEffect(() => {
    verifyLogin();
    fetchUser();
  }, []);

  return (
    <div>
      <DashHeader />
      <DashNavbar user={user} />
      <AddTech token={token} fetchUser={fetchUser} />
      <DashList techs={techs} token={token} fetchUser={fetchUser} />
    </div>
  );
};
