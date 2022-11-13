import "./App.css";
import { Menu } from "./components/Menu";
import { Login } from "./pages/Login";
import { Chat } from "./pages/Chat";
import { FormReportePreliminar } from "./pages/FormReportePreliminar";
import { LandingPage } from "./pages/LandingPage";
import { EvalReporte } from "./pages/EvalReporte.jsx";

import { Switch, Route, BrowserRouter, Routes } from "react-router-dom";

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

          <Route path="/chat" element={<Chat />} />

          <Route path="/evalReporteResidenciaProfesional" element={<EvalReporte />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//test

export default App;
