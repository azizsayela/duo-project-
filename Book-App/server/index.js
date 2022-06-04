const express = require("express");
const axios = require("axios");
const Books = require("../database-mongodb/BookSchema.js");
const Useer = require("../database-mongodb/UserSchema");
const Rentbook = require("../database-mongodb/RentBookSchema");
// const RentDemands=require("../")

// const Films = require("../database-mongodb/Movie_Schema");
// const { findByIdAndDelete } = require("../database-mongodb/Movie_Schema");
// const User = require("../database-mongodb/UserSchema");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../react-client/dist"));

// function to get all the books
let getAllBooks = () => {
  let options = {
    url: `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=br0LwYOYLceTOmgBIsLp8GavO92QFXG6`,
    headers: {
      "User-Agent": "request",
    },
  };
  return axios.get(options.url, {
    options,
  });
};
// First get request to get all books from newYorkBooks Api
// app.get("/api/books/getall", function (req, res) {
//   getAllBooks().then((result) => {
//     console.log(result);
//     res.json(result.data);
//   });
// });

// after getting the data from the api we need to shape it and push into our database to work with and avoid working with the api

// app.post("/api/books/postbooks", function (req, res) {
//   getAllBooks()
//     .then((result) => {
//       let books = result.data.results.books.map((e) => {
//         return {
//           title: e.title,
//           author: e.author,
//           book_image: e.book_image,
//           description: e.description,
//           contributor: e.contributor,
//         };
//       });
//       // ;
//       return books;
//     })

//     .then((books) =>
//       Books.insertMany(books).then(function () {
//         console.log("Data inserted");
//       })
//     );
// });

// get request to get all films from database
app.get("/api/books/getall", function (req, res) {
  console.log("sdsds");
  Books.find().then((result) => {
    res.status(200).json(result);
  });
});
// Create a book (Admin)
app.post("/api/books/create", function (req, res) {
  Books.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) res.status(400).send("failed");
    });
});
// delete a book by id (Admin)

app.delete("/api/books/delete/:_id", function (req, res) {
  Books.findByIdAndDelete(req.params._id)
    .then((result) => {
      res.status(200).json({ message: "deleted", result });
    })
    .catch((err) => {
      if (err) console.log(err);
    });
});

// update a book (Admin)
app.put("/api/books/update/:_id", function (req, res) {
  Books.findByIdAndUpdate(req.params._id, req.body).then((result) => {
    res.status(200).json("data updated");
  });
});

app.post("/user/login", (req, res) => {
  // const existingUser = User.findOne(req.body.email) ;
  const { email, password } = req.body;
  if (!password || !email) {
    return res.status(400).json({ message: "Password incorrect or username" });
  }

  Useer.findOne({ email, password })
    .then((user) => {
      if (user) {
        res.status(200).json({ message: "Login successful", user });
      } else {
        res.status(401).json({
          message: "Login successful",
          error: "email not found",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        messagd: "err",
        error: err.message,
      });
    });
});

app.post("/user/signin", (req, res) => {
  const { username, email, password } = req.body;
  const user = new Useer({
    username,
    email,
    password,
  });

  Useer.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ message: "User already exists." });
  });
  user.save((error, data) => {
    if (error) {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }
    if (data) {
      return res.status(201).json({
        user: data,
      });
    }
  });
});



app.post("/api/books/commande", function (req, res) {
  Rentbook.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) res.status(400).send("failed");
    });
});


app.get("/api/books/commande/get", function (req, res) {
  Rentbook.find().then((result) => {
    res.status(200).json(result);
  });
});



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
