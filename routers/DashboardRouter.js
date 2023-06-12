import express from 'express'
import {getDashboard} from "../controllers/CategoryController.js";
const DashboardRouter = express.Router()

DashboardRouter.get("/", getDashboard);

export default DashboardRouter