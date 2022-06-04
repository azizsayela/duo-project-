import React from "react";
import { Tabs, Tab, Toolbar, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Createbook = () => {
  let navigate = useNavigate();
  //those states will be used in the axios data object to pass a post request
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [Price, setPrice] = useState("");
  const [contributor, setContributor] = useState("");

  const createNewBook = (
    title,
    author,
    description,
    image,
    contributor,
    price
  ) => {
    axios
      .post("/api/books/create", {
        title: title,
        author: author,
        description: description,
        book_image: image,
        contributor: contributor,
        Price: price,
      })
      .then(() => {
        console.log("book succefully added");
      });
  };

  return (
    <div className="create-book-container">
      <h className="add-book"> Update book to Your Collection</h>

      <Box
        className="boxx"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Add the book title"
          variant="outlined"
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(title);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Add the book Author"
          variant="outlined"
          onChange={(e) => {
            setAuthor(e.target.value);
            console.log(author);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Add the book description"
          variant="outlined"
          onChange={(e) => {
            setDescription(e.target.value);
            console.log(description);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Add the book Cover"
          variant="outlined"
          onChange={(e) => {
            setImage(e.target.value);
            console.log(image);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Add the book Contributor"
          variant="outlined"
          onChange={(e) => {
            setContributor(e.target.value);
            console.log(contributor);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Add the book Price"
          variant="outlined"
          onChange={(e) => {
            setPrice(e.target.value);
            console.log(Price);
          }}
        />
      </Box>
      <Button
        className="update-btn"
        variant="contained"
        onClick={() => {
          createNewBook(title, author, description, image, contributor, Price);
          navigate("/");
        }}
      >
        Add book
      </Button>
    </div>
  );
};

export default Createbook;
