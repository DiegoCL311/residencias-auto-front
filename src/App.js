import "./App.css";
import { Menu } from "./components/Menu";
import ComponenteBase, { Nombre } from "./components/ComponenteBase";
import { Login } from "./components/Login";
import { FormReportePreliminar } from "./components/FormReportePreliminar";
import { LandingPage } from "./components/LandingPage";
import { Login } from "./components/Login";
import {
  browserRouter,
  Switch,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route
            path="/ReportePreliminar"
            element={<FormReportePreliminar />}
          />
          <Route path="/" element={<LandingPage />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
