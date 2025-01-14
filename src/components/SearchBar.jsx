import { useGlobalContext } from "./GlobalContext";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies, fetchTvSeries } from "../services/API";
import { useEffect } from "react";

export function SearchBar() {
  // Prendo la searchQuery dal context globale
  const { searchQuery, setSearchQuery, setDataFromApi } = useGlobalContext();

  // Strutturo fetch API con useQuery
  const { data, refetch, isSuccess } = useQuery({
    queryKey: ["movies", searchQuery],
    queryFn: async () => {
      // Eseguo entrambe le chiamate API in parallelo
    const [movies, tv] = await Promise.all([
      fetchMovies(searchQuery),
      fetchTvSeries(searchQuery),
    ]);
    // Combino i due array
    return [...movies, ...tv];
    },
    enabled: false, // Disabilito il fetch automatico
  });

  useEffect(() => {
    // Se abbiamo preso data dal backend aggiorno la mia variabile state della data API
    if (isSuccess && data) {
      setDataFromApi(data);
    }
  }, [isSuccess, data, setDataFromApi]);

  // Sync input con query del context globale
  const syncInputQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={syncInputQuery}
        placeholder="Cerca un film..."
      />
      <button onClick={refetch}>Invia</button>
    </div>
  );
}
