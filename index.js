const express = require("express");

const app = express();
require("./config/connect");
require("dotenv").config({ path: "./config.env" });
const CollegeRouter = require("./routes/college");
const StudentRouter = require("./routes/student");

app.use(express.json());
app.use("/col", CollegeRouter);
app.use("/stud", StudentRouter);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(process.env.PORT || 5000, () =>
  console.log("Server started on port 5000")
);
