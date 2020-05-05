import { Router } from 'express';
import * as ProductController from './../controllers/product';

const router = Router();

router.get('/', ProductController.GetList);
router.get('/:productId', ProductController.Get);

export default router;
