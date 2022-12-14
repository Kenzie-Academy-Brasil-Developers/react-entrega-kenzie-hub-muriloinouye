import React, { useContext, useState } from "react";
import Modal from "react-modal";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { GrAdd } from "react-icons/gr";

import {
  AddButton,
  AddContainer,
  AddForm,
  AddHeader,
  Button,
  ButtonPrimary,
  ButtonSmaller,
  Input,
  Label,
  LabelModal,
  ModalHeader,
  Select,
} from "../../../styles";
import { UserContext } from "../../../contexts/UserContext";
import { TechContext } from "../../../contexts/TechContext";

Modal.setAppElement("#root");

export const AddTech = () => {
  const { token, fetchUser } = useContext(UserContext);
  const { techPost } = useContext(TechContext);
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

  async function formSubmit(data) {
    await techPost(data);
    await fetchUser();
    closeModal();
  }

  return (
    <AddContainer>
      <AddHeader>
        <h3>Tecnologias</h3>
        <AddButton onClick={openModal} className="openModal">
          +
        </AddButton>
      </AddHeader>
      <Modal
        isOpen={modalState}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <ModalHeader>
          <h2>Cadastrar tecnologia</h2>
          <button onClick={closeModal}>X</button>
        </ModalHeader>
        <AddForm onSubmit={handleSubmit(formSubmit)}>
          <LabelModal htmlFor="title">Nome</LabelModal>
          <Input
            type="text"
            id="title"
            {...register("title")}
            required
            placeholder="Digite o nome"
          />
          <LabelModal htmlFor="status">Selecionar status</LabelModal>
          <Select name="" id="status" {...register("status")}>
            <option value="Iniciante" defaultValue>
              Iniciante
            </option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avan??ado">Avan??ado</option>
          </Select>
          <ButtonPrimary marginTop="10" type="submit">
            Cadastrar Tecnologia
          </ButtonPrimary>
        </AddForm>
      </Modal>
    </AddContainer>
  );
};
