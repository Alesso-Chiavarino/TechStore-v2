import { Router } from "express";
import checkoutRouter from './checkout.routes.js'

const router = Router();

router.use('/checkout', checkoutRouter);

router.get("/", (req, res) => {
    res.send("Welcome to TechStore API");
})

export default router;