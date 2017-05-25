import express from "express";
import bodyParser from "body-parser";
import ContactRoutes from "./routes/ContactRoutes";
import CommentsRoutes from "./routes/CommentsRoutes";
import ProductsRoutes from "./routes/ProductsRoutes";
import VehiclesRoutes from "./routes/VehiclesRoutes";


const app = express();
app.use(bodyParser.json());
app.use(ContactRoutes);
app.use(CommentsRoutes);
app.use(ProductsRoutes);
app.use(VehiclesRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
