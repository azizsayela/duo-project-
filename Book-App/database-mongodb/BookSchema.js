const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;
// Single Book Schema
const BookSchema = new mongoose.Schema({
  title: String,
  book_image: String,
  description: String,
  author: String,
  contributor: String,
  Price: String,
});

const Books = mongoose.model("Books", BookSchema);

module.exports = Books;
