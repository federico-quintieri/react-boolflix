import { GlobalContextProvider } from "./components/GlobalContext";
import { CardList } from "./components/CardList";
import { SearchBar } from "./components/SearchBar";
import { Select } from "./components/InputFilter";

function App() {
  return (
    <GlobalContextProvider>
      <SearchBar />
      <Select />
      <CardList />
    </GlobalContextProvider>
  );
}

export default App;
