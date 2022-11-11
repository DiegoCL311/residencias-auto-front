import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export function Login(props) {
    const [Ncontrol, setNcontrol] = React.useState(18170268);

    const [password, setPassword] = React.useState(1234);

    return (
       
        <div>
      <div className="login">
        <br />
        <img src="logoLogin.png " alt="" height={300} width = {300}/>
        <br /><br /> <br />
        <TextField id="outlined-basic" label="Correo Institucional" variant="outlined" />
        <br /><br />
        <TextField id="outlined-password-input" label="Contraseña" type="password" autoComplete="current-password"/>
        <br /><br />
        <Button variant="contained">Login</Button>
        </div>
      </div>

    );
}