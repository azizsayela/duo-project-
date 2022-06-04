import React from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [contributor, setContributor] = useState("");
  const [Price, setPrice] = useState("");

  const updateBook = (
    id,
    title,
    author,
    description,
    image,
    contributor,
    price
  ) => {
    axios
      .put(`/api/books/update/${id}`, {
        title: title,
        author: author,
        description: description,
        image: image,
        contributor: contributor,
        Price: price,
      })
      .then(() => {
        console.log("book succefully added");
      });
  };

  const id = useParams().id;
  console.log(id);

  return (
    <div className="create-book-container">
      {console.log("hi")}
      <h className="add-book"> Update book to Your Collection</h>
      <Box
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
          label="Add the book price"
          variant="outlined"
          onChange={(e) => {
            setPrice(e.target.value);
            console.log(Price);
          }}
        />
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          updateBook(id, title, author, description, image, contributor);
        }}
      >
        Update
      </Button>
    </div>
  );
};

export default Update;
