import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 10000,
});

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const token = window.localStorage.getItem("@Token");
  const id = window.localStorage.getItem("@Id");

  async function autoLogin() {
    try {
      const fetch = await api.get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/dashboard");
      console.log(fetch);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    autoLogin();
  }, []);

  async function loginFetch(data) {
    try {
      const fetch = await api.post("/sessions", {
        ...data,
      });

      window.localStorage.clear();
      window.localStorage.setItem("@Token", fetch.data.token);
      window.localStorage.setItem("@Id", fetch.data.user.id);

      toast.success("Login efetuado com sucesso!", {
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
        navigate("/dashboard");
      }, 2600);
    } catch (err) {
      console.log(err);

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
    }
  }

  async function registerFetch(data) {
    try {
      const fetch = await api.post("users", { ...data });
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
    } catch (err) {
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
    }
  }

  const [techs, setTechs] = useState([]);
  const [user, setUser] = useState([]);

  async function fetchUser() {
    try {
      const fetch = await api.get(`users/${id}`);
      setTechs(fetch.data.techs);
      setUser(fetch.data);
      console.log(techs, user);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <UserContext.Provider
      value={{
        loginFetch,
        registerFetch,
        fetchUser,
        id,
        token,
        techs,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
