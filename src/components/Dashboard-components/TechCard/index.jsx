import axios from "axios";
import React, { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { TechContext } from "../../../contexts/TechContext";
import { UserContext } from "../../../contexts/UserContext";
import { CardDiv, CardRightDiv } from "../../../styles";

export const TechCard = ({ obj }) => {
  const { fetchUser } = useContext(UserContext);
  const { techRemove } = useContext(TechContext);

  async function removeTech() {
    await techRemove(obj.id);
    await fetchUser();
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
