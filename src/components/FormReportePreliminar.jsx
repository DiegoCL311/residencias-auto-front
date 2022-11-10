import {
  Grid,
  Typography,
  Box,
  Paper,
  TextField,
  Autocomplete,
  Chip,
} from "@mui/material";
import * as React from "react";

export function FormReportePreliminar(props) {
  const [formDatosInicio, setFormDatosInicio] = React.useState({
    proyectoNombre: "",
    proyectoComoRealizarlo: "",
    asesoresInternosPropuestos: [],
    asesorExterno: "",
    empresaNombre: {},
  });

  const [formDatosResidente, setFormDatosResidente] = React.useState({
    nombreResidente: "",
    apellidoResidente: "",
    noControl: 0,
    carreraResidente: "",
    domicilioResidente: "",
    coloniaResidente: "",
    codigoPostalResidente: 0,
    ciudadResidente: "",
    paisResidente: "",
    seguridadSocialAcudir: "",
    numerodeSeguridadSocial: 0,
    sexo: "",
    correoInstitucional: "",
    numCelular: 0,
    correoPersonal: "",
    telefonoCasa: 0,
  });

  const [formDatosEmpresa, setFormDatosEmpresa] = React.useState({
    giroRamoSector: "",
    rfcEmpresa: "",
    domicilioEmpresa: "",
    coloniaEmpresa: "",
    codigoPostalEmpresa: 0,
    ciudadEmpresa: "",
    faxEmpresa: 0,
    telefonoEmpresa: 0,
    extEmpresa: 0,
    nombreTitularEmpresa: "",
    puestoTitular: "",
  });

  const [formDatosAsesorExterno, setformDatosAsesorExterno] = React.useState({
    nombreAExterno: "",
    puestoAExterno: "",
    areaEmpresaAExterno: "",
    correoAExterno: "",
    numTelefonoAExterno: 0,
  });

  const [formDatosReporte, setformDatosReporte] = React.useState({
    objetivoProyeto: "",
    objetivosEspecificos: [],
    delimitacionProyecto: "",
    justificacionProyecto: "",
    cronogramaActividades: [],
  });

  function changeValueDatosInicio(params) {
    setFormDatosInicio({
      ...formDatosInicio,
      [params.target.id]: params.target.value,
    });

    console.table(formDatosInicio);
  }

  return (
    <Grid>
      <Paper>
        <Typography variant="h4">Datos de portada</Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              id="proyectoNombre"
              label="Nombre del proyecto"
              variant="filled"
              onChange={changeValueDatosInicio}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              onChange={changeValueDatosInicio}
              id="proyectoComoRealizarlo"
              label="Como se realizará"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <Autocomplete
              onChange={(event, value) => {
                setFormDatosInicio({
                  ...formDatosInicio,
                  asesoresInternosPropuestos: value,
                });
              }}
              multiple
              variant="filled"
              id="asesoresInternosPropuestos"
              options={formDatosInicio.asesoresInternosPropuestos.map(
                (option) => option
              )}
              freeSolo
              disabled={formDatosInicio.asesoresInternosPropuestos.length > 2}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="filled"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="filled"
                  label="Asesores externos propuestos"
                  placeholder="Asesor Externo"
                  disabled={
                    formDatosInicio.asesoresInternosPropuestos.length > 2
                  }
                />
              )}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              onChange={changeValueDatosInicio}
              id="asesorExterno"
              label="Nombre del asesor externo"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              onChange={changeValueDatosInicio}
              id="empresaNombre"
              label="Nombre de la empresa"
              variant="filled"
            />
          </Grid>
        </Grid>
        <br />
        <br />
        <Typography variant="h4">Datos del residente</Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField
              id="nombreResidente"
              label="Nombre del residente"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="apellidoResidente"
              label="Apellido del residente"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="noControl"
              label="Numero de control"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="carreraResidente"
              label="Carrera del residente"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="domicilioResidente"
              label="Domicilio del residente"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="coloniaResidente"
              label="Colonia del residente"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="codigoPostalResidente"
              label="Codigo postal del residente"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="ciudadResidente: "
              label="Ciudad del residente"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="paisResidente: "
              label="Pais del residente"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="seguridadSocialAcudir"
              label="Seguridad social a la que acudir"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="numerodeSeguridadSocial"
              label="Numero de seguridad social"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="sexo"
              label="Genero del residente"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="correoInstitucional"
              label="Correo institucional"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="correoPersonal"
              label="Correo personal"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="numCelular"
              label="Numero de celular"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="telefonoCasa"
              label="Telefono de casa"
              variant="filled"
            />
          </Grid>
        </Grid>

        <Typography variant="h4">Datos de la empresa</Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField
              id="giroRamoSector"
              label="Giro, ramo o sector"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField id="rfcEmpresa" label="RFC" variant="filled" />
          </Grid>

          <Grid item xs={4}>
            <TextField id="domicilioEmpresa" label="RFC" variant="filled" />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="coloniaEmpresa"
              label="Colonia de la empresa"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="codigoPostalEmpresa"
              label="Codigo postal de la empresa"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="ciudadEmpresa"
              label="Ciudad de la empresa"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="faxEmpresa"
              label="Fax de la empresa"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="telefonoEmpresa"
              label="Telefono de la empresa"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="extEmpresa"
              label="Extension de la empresa"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="nombreTitularEmpresa"
              label="Nombre del titular"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="puestoTitular"
              label="Puesto del titular"
              variant="filled"
            />
          </Grid>
        </Grid>

        <Typography variant="h4">Datos del asesor externo</Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField
              id="nombreAExterno"
              label="Nombre del asesor externo"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="puestoAExterno"
              label="Puesto del asesor externo"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="areaEmpresaAExterno"
              label="Area de la empresa del asesor externo"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="correoAExterno"
              label="Correo del asesor externo"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="numTelefonoAExterno"
              label="Numero de telefono del asesor externo"
              variant="filled"
            />
          </Grid>
        </Grid>

        <Typography variant="h4">Datos del reporte</Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField
              id="objetivoProyeto"
              label="Objetivo del proyecto"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <Autocomplete
              multiple
              variant="filled"
              id="objetivosEspecificos "
              options={formDatosReporte.objetivosEspecificos.map(
                (option) => option
              )}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="filled"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="filled"
                  label="Objetivos especificos"
                  placeholder="Asesor Externo"
                  multiline
                />
              )}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="delimitacionProyecto"
              label="Delimitacion del proyecto"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="justificacionProyecto"
              label="Justificacion del proyecto"
              variant="filled"
            />
          </Grid>

          <Grid item xs={4}>
            <Autocomplete
              multiple
              aria-multiline
              variant="filled"
              id="cronogramaActividades "
              options={formDatosReporte.cronogramaActividades.map(
                (option) => option
              )}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="filled"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="filled"
                  label="Cronograma de actividades"
                  placeholder="Asesor Externo"
                  disabled={
                    formDatosInicio.asesoresInternosPropuestos.length > 2
                  }
                />
              )}
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
