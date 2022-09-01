const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    StudentId: { type: String, unique: true },
    Name: { type: String, unique: true },
    YearB: { type: Number },
    CollegeId: { type: String },
    Skills: [{ type: String }],
  },
  {
    collection: "Students",
  }
);

module.exports = mongoose.model("Students", StudentSchema);
