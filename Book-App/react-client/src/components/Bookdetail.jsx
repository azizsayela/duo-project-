import React from "react";

const Bookdetail = (props) => {
  console.log(props);
  // console.log(props);
  return (
    <div className="card">
      <h1 className="book-title">{props.filterdBook[0].title}</h1>
      <img
        src={props.filterdBook[0].book_image}
        style={{ width: "240px" }}
      ></img>
      <p className="book">
        <span style={{ color: "green" }}> Author: </span>
        {props.filterdBook[0].author}
      </p>

      <p className="book">
        <span style={{ color: "green" }}> Description </span>:
        {props.filterdBook[0].description}
      </p>
      <p className="book">
        <span style={{ color: "green" }}> Contributor : </span>
        {props.filterdBook[0].contributor}
      </p>
    </div>
  );
};

export default Bookdetail;
