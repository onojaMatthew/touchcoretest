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

//implementing cross origin resourse sharing
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Authorization, Content-Type, Accept, X-Auth-Token,');
  if (req.method === 'OPTIONS') {
      res.status(200).end();
  }
  else {
      next();
  }
});

// custom route middleware
require("./middleware/router")(app);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
})