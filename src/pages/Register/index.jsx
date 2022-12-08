import React from "react";
import { RegisterForm } from "../../components/Register-components/RegisterForm";
import { RegisterHeader } from "../../components/Register-components/RegisterHeader";

export const Register = () => {
  return (
    <div>
      <RegisterHeader />
      <RegisterForm />
    </div>
  );
};
