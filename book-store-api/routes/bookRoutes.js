const express = require("express");

const router = express.Router();

// Import Controller
const bookController = require("../controllers/bookController");

// GET all books
router.get("/", bookController.getAllBooks);

// GET single book
router.get("/:id", bookController.getBookById);

// POST new book
router.post("/", bookController.addBook);

// PUT update book
router.put("/:id", bookController.updateBook);

// DELETE book
router.delete("/:id", bookController.deleteBook);

// Export router
module.exports = router;