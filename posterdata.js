import { Posterpost, Posterget, Posterdelete, Posterput } from './Posterdataapp.js';
import express from 'express';
const router=express.Router();
router.post("/poster", async function (req, res) {
    const data = req.body;
    console.log(data);
    //create a db,table
    const result1 = await Posterpost(data);
    res.send(result1);
});
router.get("/poster/:id", async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    //const stud=student.find((mv)=>mv.id === id);
    const result = await Posterget(id);
    res.send(result);
});
router.delete("/poster/:id", async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    //const stud=student.find((mv)=>mv.id === id);
    const result = await Posterdelete(id);
    res.send(result);
});
router.put("/poster/:id", async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    const updateData = req.body;
    //const stud=student.find((mv)=>mv.id === id);
    const result = await Posterput(id, updateData);
    res.send(result);
});
export const posterRouter=router;