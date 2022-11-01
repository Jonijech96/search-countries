import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Countries } from "./Components/Countries";
import { Counter } from "./Components/Counter";
import {SearchCountry} from "./Components/SearchCountry"

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setIsVisible(!isVisible)}>Mostrar/Ocultar</button>
      {isVisible && <SearchCountry />}
      {/* <Counter /> */}
      
    </div>
  );
}

export default App;
