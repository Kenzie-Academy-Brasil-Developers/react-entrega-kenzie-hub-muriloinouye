import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Button,
  ButtonPrimary,
  Form,
  FormLogin,
  FormLoginInputs,
  FormLoginUnregisted,
  FormLoginUnregistedP,
  HeaderFormLogin,
  Input,
  Label,
} from "../../../styles";

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
    axios
      .post("https://kenziehub.herokuapp.com/sessions", { ...data })
      .then((response) => {
        window.localStorage.clear();
        window.localStorage.setItem("@Token", response.data.token);
        window.localStorage.setItem("@Id", response.data.user.id);
        if (response.statusText === "OK") {
          toast.success("Login efetuado com sucesso!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setTimeout(() => {
            navigate("/dashboard");
          }, 2600);
        }
      })
      .catch((error) => {
        toast.error("Ops, algo deu errado", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  }

  return (
    <Form onSubmit={handleSubmit(formSubmit)}>
      <HeaderFormLogin>Login</HeaderFormLogin>
      <FormLoginInputs>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          id="email"
          {...register("email")}
          placeholder="Digite seu email"
        />
        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          id="password"
          {...register("password")}
          placeholder="Digite sua senha"
        />
        <ButtonPrimary type="submit">Entrar</ButtonPrimary>
      </FormLoginInputs>
      <FormLoginUnregisted>
        <FormLoginUnregistedP>
          Ainda não Possui uma conta ?
        </FormLoginUnregistedP>
        <Button onClick={() => navigate("/register")}>Cadastrar-se</Button>
      </FormLoginUnregisted>
    </Form>
  );
};
