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


 
  export function BancoProyectos(props) {
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
            width: "80%",
            height: "500px",
            overflow: "auto",
          }}
        >  


<table class="tftable" border="1">
<tr><th>NOMBRE DE LA EMPRESA</th><th>NOMBRE DEL PROYECTO</th><th>N° DE RESIDENTES</th><th>INGENIERIA</th><th>NOMBRE DEL REPONSABLE DEL PROYECTO</th><th>CORREO</th><th>TELEFONO</th><th>DIRECCION</th></tr>
<tr><td>PÁGINAS WEB CULIACÁN</td><td>PROGRAMACIÓN WEB PARA PLUGINS WORDPRESS Y APPS SHOPIFY </td><td>3</td><td>INGENIERÍA EN SISTEMAS COMPUTACIONALES</td><td>LEONEL FRANCISCO GALVAN LOBATO</td><td>contacto@paginaswebculiacan.net</td><td>6674157897</td><td>COLONIA BACHIGUALATO, CARRETERA BENITO JUARES, DENTRO DEL PARQUE INDUSTRIAL LA COSTA</td></tr>
<tr><td>COPPEL</td><td>DISEÑO DE ARQUITECTURA DE PROCESOS DE COPPEL</td><td>3</td><td>INGENIERÍA INDUSTRIAL</td><td>ALICIA CAZARES NIEBLA</td><td>alicia.cazares@coppel.com</td><td>6672023272</td><td>CALLE REPÚBLICA NO. 2855 PONIENTE COL. RECURSOS HIDRÁULICOS 80105 CULIACÁN, SIN. MÉXICO</td></tr>
<tr><td>SENSOR SISTEMAS EN TECNOLOGIA </td><td>PROYECTO INTEGRAL PARA GENERAR SISTEMAS DE ACCESOS EN CONDOMINOS</td><td>2</td><td>INGENIERÍA MECATRONICA</td><td>ESMERALDA ZAZUETA NUÑEZ</td><td>proyectos@sensormexico.com</td><td>6677130101</td><td>AV. REPUBLICA DE BRASIL #1305 COL STASE CP. 80020, CULIACAN, SIN. MEXICO</td></tr>
<tr><td>DEVELOP</td><td>PROYECTO DE ESPEJOS EN TECNOLOGIAS UNITY VR DEVELOPER</td><td>3</td><td>INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN YCOMUNICACIONES</td><td>JUAN MENDEZ HERRERA</td><td>jmendez@develop.com.mx</td><td>5519003502</td><td>PUEBLA 46, COL. ROMA NORTE, ALCANDIA CUAUHTEMOC, CDMX</td></tr>
<tr><td>FOCUS CENTRO DE ENTRENAMIENTO</td><td>PROCESOS, PROCEDIMIENTOS Y RELACIONES CON SUCURSALES FRANQUICIA</td><td>2</td><td>INGENIERÍA EN GESTIÓN EMPRESARIAL</td><td>JOSE CARLOS PARDINI CAMPOS</td><td>Focusculiacan@gmail.com</td><td>6677745833</td><td>DESCARTES #790 COL. VILLA UNIVERSIDAD</td></tr>
</table>


            
        </Paper>
      </Grid>
    );
  }
  