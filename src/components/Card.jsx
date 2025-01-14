import Flag from "react-world-flags";
import { languageToFlag } from "../utilities/Bandiere";
import { renderStars } from "./Stelline";

// Url base del immagine
const baseUrlImage = "https://image.tmdb.org/t/p/";
// Dimensione immagine
const w = "w500";

export function Card({
  title,
  original_title,
  original_language,
  vote_average,
  type,
  image,
}) {
  return (
    <div>
      {/* Tipo film o serie tv */}
      <span>{type.toUpperCase()}</span>
      {/* Titolo principale */}
      <h3>{title || "N/A"}</h3>
      {/* Titolo originale */}
      {original_title && (
        <p>
          <strong>Titolo Originale:</strong> {original_title}
        </p>
      )}
      {/* Lingua originale */}
      {original_language && (
        <p>
          Lingua Originale:{" "}
          <Flag
            code={languageToFlag[original_language]}
            alt={original_language}
            style={{ width: 30, height: 20 }}
          />
        </p>
      )}
      {/* Immagine poster */}
      {image ? (
        <img src={`${baseUrlImage}${w}${image}`} alt={`${title}`} />
      ) : (
        <img src="/Immagine poster non trovata.png" alt="Placeholder image" />
      )}

      {/* Valutazione */}
      {vote_average && (
        <p>
          {renderStars(vote_average)} - {(vote_average / 2).toFixed(2)}/5 
        </p>
      )}
    </div>
  );
}
