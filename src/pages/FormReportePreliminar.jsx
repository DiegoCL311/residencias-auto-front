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

export function FormReportePreliminar(props) {
  const [formDatos, setFormDatos] = React.useState({
    proyectoNombre: "",
    proyectoComoRealizarlo: "",
    asesoresInternosPropuestos: [],
    asesorExterno: "",
    empresaNombre: "",
    nombreResidente: "",
    apellidoResidente: "",
    noControl: "",
    carreraResidente: "",
    domicilioResidente: "",
    coloniaResidente: "",
    codigoPostalResidente: "",
    ciudadResidente: "",
    paisResidente: "",
    seguridadSocialAcudir: "",
    numerodeSeguridadSocial: "",
    sexo: "",
    correoInstitucional: "",
    numCelular: "",
    correoPersonal: "",
    telefonoCasa: "",
    giroRamoSector: "",
    rfcEmpresa: "",
    domicilioEmpresa: "",
    coloniaEmpresa: "",
    codigoPostalEmpresa: "",
    ciudadEmpresa: "",
    faxEmpresa: "",
    telefonoEmpresa: "",
    extEmpresa: "",
    nombreTitularEmpresa: "",
    puestoTitular: "",
    nombreAExterno: "",
    puestoAExterno: "",
    areaEmpresaAExterno: "",
    correoAExterno: "",
    numTelefonoAExterno: "",
    objetivoProyeto: "",
    objetivosEspecificos: [],
    delimitacionProyecto: "",
    justificacionProyecto: "",
    cronogramaActividades: [],
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
            <Typography variant="h4">Datos de portada</Typography>
            <Grid container spacing={4} sx={{ minHeight: "30vh" }}>
              <Grid item xs={12}>
                <TextField
                  id="proyectoNombre"
                  value={formDatos.proyectoNombre}
                  label="Nombre del proyecto"
                  variant="standard"
                  onChange={changeValueDatos}
                  sx={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="proyectoComoRealizarlo"
                  value={formDatos.proyectoComoRealizarlo}
                  label="Como se realizará"
                  variant="standard"
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
                  value={formDatos.asesoresInternosPropuestos}
                  multiple
                  variant="standard"
                  id="asesoresInternosPropuestos"
                  options={formDatos.asesoresInternosPropuestos.map(
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
                      label="Asesores internos propuestos"
                      placeholder="Asesor interno"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="asesorExterno"
                  value={formDatos.asesorExterno}
                  label="Nombre del asesor externo"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="empresaNombre"
                  value={formDatos.empresaNombre}
                  label="Nombre de la empresa"
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
            <Typography variant="h4">Datos del residente</Typography>
            <Grid container spacing={4} sx={{ minHeight: "30vh" }}>
              <Grid item xs={6}>
                <TextField
                  id="nombreResidente"
                  value={formDatos.nombreResidente}
                  label="Nombre del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="apellidoResidente"
                  value={formDatos.apellidoResidente}
                  label="Apellido del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="noControl"
                  value={formDatos.noControl}
                  label="Numero de control"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="carreraResidente"
                  value={formDatos.carreraResidente}
                  label="Carrera del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="domicilioResidente"
                  value={formDatos.domicilioResidente}
                  label="Domicilio del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="coloniaResidente"
                  value={formDatos.coloniaResidente}
                  label="Colonia del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="codigoPostalResidente"
                  value={formDatos.codigoPostalResidente}
                  label="Codigo postal del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="ciudadResidente"
                  value={formDatos.ciudadResidente}
                  label="Ciudad del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="paisResidente"
                  value={formDatos.paisResidente}
                  label="Pais del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={5}>
                <TextField
                  id="seguridadSocialAcudir"
                  value={formDatos.seguridadSocialAcudir}
                  label="Seguridad social a la que acudir"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={5}>
                <TextField
                  id="numerodeSeguridadSocial"
                  value={formDatos.numerodeSeguridadSocial}
                  label="Numero de seguridad social"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={2}>
                <TextField
                  id="sexo"
                  value={formDatos.sexo}
                  label="Genero del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="correoInstitucional"
                  value={formDatos.correoInstitucional}
                  label="Correo institucional"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="correoPersonal"
                  value={formDatos.correoPersonal}
                  label="Correo personal"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="numCelular"
                  value={formDatos.numCelular}
                  label="Numero de celular"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="telefonoCasa"
                  value={formDatos.telefonoCasa}
                  label="Telefono de casa"
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

        {activeStep === 2 ? (
          <div>
            <Typography variant="h4">Datos de la empresa</Typography>
            <Grid container spacing={4} sx={{ minHeight: "30vh" }}>
              <Grid item xs={6}>
                <TextField
                  id="giroRamoSector"
                  value={formDatos.giroRamoSector}
                  label="Giro, ramo o sector"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="rfcEmpresa"
                  value={formDatos.rfcEmpresa}
                  label="RFC"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="domicilioEmpresa"
                  value={formDatos.domicilioEmpresa}
                  label="RFC"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="coloniaEmpresa"
                  value={formDatos.coloniaEmpresa}
                  label="Colonia de la empresa"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="codigoPostalEmpresa"
                  value={formDatos.codigoPostalEmpresa}
                  label="Codigo postal de la empresa"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="ciudadEmpresa"
                  value={formDatos.ciudadEmpresa}
                  label="Ciudad de la empresa"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="faxEmpresa"
                  value={formDatos.faxEmpresa}
                  label="Fax de la empresa"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="telefonoEmpresa"
                  value={formDatos.telefonoEmpresa}
                  label="Telefono de la empresa"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="extEmpresa"
                  value={formDatos.extEmpresa}
                  label="Extension de la empresa"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={8}>
                <TextField
                  id="nombreTitularEmpresa"
                  value={formDatos.nombreTitularEmpresa}
                  label="Nombre del titular"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="puestoTitular"
                  value={formDatos.puestoTitular}
                  label="Puesto del titular"
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
        {activeStep === 3 ? (
          <div>
            <Typography variant="h4">Datos del asesor externo</Typography>
            <Grid container spacing={4} sx={{ minHeight: "30vh" }}>
              <Grid item xs={12}>
                <TextField
                  id="nombreAExterno"
                  value={formDatos.nombreAExterno}
                  label="Nombre del asesor externo"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="puestoAExterno"
                  value={formDatos.puestoAExterno}
                  label="Puesto del asesor externo"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="areaEmpresaAExterno"
                  value={formDatos.areaEmpresaAExterno}
                  label="Area de la empresa del asesor externo"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="correoAExterno"
                  value={formDatos.correoAExterno}
                  label="Correo del asesor externo"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="numTelefonoAExterno"
                  value={formDatos.numTelefonoAExterno}
                  label="Numero de telefono del asesor externo"
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
        {activeStep === 4 ? (
          <div>
            <Typography variant="h4">Datos del reporte</Typography>
            <Grid container spacing={4} sx={{ minHeight: "30vh" }}>
              <Grid item xs={12}>
                <TextField
                  id="objetivoProyeto"
                  value={formDatos.objetivoProyeto}
                  label="Objetivo del proyecto"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  variant="standard"
                  id="objetivosEspecificos "
                  options={formDatos.objetivosEspecificos.map(
                    (option) => option
                  )}
                  value={formDatos.objetivosEspecificos}
                  onChange={(event, value) => {
                    setFormDatos({
                      ...formDatos,
                      objetivosEspecificos: value,
                    });
                  }}
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
                      label="Objetivos especificos"
                      placeholder="Objetivos especificos"
                      multiline
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="delimitacionProyecto"
                  value={formDatos.delimitacionProyecto}
                  label="Delimitacion del proyecto"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="justificacionProyecto"
                  value={formDatos.justificacionProyecto}
                  label="Justificacion del proyecto"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  aria-multiline
                  variant="standard"
                  id="cronogramaActividades "
                  options={formDatos.cronogramaActividades.map(
                    (option) => option
                  )}
                  onChange={(event, value) => {
                    setFormDatos({
                      ...formDatos,
                      cronogramaActividades: value,
                    });
                  }}
                  value={formDatos.cronogramaActividades}
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
                      label="Cronograma de actividades"
                      placeholder="Cronograma de actividades"
                    />
                  )}
                />
              </Grid>
            </Grid>
          </div>
        ) : (
          ""
        )}
        {activeStep > 4 ? (
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
            "Datos de portada",
            "Datos del residente",
            "Datos de la empresa",
            "Datos del asesor externo",
            "Datos del reporte",
          ]}
        />
      </Paper>
    </Grid>
  );
}
