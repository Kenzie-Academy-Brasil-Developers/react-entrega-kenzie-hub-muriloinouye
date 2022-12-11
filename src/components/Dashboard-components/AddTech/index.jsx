import React, { useState } from "react";
import Modal from "react-modal";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { GrAdd } from "react-icons/gr";

import styles from "./addTech.module.css";

Modal.setAppElement("#root");

export const AddTech = ({ token, fetchUser }) => {
  const [modalState, setModalState] = useState(false);

  function openModal() {
    setModalState(true);
  }

  function closeModal() {
    setModalState(false);
  }

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const formSchema = yup.object().shape({
    title: yup.string().required("Titulo obrigatorio"),
    status: yup.string().required("Selecione seu status"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  function formSubmit(data) {
    console.log(data);
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", { ...data })
      .then((response) => {
        console.log(response);
        fetchUser();
        closeModal();
      });
  }

  return (
    <div className={`${styles.addContainer} container`}>
      <header className={styles.header}>
        <h3 className={styles.headerTitle}>Tecnologias</h3>
        <button onClick={openModal} className={styles.openModal}>
          +
        </button>
      </header>
      <Modal
        isOpen={modalState}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <header className={styles.modalHeader}>
          <h2 className={`${styles.headerTitle} title1`}>
            Cadastrar tecnologia
          </h2>
          <button onClick={closeModal} className={styles.closeButton}>
            X
          </button>
        </header>
        <form onSubmit={handleSubmit(formSubmit)} className={styles.form}>
          <label htmlFor="title" className={`${styles.label} headline`}>
            Nome
          </label>
          <input
            type="text"
            id="title"
            {...register("title")}
            required
            placeholder="Digite o nome"
            className={styles.input}
          />
          <label htmlFor="status" className={`${styles.label} headline`}>
            Selecionar status
          </label>
          <select
            name=""
            id="status"
            {...register("status")}
            className={styles.select}
          >
            <option value="Iniciante" defaultValue>
              Iniciante
            </option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit" className={`${styles.submitButton} title1`}>
            Cadastrar Tecnologia
          </button>
        </form>
      </Modal>
    </div>
  );
};
