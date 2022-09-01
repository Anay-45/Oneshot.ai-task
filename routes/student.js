const express = require("express");
const router = express.Router();
const Student = require("../models/students");

router.post("/Student", async (req, res) => {
  try {
    const { StudentId, Name, YearB, CollegeId, Skills } = req.body;
    let student = new Student({
      StudentId,
      Name,
      YearB,
      CollegeId,
      Skills,
    });
    let newStudent = await student.save();
    res.json({
      status: "ok",
      message: "successfully added",
      data:student
    });
  } catch (err) {
    console.log(err);
    return res.json({ status: "error", err });
    
  }
  
});
router.get("/student/:CollegeId", async (req, res) => {
  const CollegeId = req.params.CollegeId;
  try {
    const result = await Student.find({ CollegeId }).exec();
    res.json({ status: "ok", result: result });
  } catch (err) {
    res.json({ status: "error", error: error });
  }
});

router.get("/students/:StudentId", async (req, res) => {
  const StudentId = req.params.StudentId;
  try {
    const result = await Student.findOne({ StudentId }).exec();
    res.json({ status: "ok", result: result ,Skill:result.Skills});
  } catch (err) {
    res.json({ status: "error", error: error });
  }
});

module.exports = router;
