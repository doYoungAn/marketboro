import { Router } from 'express';
import * as BusinessController from './../controllers/business';

const router = Router();

router.get('/', BusinessController.Get);

export default router;
