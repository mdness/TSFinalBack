import { Router, Request, Response } from 'express';
import cartRouter from './cart';
import productRouter from './products';

const router = Router();

router.use("./cart", cartRouter);
router.use("./products", productRouter)

export default router