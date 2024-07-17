const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const AuthRouter = require("./routes/Auth.route");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", AuthRouter);

const PORT = process.env.PORT || 7000;
app.listen(5000, () => {
  console.log(`server running on port: ${PORT}`);
});
