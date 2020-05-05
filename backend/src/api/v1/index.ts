import { Router } from 'express';
import Business from './routes/business';

const router = Router();

router.use('/business', Business);

export default router;
