import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";


export default function HorizontalLinearStepper(props) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={props.active}>
        {props.steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <React.Fragment>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={props.active === 0}
            onClick={props.onBack}
            sx={{ mr: 1 }}
          >
            Regresar
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />

          <Button
            onClick={
              props.active === props.steps.length ? props.onFinish : props.onNext
            }
          >
            {props.active === props.steps.length ? "Terminar" : "Siguiente"}
          </Button>
        </Box>
      </React.Fragment>
    </Box>
  );
}
