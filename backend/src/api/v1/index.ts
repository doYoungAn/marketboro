import { Router } from 'express';
import Business from './routes/business';
import Vendor from './routes/vendor';

const router = Router();

router.use('/business', Business);
router.use('/vendor', Vendor);

export default router;
