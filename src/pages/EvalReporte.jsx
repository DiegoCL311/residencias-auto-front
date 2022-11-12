import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@mui/material";

const rows = [
  {
    criterio: "Portada",
    id: "evaluacionPortada",
    valor: 2,
  },
  {
    criterio: "Agradecimientos",
    id: "evaluacionAgradecimientos",
    valor: 2,
  },
  {
    criterio: "Resumen",
    id: "evaluacionResumen",
    valor: 2,
  },
  {
    criterio: "Indice",
    id: "evaluacionIndice",
    valor: 2,
  },
  {
    criterio: "Introduccion",
    id: "evaluacionIntroduccion",
    valor: 2,
  },
  {
    criterio: "Problemas a resolver, priorizandolos",
    id: "evaluacionProblemas",
    valor: 5,
  },
  {
    criterio: "Objetivos",
    id: "evaluacionObjetivos",
    valor: 5,
  },
  {
    criterio: "Justificacion",
    id: "evaluacionJustificacion",
    valor: 0,
  },
  {
    criterio: "Marco teorico (fundamentos teoricos)",
    id: "evaluacionMarcoTeorico",
    valor: 10,
  },
  {
    criterio: "Procedimiento y descripcion de las actividades realizadas",
    id: "evaluacionProcedimiento",
    valor: 5,
  },
  {
    criterio:
      "Resultados, planos, graficos, prototipos, manuales, programas, analisis estadisticos, modelos aritmeticos, simulaciones, normatividades, regulaciones y restricciones, entre otros. Solo para proyectos que por su naturaleza lo requieran: estudio de mercado, estudio tecnico y estudio economico",
    id: "evaluacionResultados",
    valor: 45,
  },
  {
    criterio:
      "Conclusiones, recomendaciones y experiencia profesional adquirida",
    id: "evaluacionConclusiones",
    valor: 15,
  },
  {
    criterio: "Competencias desarrolladas y/o aplicadas",
    id: "evaluacionCompetencias",
    valor: 3,
  },
  {
    criterio: "Fuentes de informacion",
    id: "evaluacionFuentes",
    valor: 2,
  },
];

const useStyles = makeStyles((theme) =>
  createStyles({
    TR: {
      borderStyle: "solid!important",
      borderWidth: "1.02px!important",
      borderColor: "black!important",
    },
    TC: {
      borderStyle: "solid!important",
      borderWidth: "1.02px!important",
      borderColor: "black!important",
    },
  })
);

export function EvalReporte() {
  const classes = useStyles();
  const [datos, setDatos] = React.useState({});
  let total = 0;

  function obtenerTotal() {
    let total = 0;
    for (let i = 0; i < rows.length; i++) {
      let sum = parseInt(datos[rows[i].id]);
      total += sum ? sum : 0;
      console.log("total=", total);
    }
    return total ? total : 0;
  }

  return (
    <div>
      <Typography variant="h4" sx={{ textAlign: "center", my: "2vh" }}>
        Formato de evaluacion de reporte de residencias profesional
      </Typography>

      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
        Nombre del residente: $nombre Numero de control: $numeroControl
      </Typography>

      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
        Nombre del proyecto: $nombreProyecto
      </Typography>

      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
        Programa educativo: $programaEducativo
      </Typography>

      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
        Periodo de realizacion de la recidencia: $periodo
      </Typography>

      <Typography variant="subtitle1" sx={{ textAlign: "center", my: "2vh" }}>
        Calificacion final(promedio de ambas calificaciones): $calificacionFinal
      </Typography>

      <Paper elevation={6} sx={{ maxWidth: "80%", mx: "auto", my: "4vh" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.TR}>
                <TableCell className={classes.TC}>
                  <Typography variant="h6">Criterio a evaluar</Typography>
                </TableCell>
                <TableCell className={classes.TC} align="right">
                  <Typography variant="h6">Valor</Typography>
                </TableCell>
                <TableCell className={classes.TC} align="right">
                  <Typography variant="h6">Evaluacion</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.TC}>
              {rows.map((row) => (
                <TableRow
                  className={classes.TR}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className={classes.TC} scope="row">
                    {row.criterio}
                  </TableCell>
                  <TableCell className={classes.TC} align="right">
                    {row.valor}
                  </TableCell>
                  <TableCell className={classes.TC} align="right">
                    <TextField
                      value={datos[row.id]}
                      onChange={(e) => {
                        if (
                          e.target.value >= 0 &&
                          e.target.value <= row.valor
                        ) {
                          setDatos({ ...datos, [row.id]: e.target.value });
                        }
                        if (e.target.value < 0) {
                          setDatos({ ...datos, [row.id]: 0 });
                        }
                      }}
                      type="number"
                    />
                  </TableCell>
                </TableRow>
              ))}

              <TableCell className={classes.TC} scope="row">
                Calificacion total
              </TableCell>
              <TableCell className={classes.TC} align="right">
                100
              </TableCell>
              <TableCell className={classes.TC} align="right">
                {obtenerTotal()}
              </TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
