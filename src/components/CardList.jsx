import { useGlobalContext } from "./GlobalContext";
import { Card } from "./Card";

export function CardList() {
  const { dataFromApi } = useGlobalContext();

  // Console log per controllare i dati presi da API
  // console.log(dataFromApi);
  return (
    <div>
      {dataFromApi !== undefined &&
        dataFromApi.map((obj) => (
          <Card
            key={obj.id}
            title={obj.type === "movie" ? obj.title : obj.name}
            original_title={
              obj.type === "movie" ? obj.original_title : obj.original_name
            }
            original_language={obj.original_language}
            vote_average={obj.vote_average}
            type={obj.type}
            image={obj.poster_path}
          />
        ))}
    </div>
  );
}
