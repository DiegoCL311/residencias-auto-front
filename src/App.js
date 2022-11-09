import "./App.css";
import Button from "@mui/material/Button";
import { Menu } from "./components/Menu";
import ComponenteBase, { Nombre } from "./components/ComponenteBase";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
        <Menu />

        <Login />
    </div>
  );
}

export default App;
