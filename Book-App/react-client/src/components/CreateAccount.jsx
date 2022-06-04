import React from "react";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [uname, setuname] = useState("");
  const [uemail, setuemail] = useState("");
  const [upassword, setupassword] = useState("");

  const signup = (username, email, password) => {
    axios
      .post("/user/signin", {
        username,
        email,
        password,
      })
      .then(() => console.log("ahla wa sahla"));
  };

  return (
    <div>
      <div class="form-container">
        <center>
          <h1>Sign Up</h1>
        </center>
        <form class="register-form">
          <input
            id="username"
            class="form-field"
            type="text"
            placeholder="Your Name .."
            name="username"
            onChange={(e) => {
              setuname(e.target.value);
            }}
          />

          <input
            id="email"
            class="form-field"
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              setuemail(e.target.value);
            }}
          />

          <input
            id="Password"
            class="form-field"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setupassword(e.target.value);
            }}
          />

          <button
            class="form-field"
            type="button"
            onClick={() => {
              signup(uname, uemail, upassword);
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
