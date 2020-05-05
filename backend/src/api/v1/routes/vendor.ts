import { Router } from 'express';
import * as VendorController from './../controllers/vendor';

const router = Router();

router.get('/', VendorController.Get);

export default router;
