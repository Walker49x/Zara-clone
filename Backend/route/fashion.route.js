import express from "express";
import { getfashion,getProductById } from "../controller/fashion.controller.js";

const router=express.Router()
router.get("/",getfashion);
router.get("/:id", getProductById);

export default router;