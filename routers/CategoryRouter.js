import express from 'express'
import {getAllCategory, getProductByCategory} from "../controllers/CategoryController.js";
const CategoryRouter = express.Router()

CategoryRouter.get("/", getAllCategory);
CategoryRouter.get("/:id", getProductByCategory);

export default CategoryRouter