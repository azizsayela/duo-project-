import React from "react";
import { Button } from "@mui/material";

const OneCommand = (props) => {
  return (
    <div className="command" style={{ textAlign: " center" }}>
      <p> Name :{props.command.Name}</p>
      <p>Command type :{props.command.Commandtype}</p>
      <p>Duration {props.command.Duration}</p>
      <Button style={{ color: "darkblue" }}>Confirm</Button>
    </div>
  );
};
export default OneCommand;
