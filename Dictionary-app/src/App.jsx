import { useState } from "react";
import "./App.css";
import DefinitionCard from "./components/DefinitionCard";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [wordDefinition, setWordDefinition] = useState(null)

  return (
  <div className="app">
    <div className="search-bar-container">
    <SearchBar setWordDefinition={setWordDefinition}/>
    </div>
    <div>
            {wordDefinition ? <DefinitionCard definition={wordDefinition} /> : <p></p>}
        </div>
  </div>
  )
}

export default App;
