import { createContext, useState, useContext } from "react";

// Crea un context per lo stato globale
const GlobalContext = createContext();

// Stati iniziali per il context
const initialState = {
  searchQuery: "",
  isLoading: false,
  error: null,
  dataFromApi:[],
  setDataFromApi: () => {},
  setSearchQuery: () => {},
  setIsLoading: () => {},
  setError: () => {},
};

// Componente GlobalContext per fornire lo stato ai figli
export function GlobalContextProvider({ children }) {
  // Faccio gli state globali impostati ad un valore di default
  const [searchQuery, setSearchQuery] = useState(initialState.searchQuery);
  const [isLoading, setIsLoading] = useState(initialState.isLoading);
  const [error, setError] = useState(initialState.error);
  const [dataFromApi,setDataFromApi] = useState(initialState.dataFromApi);

  // Oggetto che rendo disponibile con il context
  const objContext = {
    searchQuery,
    isLoading,
    error,
    dataFromApi,
    setDataFromApi,
    setSearchQuery,
    setIsLoading,
    setError,
  };

  // Wrappo i children nel context rendendo disponibile objContext
  return (
    <GlobalContext.Provider value={objContext}>
      {children}
    </GlobalContext.Provider>
  );
}

// Funzione per utilizzare il context
export function useGlobalContext() {
  const objFromContext = useContext(GlobalContext);
  return objFromContext;
}
