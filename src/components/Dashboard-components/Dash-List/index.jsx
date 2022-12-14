import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { DashListContainer } from "../../../styles";
import { TechCard } from "../TechCard";

export const DashList = () => {
  const { techs } = useContext(UserContext);
  return (
    <DashListContainer>
      {techs.map((obj, index) => (
        <TechCard obj={obj} key={index} />
      ))}
    </DashListContainer>
  );
};
