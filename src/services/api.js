import axios from "axios";

const API_KEY = "b8a16097727cc2e3a10c4828e7be9b95";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    // Configurazione dei parametri della richiesta:
    params: {
      api_key: API_KEY, // La chiave API necessaria per l'autenticazione.
      query, // La query di ricerca inserita dall'utente.
    },
  });
  return response.data;
};
