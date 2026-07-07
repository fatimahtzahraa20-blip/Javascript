const express = require("express");

// Create Express application
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Import routes
const bookRoutes = require("./routes/bookRoutes");

// Connect routes
app.use("/books", bookRoutes);

// Port Number
const PORT = 3000;

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
    res.send("Welcome to the Book Store API");
});