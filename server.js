const express = require("express");
const ClientRoute = require("./routes/ClientRoute");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/blog", () => {
  console.log("mongoose connected");
});

app.use("/api", ClientRoute);

app.listen(5000, () => {
  console.log("app running on port 5000");
});
