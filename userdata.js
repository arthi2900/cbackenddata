import { Userpost, Userget, Userdelete, Userput } from './Userdataapp.js';
import express from 'express';
const router=express.Router();
router.post("/user", async function (req, res) {
    const data = req.body;
    console.log(data);
    //create a db,table
    const result = await Userpost(data);
    res.send(result);
});
router.get("/user/:id", async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    //const stud=student.find((mv)=>mv.id === id);
    const result = await Userget(id);
    res.send(result);
});
router.delete("/user/:id", async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    //const stud=student.find((mv)=>mv.id === id);
    const result = await Userdelete(id);
    res.send(result);
});
router.put("/user/:id", async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    const updateData = req.body;
    //const stud=student.find((mv)=>mv.id === id);
    const result = await Userput(id, updateData);
    res.send(result);
});

export const userRouter=router;
