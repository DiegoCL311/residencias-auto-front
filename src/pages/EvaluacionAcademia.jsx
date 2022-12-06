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
  import Button from '@mui/material/Button';
  import * as React from "react";
import { green } from "@mui/material/colors";


 
  export function EvaluacionAcademia(props) {
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
        Evaluación Del Proyecto
      </Typography>

      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
        $NombreEmpresa
      </Typography>
      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
        $NombreAseorExterno
      </Typography>
      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
        $objetivosProyecto
      </Typography>

      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
        $objetivosEspecificos
      </Typography>

      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
       $delimitacionProyecto
      </Typography>

      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
        $justificacionProyecto
      </Typography>

      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
        $cronogramaActividades
      </Typography>

          

     
              <Button color="warning" variant="contained" >Rechazar</Button>
              
    
              <div className="button1">
              <Button color="primary" variant="contained" >Aceptar</Button>
              </div>


            
        </Paper>
      </Grid>
    );
  }
  