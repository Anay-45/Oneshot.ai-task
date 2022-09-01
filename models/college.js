const mongoose = require("mongoose");

const CollegeSchema = new mongoose.Schema(
  {
    CollegeId: { type: String, unique: true },
    Name: { type: String, unique: true },
    YearF: { type: Number },
    City: { type: String },
    State: { type: String },
    Country: { type: String },
    Noofstudents: { type: Number },
    Courses: [{ type: String }]
  },
  {
    collection: "college",
  }
);

module.exports = mongoose.model("college", CollegeSchema);
