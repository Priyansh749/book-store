const express = require("express")
const router = express.Router()
const Book = require("../model/Book")
const booksController = require("../controllers/bookController")

router.get("/", booksController.getAllBooks) // Get all books from the database
router.post("/", booksController.addBook)      // Add a new book to the database
router.get("/:id", booksController.getBookById) // get book by id
router.put("/:id",booksController.updateBookById) //  Update a specific book in the database
router.delete('/:id',booksController.deleteBookById)

module.exports = router