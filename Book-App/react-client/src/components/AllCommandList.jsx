import React from "react";
import { useEffect } from "react";
import axios from "axios";
import OneCommand from "./OneCommand.jsx";
import { useState } from "react";

const AllCommandList = () => {
  const [commands, setcommands] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/books/commande/get").then((result) => {
      console.log(result);
      setcommands(result.data);
    });
  }, []);

  return (
    <div className="command-container">
      {commands.map((element, index) => {
        return <OneCommand command={element} key={index}></OneCommand>;
      })}
    </div>
  );
};

export default AllCommandList;
