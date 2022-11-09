import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function Login(props) {
    const [Ncontrol, setNcontrol] = React.useState(18170268);
   // setNcontrol(18170307)
  
    return (
      <div>
        <br />
        <TextField id="outlined-basic" label="Correo Institucional" variant="outlined" />
        <br /><br />
        <TextField
          id="outlined-password-input" label="Contraseña" type="password" autoComplete="current-password"/>


        <p>{Ncontrol}</p>
      </div>
    );
}