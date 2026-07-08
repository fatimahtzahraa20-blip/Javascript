const express = require("express");
const cors = require("cors");

const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(logger);

// Routes
app.use("/users", userRoutes);

// 404 Handler
app.use(notFound);

// Error Handler
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});