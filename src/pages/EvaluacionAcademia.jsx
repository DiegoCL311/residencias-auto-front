import {
  Grid,
  Typography,
  Box,
  Paper,
  TextField,
  Autocomplete,
  Chip,
} from "@mui/material";
import MyStepper from "../components/MyStepper";
import Button from "@mui/material/Button";
import * as React from "react";
import { green } from "@mui/material/colors";
import { Route, Link, Routes, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export function EvaluacionAcademia(props) {
  const params = useParams();

  const [proyecto, setProyecto] = React.useState({});

  useEffect(() => {
    async function fetchProyecto() {
      try {
        let response = await axios({
          method: "get",
          url: "http://localhost:3002/proyectos/" + params.id,
        }).then((response) => {
          setProyecto(response.data.recordset[0]);
        });

        //setProyectos(...proyectos, response.data.recordset);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProyecto();
  }, []);

  return (
    <Grid>
      <Paper
        elevation={8}
        sx={{
          px: 16,
          py: 4,
          mx: "auto",
          my: "4%",
          width: "60%",
          height: "100%",
          overflow: "auto",
        }}
      >
        {/*
        
        "ID_PROYECTO": 1,
        "ProyectoTITULO": "asd",
        "ProyectoRealizacion": "asd",
        "ID_ASESOR_EXTERNO": 8,
        "ID_EMPRESA": 11,
        "ID_STATUS": 1,
        "EMPRESA_NOMBRE": "Nombre",
        "EXTERNO_NOMBRE": "Elvis tek"
        
        */}
        <Typography variant="h4" sx={{ textAlign: "center", my: "2vh" }}>
          Evaluación Del Proyecto
        </Typography>

        <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
          nombre de la empresa: {proyecto.EMPRESA_NOMBRE}
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
          Nombre del asesor externo: {proyecto.EXTERNO_NOMBRE}
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
          Titulo del proyecto: {proyecto.ProyectoTITULO}
        </Typography>

        <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
          Realizacion del propyecto: {proyecto.ProyectoRealizacion}
        </Typography>

        <Grid container>
          <Grid item xs={6}>
            <Button color="primary" variant="contained">
              Aceptar
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button color="warning" variant="contained">
              Rechazar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
