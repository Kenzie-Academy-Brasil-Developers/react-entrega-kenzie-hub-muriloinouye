import React from "react";
import { ToastContainer } from "react-toastify";
import { LoginForm } from "../../components/Login-components/Login-form";
import { LoginHeader } from "../../components/Login-components/Login-header";
import { LoginContainer } from "../../styles";

export const Login = () => {
  return (
    <LoginContainer>
      <LoginHeader />
      <LoginForm />
      <ToastContainer />
    </LoginContainer>
  );
};
