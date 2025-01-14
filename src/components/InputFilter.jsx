import { useGlobalContext } from "./GlobalContext";

export function Select() {
  // Prendo dal context sia il valore di select che la funzione per settarlo
  const { selectValue, setSelectValue } = useGlobalContext();

  // Callback sync value select
  const syncSelect = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <>
      <select
        name="obj_tipo"
        id="obj_tipo"
        value={selectValue}
        onChange={syncSelect}
        required
      >
        <option value="">Scegli tipo</option>
        <option value="movie">Film</option>
        <option value="tv">Serie Tv</option>
        <option value="entrambi">Entrambi</option>
      </select>
    </>
  );
}
