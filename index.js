 import express from 'express';
 import mongoose from "mongoose";
   
   import studentModel from "./model/studentModel.js";

   const app = express();

   await mongoose.connect("mongodb://localhost:27017/data").then(()=>{
   console.log("_________connected_________");
   })
   app.get('/',async (req,res)=>{
      const studentData = await studentModel.find()
      res.send(studentData)
   })

   app.listen(3200)

// async function dbConnection(){
//    await mongoose.connect("mongodb://localhost:27017/data");
//    const schema = mongoose.Schema({
//     name:String,
//     age:Number,
//     email:String
//    })

//    const studentsModel = mongoose.model('employees',schema);
//    const result = await studentsModel.find();
//    console.log(result)
// }

// dbConnection();
