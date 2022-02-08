const express = require("express");
const router = express.Router();

const db=require("../db/index");
const Book = db.book;

router.post("/", async (req, res) => {
  const book = await Book.create(req.body);
  // .then((book) => {
  //   res.send(book);
  // })
  // .catch((err) => {
  //   res.status(500).send(err);
  // });
  res.send(book);
});

router.get("/", async (req, res) => {
  const books = await Book.findAll();
  res.send(books);
});

module.exports = router;
