const express=require("express");
const route=express.Router();
const {auth,isStudent,isAdmin}=require("../Middlewares/userMiddleware");
const {post_job,getall,apply,all_applications}=require("../Controllers/jobController");
route.post("/jobs/post/:id",auth,isAdmin,post_job);
route.get("/jobs/getall",auth,getall);
route.post("/jobs/apply/:id",auth,isStudent,apply);
route.get("/jobs/applications/:id",auth,isAdmin,all_applications);
module.exports=route;