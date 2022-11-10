import "./App.css";
import { Menu } from "./components/Menu";
import ComponenteBase, { Nombre } from "./components/ComponenteBase";
import { Login } from "./components/Login";
import { FormReportePreliminar } from "./components/FormReportePreliminar";

function App() {
  return (
    <div className="App">
        <Menu />

        <Login />

    </div>
  );
}

export default App;
