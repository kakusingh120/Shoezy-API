const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");
const apiRoutes = require("./routes/index");
const errorHandler = require("./middleware/error.handler"); // <-- import

const port = PORT || 8088;

const setUpApplicationServer = async () => {
    try {
        // 🔹 Body parsing middlewares
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        // 🔹 Routes
        app.use("/api", apiRoutes);

        app.get("/", (req, res) => {
            res.send("hello shoezy");
        });

        // 🔹 Error Handler Middleware (must be last)
        app.use(errorHandler);

        app.listen(port, () => {
            console.log(`✅ Server is listening on http://localhost:${port}`);
        });
    } catch (error) {
        console.log("❌ Error during server startup", error);
        throw error;
    }
};

setUpApplicationServer();
