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
  
  export function FormReporteFinal(props) {
    const [formDatos, setFormDatos] = React.useState({
      portada: "",
      agradecimientos: "",
      resumen: [],
      indice: "",
      introduccion: "",
      descripcionEmpresa: "",
      probleamasResolver: "",
      objetivos: "",
      justificacion: "",
      marcoTeorico: "",
      procedimiento: "",
      resultados: "",
      actividadesSociales: "",
      conclusiones: "",
      competencias: "",
      fuenteInformacion: "",
      anexos: "",
      registrosProduccion: "",
     
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
          {activeStep === 0 ? (
            <div>
              <Typography variant="h4">Datos Preliminares</Typography>
              <Grid container spacing={4} sx={{ minHeight: "30vh" }}>
                <Grid item xs={12}>
                  <TextField
                    id="portada"
                    value={formDatos.portada}
                    label="Portada"
                    multiline
                    variant="standard"
                    onChange={changeValueDatos}
                    sx={{ width: "100%" }}
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    id="agradecimientos"
                    value={formDatos.agradecimientos}
                    label="Agradecimientos"
                    variant="standard"
                    multiline
                    sx={{ width: "100%" }}
                    onChange={changeValueDatos}
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <Autocomplete
                    onChange={(event, value) => {
                      if (value.length < 4) {
                        setFormDatos({
                          ...formDatos,
                          asesoresInternosPropuestos: value,
                        });
                      }
                    }}
                    value={formDatos.resumen}
                    multiple
                    variant="standard"
                    id="resumen"
                    options={formDatos.resumen.map(
                      (option) => option
                    )}
                    freeSolo
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip
                          variant="standard"
                          label={option}
                          {...getTagProps({ index })}
                        />
                      ))
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        multiline
                        label="Resumen"
                        placeholder="Resumen"
                      />
                    )}
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    id="indice"
                    value={formDatos.indice}
                    label="Indice"
                    variant="standard"
                    multiline
                    sx={{ width: "100%" }}
                    onChange={changeValueDatos}
                  />
                </Grid>
              </Grid>
            </div>
          ) : (
            ""
          )}
  
          {activeStep === 1 ? (
            <div>
              <Typography variant="h4"> Generalidades del proyecto </Typography>
              <Grid container spacing={4} sx={{ minHeight: "30vh" }}>
                <Grid item xs={12}>
                  <TextField
                    id="introduccion"
                    value={formDatos.introduccion}
                    label="Introduccion"
                    variant="standard"
                    multiline
                    sx={{ width: "100%" }}
                    onChange={changeValueDatos}
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    id="descripcionEmpresa"
                    value={formDatos.descripcionEmpresa}
                    label="Descripción de la empresa u organización y del puesto o área del trabajo del estudiante"
                    variant="standard"
                    multiline
                    sx={{ width: "100%" }}
                    onChange={changeValueDatos}
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    id="problemasResolver"
                    value={formDatos.probleamasResolver}
                    label="Problemas a resolver, priorizándolos."
                    variant="standard"
                    multiline
                    sx={{ width: "100%" }}
                    onChange={changeValueDatos}
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    id="objetivos"
                    value={formDatos.objetivos}
                    label="Objetivos (General y Específicos)."
                    variant="standard"
                    multiline
                    sx={{ width: "100%" }}
                    onChange={changeValueDatos}
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    id="justificacion"
                    value={formDatos.justificacion}
                    label="Justificación"
                    variant="standard"
                    multiline
                    sx={{ width: "100%" }}
                    onChange={changeValueDatos}
                  />
                </Grid>  
              </Grid>
            </div>
          ) : (
            ""
          )}
  
          {activeStep === 2 ? (
            <div>
              <Typography variant="h4">Marco Teorico</Typography>
              <Grid container spacing={4} sx={{ minHeight: "30vh" }}>
                <Grid item xs={12}>
                  <TextField
                    id="marcoTeorico"
                    value={formDatos.marcoTeorico}
                    label="Marco Teorico"
                    variant="standard"
                    multiline
                    sx={{ width: "100%" }}
                    onChange={changeValueDatos}
                  />
                </Grid>
              </Grid>
            </div>
          ) : (
            ""
          )}
          {activeStep === 3 ? (
            <div>
              <Typography variant="h4">Desarrollo</Typography>
              <Grid container spacing={4} sx={{ minHeight: "30vh" }}>
                <Grid item xs={12}>
                  <TextField
                    id="procedimiento"
                    value={formDatos.procedimiento}
                    label="Procedimiento y descripción de las actividades realizadas"
                    variant="standard"
                    multiline
                    sx={{ width: "100%" }}
                    onChange={changeValueDatos}
                  />
                </Grid>
              </Grid>
            </div>
          ) : (
            ""
          )}
          {activeStep === 4 ? (
            <div>
              <Typography variant="h4">Resultados</Typography>
              <Grid container spacing={4} sx={{ minHeight: "30vh" }}>
                <Grid item xs={12}>
                  <TextField
                    id="resultados"
                    value={formDatos.resultados}
                    label="Resultados,planos,gráficas,prototipos,manuales,programas,análisis estadísticos,modelos matemáticos,simulaciones,normatividades,regulaciones y restricciones, entre otros. Solo para proyectos que por su naturaleza lo requieran: estudio de mercado,estudio técnico y estudio económico."
                    variant="standard"
                    multiline
                    sx={{ width: "100%" }}
                    onChange={changeValueDatos}
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    id="actividadesSociales"
                    value={formDatos.actividadesSociales}
                    label="Justificación"
                    variant="standard"
                    multiline
                    sx={{ width: "100%" }}
                    onChange={changeValueDatos}
                  />
                </Grid> 
              </Grid>
            </div>
          ) : (
            ""
          )}
          {activeStep === 5 ? (
            <div>
              <Typography variant="h4">Conclusiones</Typography>
              <Grid container spacing={4} sx={{ minHeight: "30vh" }}>
                <Grid item xs={12}>
                  <TextField
                    id="conclusiones"
                    value={formDatos.conclusiones}
                    label="Conclusiones de Proyecto, recomendaciones y experiencia     personal profesional adquirida."
                    variant="standard"
                    multiline
                    sx={{ width: "100%" }}
                    onChange={changeValueDatos}
                  />
                </Grid>
              </Grid>
            </div>
          ) : (
            ""
          )}
            {activeStep === 6 ? (
            <div>
              <Typography variant="h4">Competencias Desarrolladas</Typography>
              <Grid container spacing={4} sx={{ minHeight: "30vh" }}>
                <Grid item xs={12}>
                  <TextField
                    id="competencias"
                    value={formDatos.competencias}
                    label="Competencias desarrolladas y/o aplicadas."
                    variant="standard"
                    multiline
                    sx={{ width: "100%" }}
                    onChange={changeValueDatos}
                  />
                </Grid>
              </Grid>
            </div>
          ) : (
            ""
          )}
            {activeStep === 7 ? (
            <div>
              <Typography variant="h4">Fuentes de Informacion</Typography>
              <Grid container spacing={4} sx={{ minHeight: "30vh" }}>
                <Grid item xs={12}>
                  <TextField
                    id="fuenteInformacion"
                    value={formDatos.fuenteInformacion}
                    label="Fuentes de informacion"
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
            {activeStep === 8 ? (
            <div>
              <Typography variant="h4">Anexos</Typography>
              <Grid container spacing={4} sx={{ minHeight: "30vh" }}>
                <Grid item xs={12}>
                  <TextField
                    id="anexos"
                    value={formDatos.anexos}
                    label="Anexos (carta de autorización por parte de la empresa u organización para la titulación y otros si es necesario)."
                    variant="standard"
                    multiline
                    sx={{ width: "100%" }}
                    onChange={changeValueDatos}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="registrosProduccion"
                    value={formDatos.registrosProduccion}
                    label="Registros de productos (patentes, derechos de autor, compra- venta del proyecto, etc.)."
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
          {activeStep > 8 ? (
            <div>
              <Typography variant="h4">Enviar y terminar</Typography>
            </div>
          ) : (
            ""
          )}
          <br />
          <br />
          <MyStepper
            onNext={handleNext}
            onBack={handleBack}
            onFinish={hazAlgo}
            active={activeStep}
            steps={[
              "Datos preliminares",
              "Generalidades del proyecto",
              "Marco teorico",
              "Desarrollo",
              "Datos de Resultados",
              "Conclusiones",
              "Competencias desarrolladas",
              "Fuentes de informacion",
              "Anexos",
            ]}
          />
        </Paper>
      </Grid>
    );
  }
  