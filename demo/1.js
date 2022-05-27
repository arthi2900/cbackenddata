import express from 'express';
const PORT=5000;
const app=express();

app.get("/",function(req,res){
       res.send("hi all");
})
app.listen(PORT,function(){
    console.log(`successfull start from ${PORT}`)
})