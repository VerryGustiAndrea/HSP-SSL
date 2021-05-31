require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = process.env.SERVER_PORT;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// const router = require("/pki-validation/");

// app.use("/.well-known", router);
app.use("/.well-known/pki-validation", express.static("./file"));

app.listen(port, () => {
  console.log(`\n App Listen port ${port}`);
});
