import axios from "axios";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
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
    <div className={styles.cardDiv}>
      <h2 className={`${styles.title} title1`}>{obj.title}</h2>
      <div className={styles.rightDiv}>
        <p className={`${styles.status} headline`}>{obj.status}</p>
        <button onClick={() => removeTech()} className={styles.removeButton}>
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};
