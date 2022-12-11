import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          toast.success("Conta criada com sucesso", {
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
            navigate("/");
          }, 2500);
        }
      })
      .catch((err) => {
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
    <form onSubmit={handleSubmit(formSubmit)} className={styles.form}>
      <header className={styles.formHeader}>
        <h2 className={`${styles.headerTitle} title1`}>Crie sua conta</h2>
        <p className={`${styles.headerText} headline`}>
          Rapido e gratis, vamos nessa
        </p>
      </header>
      <div className={styles.inputDiv}>
        <label htmlFor="" className={styles.label}>
          Nome
        </label>
        <input
          type="text"
          {...register("name")}
          className={styles.input}
          placeholder="Digite aqui seu nome"
        />
        {errors.name && (
          <p className={styles.warning}>{errors.name?.message}</p>
        )}

        <label htmlFor="" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          className={styles.input}
          placeholder="Digite aqui seu email"
        />
        {errors.email && (
          <p className={styles.warning}>{errors.email?.message}</p>
        )}

        <label htmlFor="" className={styles.label}>
          Senha
        </label>
        <input
          type="password"
          {...register("password")}
          className={styles.input}
          placeholder="Digite aqui sua senha"
        />
        {errors.password && (
          <p className={styles.warning}>{errors.password?.message}</p>
        )}
        <label htmlFor="" className={styles.label}>
          Confirmar senha
        </label>
        <input
          type="password"
          className={styles.input}
          placeholder="Digite novamente sua senha"
        />
        <label htmlFor="" className={styles.label}>
          Bio
        </label>
        <input
          type="text"
          {...register("bio")}
          className={styles.input}
          placeholder="Fale sobre você"
        />
        {errors.bio && <p className={styles.warning}>{errors.bio?.message}</p>}

        <label htmlFor="" className={styles.label}>
          Contato
        </label>
        <input
          type="number"
          {...register("contact")}
          className={styles.input}
          placeholder="Opção de contato"
        />
        {errors.contact && (
          <p className={styles.warning}>{errors.contact?.message}</p>
        )}
        <label htmlFor="" className={styles.label}>
          Selecionar modulo
        </label>
        <select
          name=""
          id=""
          {...register("course_module")}
          className={styles.select}
        >
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
        </select>
        <button type="submit" className={styles.registerButton}>
          Cadastrar
        </button>
      </div>
    </form>
  );
};
