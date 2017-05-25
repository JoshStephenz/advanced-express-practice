import express from "express";
const router = express.Router();
import contacts from "../contacts";

router.get("/contacts/:id",(req, res) => {
  const onecontact = contacts.find(u=>u._id == req.params.id);
  return res.json(onecontact);
})

router.post("/contacts",(req, res) => {
  contacts.push(req.body);
  return res.json(contacts);
})

router.get("/contacts",(req, res) => {
  return res.json(contacts);
})

export default router;
