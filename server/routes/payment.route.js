import express from "express";
import { createOrder, verifyEsewaPayment } from "../controllers/payment.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/create", isAuth, createOrder);
router.get("/verify-esewa", verifyEsewaPayment);

export default router;