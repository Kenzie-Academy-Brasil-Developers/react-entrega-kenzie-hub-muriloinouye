import React, { useContext } from "react";
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
import { UserContext } from "../../../contexts/UserContext";

export const LoginForm = () => {
  const { loginFetch } = useContext(UserContext);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Email invalido"),
    password: yup.string().required("Senha obrigatoria"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function formSubmit(data) {
    await loginFetch(data);
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
