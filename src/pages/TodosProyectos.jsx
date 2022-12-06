import { Grid, Typography, Paper, Button } from "@mui/material";
import MyStepper from "../components/MyStepper";

import * as React from "react";
import { width } from "@mui/system";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function TodosProyectos() {
  const [formDatos, setFormDatos] = React.useState({
    asesoriaNumero: "",
    tipoAsesoria: "",
    temaAsesoria: [],
    solucion: "",
  });

  const [proyectos, setProyectos] = React.useState();

  useEffect(() => {
    async function fetchProyectos() {
      try {
        let response = await axios({
          method: "get",
          url: "http://localhost:3002/proyectos",
        }).then((response) => {
          setProyectos(response.data.recordset);
        });

        //setProyectos(...proyectos, response.data.recordset);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProyectos();
  }, []);

  return (
    <Grid
      container
      spacing={2}
      sx={{ alignItems: "center", justifyContent: "center" }}
    >
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
        <Typography variant="h4" sx={{ textAlign: "center", my: "2vh" }}>
          Evaluacion de Proyectos
        </Typography>

        <Grid container sx={{ alignItems: "center", justifyContent: "center" }}>
          <Grid item xs={6}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              ID del proyecto
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Titulo del proyecto
            </Typography>
          </Grid>
        </Grid>
        <br />
        <br />
        {
          proyectos &&
            proyectos.map((proyecto) => (
              <Grid
                container
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid black",
                }}
              >
                <Grid item xs={5}>
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    {proyecto.ID_PROYECTO}
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    {proyecto.ProyectoTITULO}
                  </Typography>
                </Grid>
                <Button
                  component={Link}
                  to={`/EvaluacionAcademia/${proyecto.ID_PROYECTO}`}
                >
                  Evaluar
                </Button>
              </Grid>
            ))
          //: "Cargando..."
        }
      </Paper>
    </Grid>
  );
}
