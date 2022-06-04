import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Header from "./components/Header.jsx";
import Allbooks from "./components/Allbook.jsx";
import { useEffect } from "react";
import { useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Update from "./components/Update.jsx";
import Createbook from "./components/Createbook.jsx";
import Bookdetail from "./components/Bookdetail.jsx";
import Register from "./components/CreateAccount.jsx";
import Login from "./components/Login.jsx";
import AllCommandList from "./components/AllCommandList.jsx";
import RentBook from "./components/RentBook.jsx";
import Buybook from "./components/Buybook.jsx";

export const App = () => {
  const [allbooks, setallbooks] = useState([]);
  const [filtred, setfiltred] = useState([]);
  const [admin, setadmin] = useState(false);
  const [user, setuser] = useState(false);

  // const [view, setview] = useState("");
  // const [adminview, setadminView] = useState(false);
  // const [userview, setUserView] = useState(false);

  const setAdminView = (option) => {
    setadmin(option);
    // console.log(admin);
  };

  const userView = (option) => {
    setuser(option);
  };

  const getAll = () => {
    axios.get("/api/books/getall").then((result) => {
      setallbooks(result.data);
      // console.log(allbooks);
    });
  };

  useEffect(() => {
    getAll();
  }, []);
  //show only one book and show description price and availibility
  const showOnlyOneBook = (target) => {
    let filterd = allbooks.filter((e, i) => {
      return e.title === target || e._id === target;
    });
    setfiltred(filterd);
  };

  return (
    <BrowserRouter>
      {console.log(allbooks)}
      <Header admin={admin} />
      <Routes>
        <Route
          path="/"
          element={
            <Allbooks
              books={allbooks}
              showOnlyOneBook={showOnlyOneBook}
              admin={admin}
              user={user}
            />
          }
        />
        <Route path="/createBook" element={<Createbook />} />
        <Route path="/oneBook" element={<Bookdetail filterdBook={filtred} />} />
        <Route path="/updateBook/:id" element={<Update />} />
        <Route
          path="/Login"
          element={<Login setadminView={setAdminView} userView={userView} />}
        />
        <Route path="/Register" element={<Register />} />
        <Route path="/Commands" element={<AllCommandList />} />
        <Route path="/Buybok" element={<Buybook />} />
        <Route path="/Rentbook" element={<RentBook filterdBook={filtred} />} />

        {/* <Route path="/" element={<Allbooks books={allbooks} />} exact />
              <Route path="/" element={<Allbooks books={allbooks} />} exact />
              <Route path="/" element={<Allbooks books={allbooks} />} exact /> */}
      </Routes>
    </BrowserRouter>
  );
};
//   const setAdminView = () => {
//     // this.setState({ admin: true });
//     setview("admin");
//     // this.setState({ view: "allbooks" });
//   };

//   const userView = () => {
//     // this.setState({ user: true });
//     // this.setState({ view: "allbooks" });
//   };

//   const changeView = (option) => {
//     setview(option);
//   };

//   // renderView() {
//   //   const { view } = this.state;

//   //   if (view === "Allfilms") {
//   //     return (
//   //       <Allfilms Films={this.state.allfilms} adminState={this.state.admin} />
//   //     );
//   //   } else if (view === "login") {
//   //     return (
//   //       <Login setAdminView={this.setAdminView} setUserView={this.userView} />
//   //     );
//   //   } else if (view === "create-account") {
//   //     return <Signup></Signup>;
//   //   } else if (view === "create-film") {
//   //     return <Create />;
//   //   } else if (view === "result-search") {
//   //     return <SearchedFilm film={this.state.allfilms}></SearchedFilm>;
//   //   }
//   // }

//   //     <div className="main">{this.renderView()}</div>
//   //   </div>
//   // );
// };

ReactDOM.render(<App />, document.getElementById("main"));

// onChange={(e)=>{set(e.target.value)}}
