import { Router } from 'express';
import Business from './routes/business';
import Vendor from './routes/vendor';
import Product from './routes/product';
import Plan from './routes/plan';

const router = Router();

router.use('/business', Business);
router.use('/vendor', Vendor);
router.use('/product', Product);
router.use('/plan', Plan);

export default router;
