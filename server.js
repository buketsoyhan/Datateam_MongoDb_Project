const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/database/connectDatabase");
const routers = require("./routers/question");

dotenv.config({
  path: "./config/env/config.env",
});

connectDatabase();

const app = express();
const PORT = process.env.PORT;

app.use("/api", routers);
app.use("/questions", routers);
app.listen(PORT, () => {
  console.log(`App started on ${PORT} port and ${process.env.NODE_ENV} env`);
});
