import React from "react";
import Onebook from "./Onebook.jsx";

const Allbooks = (props) => {
  return (
    <div className="book-container">
      {props.books.map((element, index) => {
        return (
          <Onebook
            book={element}
            key={index}
            showOnlyOneBook={props.showOnlyOneBook}
            admin={props.admin}
            user={props.user}
          ></Onebook>
        );
      })}
    </div>
  );
};

export default Allbooks;
