import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@mui/material";
import { TextInput } from "../components/TextInput";
import { MessageLeft, MessageRight } from "../components/Message";


const useStyles = makeStyles((Theme) =>
  createStyles({
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    container: {
      width: "90vw",
      height: "90vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      height: "calc( 100% - 80px )"
    }
  })
);

export function Chat() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Paper className={classes.paper} zDepth={2} elevation={12}>
        <Paper id="style-1" className={classes.messagesBody}>
          <MessageLeft
            message="Mensaje1 Largo -------------------------------------------------------------------"
            timestamp="MM/DD 00:00"
            photoURL=""
            displayName="Asesor"
            avatarDisp={true}
          />
          <MessageLeft
            message="Mensaje2 corto"
            timestamp="MM/DD 00:00"
            photoURL=""
            displayName="Asesor"
            avatarDisp={false}
          />
          <MessageRight
            message="Mensaje residente"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Residente"
            avatarDisp={true}
          />
          <MessageRight
            message="Mensaje residente 2"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Residente"
            avatarDisp={true}
          />
        </Paper>
        <TextInput />
      </Paper>
    </div>
  );
}
