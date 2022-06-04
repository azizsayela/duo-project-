import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  let navigate = useNavigate();
  console.log(props);
  const [useremail, setuseremail] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const login = (email, password) => {
    axios
      .post("/user/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data.user);
        if (response.data.user.role === "admin") {
          props.setadminView(true);
          props.userView(false);
          navigate("/");
        } else {
          props.userView(true);
          props.setadminView(false);
          navigate("/");
        }
      });
  };

  return (
    <div class="form-container">
      <center>
        <h1>LogIn</h1>
      </center>
      <form class="register-form">
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => {
            setuseremail(e.target.value);
          }}
        />

        <input
          id="Password"
          class="form-field"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setuserPassword(e.target.value);
          }}
        />

        <button
          class="form-field"
          type="button"
          onClick={() => {
            login(useremail, userPassword);
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
