import  express from 'express';
import {MongoClient} from "mongodb";
import {userRouter} from "./userdata.js";
import {posterRouter} from "./posterdata.js"
import cors from "cors";
import dotenv from 'dotenv';
 dotenv.config();
 const app=express();
 app.use(express.json());
const MONGO_URL=process.env.MONGO_URL;
const PORT=process.env.PORT;

async function createConnection(){
    const client=new MongoClient(MONGO_URL);
    await client.connect();
    console.log("mongo connect");
    return client;
}
export const client=await createConnection();
  app.get("/",function(req,res){
       res.send("hi all");
})
app.use(cors());
app.use('/User',userRouter);
app.use('/poster',posterRouter);

app.listen(PORT,function(){
    console.log('successfull start from 5000')
})



