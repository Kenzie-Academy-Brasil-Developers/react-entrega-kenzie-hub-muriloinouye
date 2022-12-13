import React from "react";
import { DashListContainer } from "../../../styles";
import { TechCard } from "../TechCard";
import styles from "./dashList.module.css";

export const DashList = ({ techs, token, fetchUser }) => {
  return (
    <DashListContainer>
      {techs.map((obj, index) => (
        <TechCard obj={obj} key={index} token={token} fetchUser={fetchUser} />
      ))}
    </DashListContainer>
  );
};
