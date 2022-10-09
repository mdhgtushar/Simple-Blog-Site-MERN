const express = require("express");
const ClientRoute = require("./routes/ClientRoute");

const app = express();

app.use("/api", ClientRoute);

app.listen(5000, () => {
  console.log("app running on port 5000");
});
