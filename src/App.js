import "./App.css";
import Button from "@mui/material/Button";
import { Nombre, Nombre2 } from "./components/ComponenteBase";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained">Hello World</Button>
        <Nombre />
        <Nombre2 />
      </header>
    </div>
  );
}

export default App;
