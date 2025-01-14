import { GlobalContextProvider } from "./components/GlobalContext";
import { CardList } from "./components/CardList";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <GlobalContextProvider>
      <SearchBar />
      <CardList />
    </GlobalContextProvider>
  );
}

export default App;
