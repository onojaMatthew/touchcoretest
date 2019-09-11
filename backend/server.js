const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const request = require("request");
const path = require("path");

const app = express();

const port = process.env.PORT || 8080;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// custom route middleware
require("./middleware/router")(app);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
})