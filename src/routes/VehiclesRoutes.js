import express from "express";
const router = express.Router();
import vehicles from "../vehicles";

router.get("/vehicles",(req, res) => {
  return res.json(vehicles);
})


router.get("/vehicles/:id",(req, res) => {
  const onevehicle = vehicles.find(u=>u._id == req.params.id);
  return res.json(vehicles);
})

router.post("/vehicles",(req, res) => {
  vehicles.push(req.body);
  return res.json(vehicles);
})

export default router;
