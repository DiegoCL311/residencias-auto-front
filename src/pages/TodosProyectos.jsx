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
import { width } from "@mui/system";
  
  export function TodosProyectos(props) {
    const [formDatos, setFormDatos] = React.useState({
      asesoriaNumero: "",
      tipoAsesoria: "",
      temaAsesoria: [],
      solucion: "",
    });
  
  
    
    
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
        <Typography variant="h4" sx={{ textAlign: "center", my: "2vh" }}>Evaluacion de Proyectos</Typography>
      
      <Grid container spacing={4} sx={{ minHeight: "30vh" }}>
      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh", width:"50%",marginLeft:"10%" }}>$IDProyecto </Typography>
      
      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>$Titulo</Typography>
      </Grid>
     
          

        </Paper>
      </Grid>
    );
  }