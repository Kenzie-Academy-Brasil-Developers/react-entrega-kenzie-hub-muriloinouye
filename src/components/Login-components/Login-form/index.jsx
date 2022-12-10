import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Email invalido"),
    password: yup.string().required("Senha obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function formSubmit(data) {
    console.log(data);
    axios
      .post("https://kenziehub.herokuapp.com/sessions", { ...data })
      .then((response) => {
        console.log(response);
        window.localStorage.clear();
        window.localStorage.setItem("authToken", response.data.token);
        if (response.statusText === "OK") {
          navigate("/dashboard");
        }
      })
      .catch((error) => console.log(error));
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <header>Login</header>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register("email")} />
        {errors.email?.message}
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />
        <button type="submit">Entrar</button>
      </div>
      <div>
        <p>Ainda não possui uma conta ?</p>
        <button onClick={() => navigate("/register")}>Cadastrar-se</button>
      </div>
    </form>
  );
};
