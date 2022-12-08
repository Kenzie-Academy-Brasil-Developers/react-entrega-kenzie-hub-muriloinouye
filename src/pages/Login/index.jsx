import React from "react";
import { LoginForm } from "../../components/Login-components/Login-form";
import { LoginHeader } from "../../components/Login-components/Login-header";

export const Login = () => {
  return (
    <div>
      <LoginHeader />
      <LoginForm />
    </div>
  );
};
