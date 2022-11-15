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
    criterio: "Asiste puntualmente en el horario establecido",
    id: "seguimientoAinternoAsistencia",
    valor: 5,
  },
  {
    criterio: "Trabaja en equipo y se comunica de forma efectiva (oral y escrita)",
    id: "seguimientoAinternoEquipo",
    valor: 10,
  },
  {
    criterio: "Tiene iniciativa para colaborar",
    id: "seguimientoAinternoIniciativa",
    valor: 5,
  },
  {
    criterio: "Propone mejoras al proyecto",
    id: "seguimientoAinternoMejoras",
    valor: 10,
  },
  {
    criterio: "Cumple con los objetivos correspondientes al proyecto",
    id: "seguimientoAinternoObjetivos",
    valor: 15,
  },
  {
    criterio: "Es ordenado y cumple satisfactoriamente con las actividades encomendadas en los tiempos del cronograma.",
    id: "seguimientoAinternoOrdenado",
    valor: 15,
  },
  {
    criterio: "Demuestra liderazgo en su actuar",
    id: "seguimientoAinternoLiderazgo",
    valor: 10,
  },
  {
    criterio: "Demuestra conocimiento en el área de su especialidad",
    id: "seguimientoAinternoConocimiento",
    valor: 20,
  },
  {
    criterio: "Demuestra un comportamiento ético (es disciplinado, acata órdenes, respeta a sus compañeros de trabajo, entre otros)",
    id: "seguimientoAinternoEtico",
    valor: 10,
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

export function FormSeguimientoAsesorInterno() {
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
        Formato de evaluacion y seguimiento de residencia profesional
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
