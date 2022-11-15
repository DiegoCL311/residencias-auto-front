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
  
  import * as React from "react";
  
  export function FormRegistroAsesoria(props) {
    const [formDatos, setFormDatos] = React.useState({
      asesoriaNumero: "",
      tipoAsesoria: "",
      temaAsesoria: [],
      solucion: "",
    });
  
    function changeValueDatos(params) {
      setFormDatos({
        ...formDatos,
        [params.target.id]: params.target.value,
      });
    }
  
    const [activeStep, setActiveStep] = React.useState(0);
  
    function hazAlgo() {
      console.table(formDatos);
    }
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    
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
        <Typography variant="h4" sx={{ textAlign: "center", my: "2vh" }}>
        Registro de Asesoria
      </Typography>

      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
        Fecha y Lugar: 
      </Typography>
      
      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
        Departamento Academico
      </Typography>

      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
        Nombre del residente: $nombre Numero de control: $numeroControl
      </Typography>

      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
       Numero de control
      </Typography>

      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
        Nombre del proyecto: $nombreProyecto
      </Typography>

      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
        Periodo de realizacion de la recidencia: $periodo
      </Typography>

      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
        Empresa, organismo o dependencia
      </Typography>
          {activeStep === 0 ? (
            <div>
           
            <Grid container spacing={4} sx={{ minHeight: "30vh" }}>
              <Grid item xs={12}>
                <TextField
                  id="asesoriaNumero"
                  value={formDatos.asesoriaNumero}
                  label="Asesoria Numero"
                  variant="standard"
                  onChange={changeValueDatos}
                  sx={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="tipoAsesoria"
                  value={formDatos.tipoAsesoria}
                  label="Tipo de asesoria"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="temaAsesoria"
                  value={formDatos.temaAsesoria}
                  label="Temas a asesorar"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="solucion"
                  value={formDatos.solucion}
                  label="Solucion Recomendada"
                  multiline
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>
            </Grid>
          </div>
          ) : (
            ""
          )}

        </Paper>
      </Grid>
    );
  }
  