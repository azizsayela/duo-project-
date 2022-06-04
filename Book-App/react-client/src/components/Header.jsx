import React from "react";
import AppBar from "@mui/material/AppBar";
// import Button from "@mui/material/Button";
import { Tabs, Tab, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Link, navigate } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <AppBar position="sticky" style={{ "background-color": "brown" }}>
        <Toolbar>
          <Typography>
            <Tabs>
              <Link to="/createBook">
                <Tab label="Add a product "></Tab>
              </Link>
              <Link to="/login">
                <Tab label="Login"></Tab>
              </Link>
              <Link to="/Register">
                <Tab label="Create Account"></Tab>
              </Link>
              <Link to="/">
                <Tab label="Books"></Tab>
              </Link>
              <Link to="/Commands">
                {props.admin && <Tab label="Commandlist"></Tab>}
              </Link>
            </Tabs>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
