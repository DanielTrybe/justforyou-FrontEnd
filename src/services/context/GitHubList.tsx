import React, { createContext, useEffect, useState } from "react";
import api from "services/api/api";
// import { CardsContextProps } from "./interface";

import { CardsContextProps, DataCards } from "./types";

export const GitHubContext = createContext({} as CardsContextProps);

const GitHubProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardsList, setCardsList] = useState({} as Array<DataCards>);
  const [search, setSearch] = useState("DanielTrybe");
  const [loading, setLoading] = useState(false);

  const getUserGitHub = async () => {
    setLoading(true);
    // busca todaos repos
    try {
      const response = await api.get(`users/${search}/repos`);
      setCardsList(response.data);
    } catch {
      console.log("erro ao buscar usuário");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserGitHub();
  }, [search]);

  const values = {
    cardsList,
    search,
    setSearch,

    getUserGitHub,
    loading,
  };

  return (
    <GitHubContext.Provider value={values}>{children}</GitHubContext.Provider>
  );
};

export default GitHubProvider;
