import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Select } from "@mui/material";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";

const RentBook = (props) => {
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [commandtype, setcommandtype] = useState("");
  const [duration, setduration] = useState("");

  const handleChange = (change) => {
    setcommandtype(change);
  };
  const handleDurationChange = (change) => {
    setduration(change);
  };

  const sendCommand = (name, lastname, commandtype, duration) => {
    axios
      .post("/api/books/commande", {
        Name: name,
        LastName: lastname,
        Commandtype: commandtype,
        Duration: duration,
      })
      .then((result) => {
        console.log("command sent");
      });
  };

  return (
    <div>
      <div className="card">
        <h1 className="book-title">{props.filterdBook[0].title}</h1>
        <img
          src={props.filterdBook[0].book_image}
          style={{ width: "240px" }}
        ></img>
        <p className="book"> Author : {props.filterdBook[0].author}</p>

        <p className="book"> Crew :{props.filterdBook[0].description}</p>
        <p className="book">
          {" "}
          contributor : {props.filterdBook[0].contributor}
        </p>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue=""
              onChange={(e) => {
                setname(e.target.value);
                console.log(name);
              }}
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Lastname"
              onChange={(e) => {
                setlastname(e.target.value);
                console.log(lastname);
              }}
            />
            <InputLabel id="demo-simple-select-label">Command/Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={commandtype}
              label="Command type"
              onChange={(e) => {
                handleChange(e.target.value);
                console.log(commandtype);
              }}
            >
              <MenuItem value={"Rent"}>Buy</MenuItem>
              <MenuItem value={"Buy"}>Rent</MenuItem>
            </Select>
            {commandtype === "Buy" && (
              <InputLabel id="demo-simple-select-label">
                Command/duration
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={duration}
                  label="Command duration"
                  onChange={(e) => {
                    console.log("hi");
                    handleDurationChange(e.target.value);
                    console.log(duration);
                  }}
                >
                  <MenuItem value={"1 day"}>1 Day</MenuItem>
                  <MenuItem value={"2 days"}>2 Days</MenuItem>
                  <MenuItem value={"3 days"}>3 Days</MenuItem>
                  <MenuItem value={"4 days"}>4 Days</MenuItem>
                  <MenuItem value={"5 days"}>5 Days</MenuItem>
                  <MenuItem value={"6 days"}>6 Days</MenuItem>
                </Select>
              </InputLabel>
            )}{" "}
            <br />
            <Button
              onClick={() => {
                sendCommand(name, lastname, commandtype, duration);
                navigate("/");
              }}
            >
              Confirm
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default RentBook;
