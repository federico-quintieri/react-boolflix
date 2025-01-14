import { useGlobalContext } from "./GlobalContext";
import { Card } from "./Card";

export function CardList() {
  const { dataFromApi } = useGlobalContext();

  return (
    <div>
      {dataFromApi.results !== undefined && dataFromApi.results.map((movie) => (
        <Card
          key={movie.id}
          title={movie.title}
          original_title={movie.original_title}
        />
      ))}
    </div>
  );
}
