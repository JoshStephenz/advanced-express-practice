import express from "express";
const router = express.Router();
import products from "../products";

router.get("/products",(req, res) => {
  return res.json(products);
})

router.get("/products/:id",(req, res) => {
  const oneproduct = products.find(u=>u._id == req.params.id);
  return res.json(oneproduct);
})

router.post("/products",(req, res) => {
  products.push(req.body);
  return res.json(products);
})

export default router;
