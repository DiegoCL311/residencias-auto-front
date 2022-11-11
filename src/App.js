import "./App.css";
import { Menu } from "./components/Menu";
import { Login } from "./pages/Login";
import { Chat } from "./pages/Chat";
import { FormReportePreliminar } from "./pages/FormReportePreliminar";
import { LandingPage } from "./pages/LandingPage";
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

          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
