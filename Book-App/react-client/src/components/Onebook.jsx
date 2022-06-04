import React from "react";
import { useState } from "react";
import { navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";

const Onebook = (props) => {
  console.log(props.user);
  const deleteBook = (id) => {
    axios
      .delete(`/api/books/delete/${id}`)
      .then(() => {
        console.log("data deleted");
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  };

  let navigate = useNavigate();
  console.log(props.admin);
  return (
    <div className="containerr">
      <div className="card">
        <h1
          className="book-title"
          onClick={(e) => {
            props.showOnlyOneBook(props.book.title);
            navigate("/oneBook");
          }}
        >
          {props.book.title}
        </h1>
        <img src={props.book.book_image} style={{ width: "240px" }}></img>
        <p className="book"> Author : {props.book.author}</p>

        <p className="book"> contributor : {props.book.contributor}</p>
        <p style={{ textAlign: "center" }}>Price {props.book.Price}</p>
        {props.admin && (
          <div className="btn-container-1">
            <Button
              type="submit"
              variant="contained"
              value={props.book._id}
              onClick={(e) => {
                deleteBook(e.target.value);
              }}
            >
              Delete
            </Button>
            <Button
              value={props.book._id}
              variant="contained"
              onClick={(e) => {
                navigate(`/updateBook/${e.target.value}`);
              }}
            >
              Update
            </Button>
          </div>
        )}
        {props.user && (
          <div className="btn-container">
            <Button
              value={props.book._id}
              variant="contained"
              onClick={(e) => {
                props.showOnlyOneBook(e.target.value);
                navigate("/Rentbook");
              }}
            >
              Rent / Book Now
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onebook;
