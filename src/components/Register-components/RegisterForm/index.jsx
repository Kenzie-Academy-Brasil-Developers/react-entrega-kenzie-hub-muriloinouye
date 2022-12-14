import React, { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import {
  ButtonPrimary,
  Form,
  FormRegisterHeader,
  FormRegisterHeaderP,
  FormRegisterHeaderTitle,
  FormRegisterInputDiv,
  Input,
  Label,
  Select,
  Warning,
} from "../../../styles";
import { UserContext } from "../../../contexts/UserContext";

export const RegisterForm = () => {
  const { registerFetch } = useContext(UserContext);

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
    registerFetch(data);
  }

  return (
    <Form onSubmit={handleSubmit(formSubmit)}>
      <FormRegisterHeader>
        <FormRegisterHeaderTitle>Crie sua conta</FormRegisterHeaderTitle>
        <FormRegisterHeaderP>Rapido e gratis, vamos nessa</FormRegisterHeaderP>
      </FormRegisterHeader>
      <FormRegisterInputDiv>
        <Label htmlFor="name">Nome</Label>
        <Input
          type="text"
          id="name"
          {...register("name")}
          placeholder="Digite aqui seu nome"
        />
        {errors.name && <Warning>{errors.name?.message}</Warning>}

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          {...register("email")}
          placeholder="Digite aqui seu email"
        />
        {errors.email && <Warning>{errors.email?.message}</Warning>}

        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          id="password"
          {...register("password")}
          placeholder="Digite aqui sua senha"
        />
        {errors.password && <Warning>{errors.password?.message}</Warning>}
        <Label htmlFor="">Confirmar senha</Label>
        <Input type="password" placeholder="Digite novamente sua senha" />
        <Label htmlFor="">Bio</Label>
        <Input type="text" {...register("bio")} placeholder="Fale sobre você" />
        {errors.bio && <Warning>{errors.bio?.message}</Warning>}

        <Label htmlFor="contact">Contato</Label>
        <Input
          type="number"
          id="contact"
          {...register("contact")}
          placeholder="Opção de contato"
        />
        {errors.contact && <Warning>{errors.contact?.message}</Warning>}
        <Label htmlFor="course_module">Selecionar modulo</Label>
        <Select name="" id="course_module" {...register("course_module")}>
          <option value="Primeiro modulo (Introdução ao Frontend)" defaultValue>
            Primeiro modulo
          </option>
          <option value="Segundo modulo (Frontend avançado)">
            Segundo modulo
          </option>
          <option value="Terceiro modulo (React)">Terceiro modulo</option>
          <option value="Quarto modulo (Introdução ao Backend)">
            Quarto modulo
          </option>
          <option value="Quinto modulo (Backend avançado)">
            Quinto modulo
          </option>
          <option value="Sexto modulo (Softskills)">Sexto modulo</option>
        </Select>
        <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
      </FormRegisterInputDiv>
    </Form>
  );
};
