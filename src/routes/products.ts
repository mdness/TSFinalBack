import { Router, Request, Response } from 'express';

const router = Router();

router.get('/:id', (req: Request, res: Response) => {
    res.json({
        msg: 'Get all'
    })
})

router.post("./",(req: Request, res: Response) => {
    res.json({
        msg: "Post all"
    })
})

router.put("./:id",(req: Request, res: Response) => {
    res.json({
        msg: "Modify product"
    })
})

router.delete("./:id",(req: Request, res: Response) => {
    res.json({
        msg: "Delete product"
    })
});

export default router