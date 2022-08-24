import React, { createContext, useEffect, useState } from "react";
import api from "services/api/api";
// import { CardsContextProps } from "./interface";

import { CardsDetailsContextProps, BranchList } from "./types";

export const CardsDetailsContext = createContext(
  {} as CardsDetailsContextProps
);

const CardDetailsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardDetail, setCardDetail] = useState({} as BranchList);
  const [loading, setLoading] = useState(false);

  const getOneRepo = async (owner: string, repo: string) => {
    setLoading(true);
    // busca um card
    try {
      const response = await api.get(`repos/${owner}/${repo}/branches`);

      setCardDetail(response.data);
    } catch {
      console.log("erro ao buscar carta");
    } finally {
      setLoading(false);
    }
  };

  const values = { cardDetail, getOneRepo, loading };

  return (
    <CardsDetailsContext.Provider value={values}>
      {children}
    </CardsDetailsContext.Provider>
  );
};

export default CardDetailsProvider;
