import { Router } from 'express';
import * as PlanController from './../controllers/plan';

const router = Router();

router.get('/', PlanController.Get);

export default router;
