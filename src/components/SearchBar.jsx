import { useGlobalContext } from "./GlobalContext";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies, fetchTvSeries } from "../services/API";
import { useEffect } from "react";
import { Select } from "./InputFilter";

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
    <div className="flex justify-center items-center">
      <div className="flex flex-row items-center gap-4 p-4 ">
        <Select />
        <input
          type="text"
          value={searchQuery}
          onChange={syncInputQuery}
          placeholder="Cerca un film..."
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={refetch}
          className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Invia
        </button>
      </div>
    </div>
  );
}
