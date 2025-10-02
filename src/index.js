const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");

const port = PORT || 8088;

const setUpApplicationServer = async () => {
    try {
        // middleware setup
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        // app.use('/api');
        app.get('/', (req, res) => {
            res.send("hello shoesy");
        })

        app.listen(port, () => {
            console.log(`Server is listening on port http://localhost:${port}`);
        })

    } catch (error) {
        console.log("Error during server starting", error);
        throw error
    }
}

setUpApplicationServer();