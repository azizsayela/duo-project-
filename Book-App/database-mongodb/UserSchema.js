const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;
// Single movie Schema
const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  role: {
    type: String,
    default: "logged",
  },
});

const Useer = mongoose.model("Useer", UserSchema);

module.exports = Useer;
