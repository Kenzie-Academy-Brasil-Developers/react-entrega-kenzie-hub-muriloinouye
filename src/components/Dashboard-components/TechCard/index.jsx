import axios from "axios";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { CardDiv, CardRightDiv } from "../../../styles";
import styles from "./techCard.module.css";

export const TechCard = ({ obj, token, fetchUser }) => {
  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  function removeTech() {
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${obj.id}`)
      .then((response) => {
        console.log(response);
        fetchUser();
      })
      .catch((err) => console.log(err));
  }

  return (
    <CardDiv>
      <h2>{obj.title}</h2>
      <CardRightDiv>
        <p>{obj.status}</p>
        <button onClick={() => removeTech()}>
          <FaRegTrashAlt />
        </button>
      </CardRightDiv>
    </CardDiv>
  );
};
