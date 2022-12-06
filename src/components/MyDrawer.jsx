import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
//import ArticleIcon from "@mui/icons-material/Article";
import { Link } from "react-router-dom";

export function MyTemporaryDrawer(props) {
  function list() {
    return (
      <Box
        sx={{ width: 250 }}
        onClick={props.onAction}
        onKeyDown={props.onAction}
      >
        <List>
          {[
            { title: "Reporte preliminar", route: "/reportePreliminar" },
            { title: "Evaluacion reporte de residencias profesional", route: "/evalReporteResidenciaProfesional" },
            { title: "Evaluacion y seguimiento de residencia profesional Asesor Interno", route: "/formSeguimientoAsesorInterno" },
            { title: "Evaluacion y seguimiento de residencia profesional Asesor Externo", route: "/formSeguimientoAsesorExterno" },
            { title: "Registro de Asesoria", route: "/formRegistroAsesoria" },
            { title: "Reporte Final", route: "/reporteFinal" },
            { title: "Evaluacion Academia", route: "/EvaluacionAcademia" },
            { title: "Proyectos de Residencias", route: "/TodosProyectos" },
            { title: "Banco de Proyectos", route: "/BancoProyectos" },
            { title: "Chat con asesor", route: "/chat" },
          ].map((nav, index) => (
            <ListItem key={nav.title} disablePadding>
              <ListItemButton component={Link} to={nav.route}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary={nav.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }

  return (
    <div>
      <React.Fragment key={"left"}>
        <Drawer anchor={"left"} open={props.open} onClose={props.onAction}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
