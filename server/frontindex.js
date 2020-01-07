const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();

app.use(cors());
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/api", require("./api"));

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
