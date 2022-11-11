import React from "react";
import TextField from "@mui/material/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SendIcon from '@mui/icons-material/Send';
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapForm: {
      display: "flex",
      justifyContent: "center",
      width: "95%",
      margin: `${theme.spacing(0)} auto`,
    },
    wrapText: {
      width: "100%",
    },
    button: {
      //margin: theme.spacing(1),
    },
  })
);

export const TextInput = () => {
  const classes = useStyles();
  return (
    <>
      <form className={classes.wrapForm} noValidate autoComplete="off">
        <TextField
          id="standard-text"
          label="Escribe un mensaje"
          className={classes.wrapText}
          //margin="normal"
        />
        <Button variant="contained" color="primary" className={classes.button}>
          <SendIcon />
        </Button>
      </form>
    </>
  );
};
