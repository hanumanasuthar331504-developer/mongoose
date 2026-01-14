import { MongoClient } from "mongodb";

const url = "mongodb+srv://vbhanuman55:qwert123@cluster0.f6x5q2x.mongodb.net/?appName=Cluster0";
const database = "shop";
const collection = "products";
const client = new MongoClient(url);
client.connect().then(()=>{
   console.log("________connect________")
});

async function dbConnection (){
const db=client.db(database);
const collectResult = db.collection(collection);
const result = await collectResult.find().toArray();
console.log(result)
}

dbConnection()
