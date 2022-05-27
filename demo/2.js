import  express from 'express';
import {MongoClient} from "mongodb";
const MONGO_URL="mongodb://localhost/";
const PORT=5000;
const app=express();

async function createConnection(){
    const client=new MongoClient(MONGO_URL);
    await client.connect();
    console.log("mongo connect");
}
createConnection();
app.get("/",function(req,res){
       res.send("hi all");
})
app.listen(PORT,function(){
    console.log(`successfull start from ${PORT}`)
})