import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MyTemporaryDrawer } from "./MyDrawer";

export function Menu() {
  const [state, setState] = React.useState(false);

  function goLogIn() {}

  function toggleDrawer() {
    setState(!state);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <MyTemporaryDrawer open={state} onAction={toggleDrawer} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Residencias
          </Typography>
          <Button onClick={goLogIn} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
