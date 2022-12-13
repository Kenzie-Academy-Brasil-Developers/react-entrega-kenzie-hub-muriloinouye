import React from "react";
import { ToastContainer } from "react-toastify";
import { RegisterForm } from "../../components/Register-components/RegisterForm";
import { RegisterHeader } from "../../components/Register-components/RegisterHeader";
import { RegisterContainer } from "../../styles";

export const Register = () => {
  return (
    <RegisterContainer>
      <RegisterHeader />
      <RegisterForm />
      <ToastContainer />
    </RegisterContainer>
  );
};
