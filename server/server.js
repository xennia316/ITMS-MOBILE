const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const pool = require("./db/db");

dotenv.config();

const app = express();
app.use(cors());

pool
  .connect()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 7000;
app.listen(5000, () => {
  console.log(`server running on port: ${PORT}`);
});
