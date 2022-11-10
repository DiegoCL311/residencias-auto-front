import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArticleIcon from "@mui/icons-material/Article";

export function MyTemporaryDrawer(props) {
  function list() {
    return (
      <Box
        sx={{ width: 250 }}
        onClick={props.onAction}
        onKeyDown={props.onAction}
      >
        <List>
          {[
            "Reporte X",
            "Reporte Y",
            "Reporte Z",
            "Reporte A",
            "Reporte B",
            "Reporte C",
            "Reporte D",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }

  return (
    <div>
      <React.Fragment key={"left"}>
        <Drawer anchor={"left"} open={props.open} onClose={props.onAction}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
