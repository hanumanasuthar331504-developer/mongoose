import express from 'express';
import cors from 'cors'
const app = express();

app.use(cors());
app.get('/',(req,res)=>{
   res.send({
      name:"hanuman",
      age:29,
      email:"hanuman@test.com"
   })
})

app.listen(3200)
