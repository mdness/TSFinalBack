// import { Router, Request, Response } from 'express';

// const router = Router();

// router.get('/', (req: Request, res: Response) => {
//     res.json({
//         msg: 'Get all'
//     })
// })

// router.post("/",(req: Request, res: Response) => {
//     res.json({
//         msg: "Post all"
//     })
// })

// router.delete("/:id",(req: Request, res: Response) => {
//     res.json({
//         msg: "Delete all"
//     })
// })

// router.post("/:id/products",(req: Request, res: Response) => {
//     res.json({
//         msg: "Add product to cart"
//     })
// })

// router.delete("/cartID/products/:productID",(req: Request, res: Response) => {
//     res.json({
//         msg: "Delete product in cart"
//     })
// });

// export default router

import { Router, Request, Response } from "express";


const router = Router();

router.get('/', (req: Request, res: Response) => {
	res.json({
		msg: "Get all"
	})
})

router.get('/:id', (req: Request, res: Response) => {
	res.json({
		msg: "Get by id"
	})
})

router.post('/', (req: Request, res: Response) => {
	res.json({
		msg: "Post all"
	})
})

router.delete('/:id', (req: Request, res: Response) => {
	res.json({
		msg: "Delete all"
	})
})

router.post('/:id/products', (req: Request, res: Response) => {
	res.json({
		msg: "Add product to cart"
	})
})

router.delete('/:cartId/products/:productId', (req: Request, res: Response) => {
	res.json({
		msg: "Delete product in cart"
	})
})

export default router;
