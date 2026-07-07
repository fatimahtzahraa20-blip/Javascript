// Temporary Database (Array)

let books = [
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        price: 2000
    },
    {
        id: 2,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 1500
    }
];

// ==========================
// GET ALL BOOKS
// ==========================

exports.getAllBooks = (req, res) => {
    res.json(books);
};

// ==========================
// GET BOOK BY ID
// ==========================

exports.getBookById = (req, res) => {

    const id = parseInt(req.params.id);

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.json(book);
};

// ==========================
// ADD BOOK
// ==========================

exports.addBook = (req, res) => {

    const { title, author, price } = req.body;

    const newBook = {
        id: books.length + 1,
        title,
        author,
        price
    };

    books.push(newBook);

    res.status(201).json({
        message: "Book added successfully",
        book: newBook
    });
};

// ==========================
// UPDATE BOOK
// ==========================

exports.updateBook = (req, res) => {

    const id = parseInt(req.params.id);

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    const { title, author, price } = req.body;

    book.title = title;
    book.author = author;
    book.price = price;

    res.json({
        message: "Book updated successfully",
        book
    });
};

// ==========================
// DELETE BOOK
// ==========================

exports.deleteBook = (req, res) => {

    const id = parseInt(req.params.id);

    const index = books.findIndex(book => book.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    books.splice(index, 1);

    res.json({
        message: "Book deleted successfully"
    });
};