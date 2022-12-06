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
import axios from "axios";

import * as React from "react";

export function FormReportePreliminar(props) {
  const [formDatos, setFormDatos] = React.useState({
    //Datos de portada
    PortadaProyectoNombre: "",
    PortadaProyectoRealizacion: "",
    PortadaAsesoresInternosPropuestos: [],
    PortadaEmpresaNombre: "",

    //Datos del residente
    ResidenteNombre: "",
    ResidenteApellido: "",
    ResidenteNoControl: "",
    ResidenteCarrera: "",
    ResidenteDomicilio: "",
    ResidenteColonia: "",
    ResidenteCodigoPostal: "",
    ResidenteCiudad: "",
    ResidentePais: "",
    ResidenteSeguridadSocialAcudir: "",
    ResidenteNumerodeSeguridadSocial: "",
    ResidenteSexo: "",
    ResidenteCorreoInstitucional: "",
    ResidenteCorreoPersonal: "",
    ResidenteNumCelular: "",
    ResidenteTelefonoCasa: "",

    //Datos de la empresa
    EmpresaGiroRamoSector: "",
    EmpresaRFC: "",
    EmpresaDomicilio: "",
    EmpresaColonia: "",
    EmpresaCodigoPostal: "",
    EmpresaCiudad: "",
    EmpresaFax: "",
    EmpresaTelefono: "",
    EmpresaExt: "",
    EmpresaNombreTitular: "",
    EmpresaPestoTitular: "",

    //Datos del asesor externo
    AExternoNombre: "",
    AExternoPuesto: "",
    AExternoAreaEmpresa: "",
    AExternoCorreo: "",
    AExternoNumTelefono: "",

    //Datos del reporte preliminar
    RepPreObjetivoProyeto: "",
    RepPreObjetivosEspecificos: [],
    RepPreDelimitacionProyecto: "",
    RepPreJustificacionProyecto: "",
    RepPreCronogramaActividades: [],
  });

  const [asesoresInternos, setAsesoresInternos] = React.useState([]);

  React.useEffect(() => {
    async function fetchAsesores() {
      try {
        let response = await axios({
          method: "get",
          url: "http://localhost:3002/asesores_internos",
        });

        setAsesoresInternos(response.data.recordset);
        console.log(response.data.recordset);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAsesores();
  }, []);

  React.useEffect(() => {
    // Update the document title using the browser API
    console.log("UE", formDatos.PortadaAsesoresInternosPropuestos);
  });

  function changeValueDatos(params) {
    setFormDatos({
      ...formDatos,
      [params.target.id]: params.target.value,
    });
  }

  const [activeStep, setActiveStep] = React.useState(0);

  async function hazAlgo() {
    try {
      let response = await axios({
        method: "post",
        url: "http://localhost:3002/reportePreliminar",
        data: formDatos,
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
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
                  id="PortadaProyectoNombre"
                  value={formDatos.PortadaProyectoNombre}
                  label="Nombre del proyecto"
                  variant="standard"
                  onChange={changeValueDatos}
                  sx={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="PortadaProyectoRealizacion"
                  value={formDatos.PortadaProyectoRealizacion}
                  label="Como se realizará"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  id="PortadaAsesoresInternosPropuestos"
                  onChange={(event, value) => {
                    setFormDatos({
                      ...formDatos,
                      PortadaAsesoresInternosPropuestos: value,
                    });
                  }}
                  options={asesoresInternos}
                  getOptionLabel={(option) => option.NOMBRE}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="Asesores internos propuestos"
                      placeholder="Asesores internos"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="PortadaEmpresaNombre"
                  value={formDatos.PortadaEmpresaNombre}
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
                  id="ResidenteNombre"
                  value={formDatos.ResidenteNombre}
                  label="Nombre del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="ResidenteApellido"
                  value={formDatos.ResidenteApellido}
                  label="Apellido del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="ResidenteNoControl"
                  value={formDatos.ResidenteNoControl}
                  label="Numero de control"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="ResidenteCarrera"
                  value={formDatos.ResidenteCarrera}
                  label="Carrera del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="ResidenteDomicilio"
                  value={formDatos.ResidenteDomicilio}
                  label="Domicilio del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="ResidenteColonia"
                  value={formDatos.ResidenteColonia}
                  label="Colonia del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="ResidenteCodigoPostal"
                  value={formDatos.ResidenteCodigoPostal}
                  label="Codigo postal del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="ResidenteCiudad"
                  value={formDatos.ResidenteCiudad}
                  label="Ciudad del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="ResidentePais"
                  value={formDatos.ResidentePais}
                  label="Pais del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={5}>
                <TextField
                  id="ResidenteSeguridadSocialAcudir"
                  value={formDatos.ResidenteSeguridadSocialAcudir}
                  label="Seguridad social a la que acudir"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={5}>
                <TextField
                  id="ResidenteNumerodeSeguridadSocial"
                  value={formDatos.ResidenteNumerodeSeguridadSocial}
                  label="Numero de seguridad social"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={2}>
                <TextField
                  id="ResidenteSexo"
                  value={formDatos.ResidenteSexo}
                  label="Genero del residente"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="ResidenteCorreoInstitucional"
                  value={formDatos.ResidenteCorreoInstitucional}
                  label="Correo institucional"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="ResidenteCorreoPersonal"
                  value={formDatos.ResidenteCorreoPersonal}
                  label="Correo personal"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="ResidenteNumCelular"
                  value={formDatos.ResidenteNumCelular}
                  label="Numero de celular"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="ResidenteTelefonoCasa"
                  value={formDatos.ResidenteTelefonoCasa}
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
                  id="EmpresaGiroRamoSector"
                  value={formDatos.EmpresaGiroRamoSector}
                  label="Giro, ramo o sector"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="EmpresaRFC"
                  value={formDatos.EmpresaRFC}
                  label="RFC"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="EmpresaDomicilio"
                  value={formDatos.EmpresaDomicilio}
                  label="Domicilio"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="EmpresaColonia"
                  value={formDatos.EmpresaColonia}
                  label="Colonia de la empresa"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="EmpresaCodigoPostal"
                  value={formDatos.EmpresaCodigoPostal}
                  label="Codigo postal de la empresa"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="EmpresaCiudad"
                  value={formDatos.EmpresaCiudad}
                  label="Ciudad de la empresa"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="EmpresaFax"
                  value={formDatos.EmpresaFax}
                  label="Fax de la empresa"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="EmpresaTelefono"
                  value={formDatos.EmpresaTelefono}
                  label="Telefono de la empresa"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="EmpresaExt"
                  value={formDatos.EmpresaExt}
                  label="Extension de la empresa"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={8}>
                <TextField
                  id="EmpresaNombreTitular"
                  value={formDatos.EmpresaNombreTitular}
                  label="Nombre del titular"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="EmpresaPestoTitular"
                  value={formDatos.EmpresaPestoTitular}
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
                  id="AExternoNombre"
                  value={formDatos.AExternoNombre}
                  label="Nombre del asesor externo"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="AExternoPuesto"
                  value={formDatos.AExternoPuesto}
                  label="Puesto del asesor externo"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="AExternoAreaEmpresa"
                  value={formDatos.AExternoAreaEmpresa}
                  label="Area de la empresa del asesor externo"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="AExternoCorreo"
                  value={formDatos.AExternoCorreo}
                  label="Correo del asesor externo"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="AExternoNumTelefono"
                  value={formDatos.AExternoNumTelefono}
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
                  id="RepPreObjetivoProyeto"
                  value={formDatos.RepPreObjetivoProyeto}
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
                  id="RepPreObjetivosEspecificos "
                  options={formDatos.RepPreObjetivosEspecificos.map(
                    (option) => option
                  )}
                  value={formDatos.RepPreObjetivosEspecificos}
                  onChange={(event, value) => {
                    setFormDatos({
                      ...formDatos,
                      RepPreObjetivosEspecificos: value,
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
                  id="RepPreDelimitacionProyecto"
                  value={formDatos.RepPreDelimitacionProyecto}
                  label="Delimitacion del proyecto"
                  variant="standard"
                  sx={{ width: "100%" }}
                  onChange={changeValueDatos}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="RepPreJustificacionProyecto"
                  value={formDatos.RepPreJustificacionProyecto}
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
                  id="RepPreCronogramaActividades "
                  options={formDatos.RepPreCronogramaActividades.map(
                    (option) => option
                  )}
                  onChange={(event, value) => {
                    setFormDatos({
                      ...formDatos,
                      RepPreCronogramaActividades: value,
                    });
                  }}
                  value={formDatos.RepPreCronogramaActividades}
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
