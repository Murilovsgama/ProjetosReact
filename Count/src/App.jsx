import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  return (
    
      <div>
        <h1>Contadora React</h1>
        <h2>{value}</h2>

        <button className="botoes" onClick={() => setValue(value + 1)}>
          Acresentar
        </button>
        <button className="botoes" onClick={() => setValue(value - 1)}>
          Subtrair
        </button>
        <button className="botoes" onClick={() => setValue(0)}>
          Resetar
        </button>
      </div>
    
  );
}

export default App;
