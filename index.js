import express from 'express';
import mongoose from "mongoose";

import studentModel from "./model/studentModel.js";

const app = express();

app.use(express.json());
await mongoose.connect("mongodb://localhost:27017/data").then(() => {
   console.log("_________connected_________");
})
app.get('/', async (req, res) => {
   const studentData = await studentModel.find()
   res.send(studentData)
})

app.post('/save', async (req, res) => {
   console.log(req.body)
   const { name, age, email } = req.body
   if (!req.body || !name || !age || !email) {
      res.send({
         message: "data not stored",
         success: false,
         storedInfo: null
      });
      return false;
   }
   const studentData = await studentModel.create(req.body)

   res.send({
      message: "data stored",
      success: true,
      storedInfo: studentData
   })
})

app.put('/edit/:id',async(req, res) => {
   const id = req.params.id;
   console.log(req.body, id);

   const studentData= await studentModel.findByIdAndUpdate(id,{
      ...req.body
   })
   res.send({
      message: "data updated",
      success: true,
      info: studentData
   })
})

app.delete('/delete/:id',async(req, res) => {
   const id = req.params.id;

   const studentData= await studentModel.findByIdAndDelete(id)
   res.send({
      message: "data delted",
      success: true,
      info: studentData
   })
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
