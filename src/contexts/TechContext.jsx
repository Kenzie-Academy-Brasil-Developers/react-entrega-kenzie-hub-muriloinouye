import { createContext } from "react";
import { api } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const token = window.localStorage.getItem("@Token");

  async function techPost(data) {
    try {
      const fetch = await api.post(
        "users/techs",
        { ...data },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function techRemove(id) {
    try {
      const fetch = await api.delete(`/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <TechContext.Provider value={{ techPost, techRemove }}>
      {children}
    </TechContext.Provider>
  );
};
