import "./App.css";
import { Menu } from "./components/Menu";
import { Login } from "./pages/Login";
import { Chat } from "./pages/Chat";
import { FormReportePreliminar } from "./pages/FormReportePreliminar";
import { LandingPage } from "./pages/LandingPage";
import { EvalReporte } from "./pages/EvalReporte.jsx";
import { FormSeguimientoAsesorInterno } from "./pages/FormSeguimientoAsesorInterno";
import { FormSeguimientoAsesorExterno } from "./pages/FormSeguimientoAsesorExterno";
import { Switch, Route, BrowserRouter, Routes } from "react-router-dom";
import { FormReporteFinal } from "./pages/FormReporteFinal";
import { FormRegistroAsesoria } from "./pages/FormRegistroAsesoria";

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

          <Route path="/formSeguimientoAsesorInterno" element={<FormSeguimientoAsesorInterno />} />

          <Route path="/formSeguimientoAsesorExterno" element={<FormSeguimientoAsesorExterno />} />

          <Route path="/reporteFinal" element={<FormReporteFinal />} />

          <Route path="/formRegistroAsesoria" element={<FormRegistroAsesoria/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//test

export default App;
