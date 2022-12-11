import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

import styles from "./LoginForm.module.css";

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
        window.localStorage.setItem("@Token", response.data.token);
        window.localStorage.setItem("@Id", response.data.user.id);
        if (response.statusText === "OK") {
          navigate("/dashboard");
        }
      })
      .catch((error) => console.log(error));
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(formSubmit)} className={`${styles.form}`}>
      <header className={styles.formHeader}>Login</header>
      <div className={styles.formDiv}>
        <label htmlFor="email" className={`${styles.label} headline`}>
          Email
        </label>
        <input
          type="text"
          id="email"
          {...register("email")}
          className={styles.input}
          placeholder="Digite seu email"
        />
        <label htmlFor="password" className={`${styles.label} headline`}>
          Senha
        </label>
        <input
          type="password"
          id="password"
          {...register("password")}
          className={styles.input}
          placeholder="Digite sua senha"
        />
        <button type="submit" className={styles.buttonSubmit}>
          Entrar
        </button>
      </div>
      <div className={styles.unregistedDiv}>
        <p className={styles.unregistedP}>Ainda não possui uma conta ?</p>
        <button
          onClick={() => navigate("/register")}
          className={styles.registerButton}
        >
          Cadastrar-se
        </button>
      </div>
    </form>
  );
};
