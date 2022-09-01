const express = require("express");
const router = express.Router();
const College = require("../models/college");

router.post("/College", async (req, res) => {
  try {
    let college = new College(
      req.body
    );
    let newcollege = await college.save();
    res.json({
      status: "ok",
      message: "successfully added",
      data:college
    });
  } catch (err) {
    res.json({ status: "error", err });
  }
});
router.get("/College", async (req, res) => {
  try {
    const result = await College.find({}).exec();
    res.json({ status: "ok", result: result });
  } catch (err) {
    res.json({ status: "error", error: error });
  }
});

router.get("/Colleg/:CollegeId", async (req, res) => {
  const CollegeId = req.params.CollegeId;
  try {
    const result = await College.findOne({ CollegeId:CollegeId }).exec();
    res.json({ status: "ok", result: result,Course:result.Courses });
  } catch (err) {
    res.json({ status: "error", error: error });
  }
});
router.get("/Collegelist/:Name",async(req,res)=>{
  const Name = req.params.Name;
  try{
    const result = await College.findOne({$or:[{CollegeId:Name},{Name}]});
    if(result){
      const {State,Noofstudents}=result;
      const result1=await College.find({$and:[{State},{Noofstudents}]});
      res.json({ status: "ok", result: result1 });
    }
    else{
      res.json({status:"ok",result});
    }
  }
  catch(err){
    res.json({status:"error",error,error});
  }
})
router.get("/College/:state", async (req, res) => {
  const State = req.params.state;
  try {
    const result = await College.find({ State }).exec();
    res.json({ status: "ok", result: result,keys:Object.keys(result) });
  } catch (err) {
    res.json({ status: "error", error: error });
  }
});
router.get("/Colle/:course", async (req, res) => {
  const course = req.params.course;
  try {
    const result = await College.find({ Courses: { $all: [course] } }).exec();
    res.json({ status: "ok", result: result });
  } catch (err) {
    res.json({ status: "error", error: err });
  }
});

router.get("/Collegecount", async (req, res) => {
  try {
    let result = await College.aggregate([
    
      {
        $sortByCount:"$State"
      }
    ]);
    res.json({ status: "ok", result: result });
  } catch (err) {
    res.json({ status: "error", err });
  }
});
router.get("/Collegecountbycourse", async (req, res) => {
  try {
    let result = await College.aggregate([
      {
        $unwind:"$Courses"
      },
      {
        $sortByCount:"$Courses"
      }
    ]);
    res.json({ status: "ok", result: result });
  } catch (err) {
    res.json({ status: "error", err });
  }
});

module.exports = router;
