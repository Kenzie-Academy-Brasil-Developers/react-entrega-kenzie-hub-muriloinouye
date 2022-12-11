import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Email invalido"),
    password: yup.string().required("Senha obrigatoria"),
    name: yup.string().required("Nome obrigatorio"),
    bio: yup.string().required("Bio obrigatoria"),
    contact: yup.string().required("Telefone para contato obrigatorio"),
    course_module: yup.string().required("Selecione o modulo"),
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
      .post("https://kenziehub.herokuapp.com/users", { ...data })
      .then((response) => {
        console.log(response);
        if (response.statusText === "Created") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <header>
        <h2>Crie sua conta</h2>
        <p>Rapido e gratis, vamos nessa</p>
      </header>
      <div>
        <label htmlFor="">Nome</label>
        <input type="text" {...register("name")} />
        {errors.name?.message}
        <label htmlFor="">Email</label>
        <input type="email" {...register("email")} />
        {errors.email?.message}
        <label htmlFor="">Senha</label>
        <input type="password" {...register("password")} />
        {errors.password?.message}
        <label htmlFor="">Confirmar senha</label>
        <input type="password" />
        <label htmlFor="">Bio</label>
        <input type="text" {...register("bio")} />
        {errors.bio?.message}
        <label htmlFor="">Contato</label>
        <input type="number" {...register("contact")} />
        {errors.contact?.message}
        <label htmlFor="">Selecionar modulo</label>
        <select name="" id="" {...register("course_module")}>
          <option value="Primeiro modulo" defaultValue>
            Primeiro modulo
          </option>
          <option value="Segundo modulo">Segundo modulo</option>
          <option value="Terceiro modulo">Terceiro modulo</option>
          <option value="Quarto modulo">Quarto modulo</option>
          <option value="Quinto modulo">Quinto modulo</option>
          <option value="Sexto modulo">Sexto modulo</option>
        </select>
        {errors.course_module?.message}
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  );
};
