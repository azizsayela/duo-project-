const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;
// Single Book Schema
const RentSchema = new mongoose.Schema({
  Name: String,
  LastName: String,
  Duration: String,
  Commandtype:String,
});

const Rentbook = mongoose.model("Rentbook", RentSchema);

module.exports = Rentbook;
