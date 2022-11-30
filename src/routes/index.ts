import { Router, Request, Response } from "express";
import CartsRouter from './cart';
import ProductsRouter from './products';

const router = Router();

router.use('/carts', CartsRouter);
router.use('/products', ProductsRouter);

export default router;