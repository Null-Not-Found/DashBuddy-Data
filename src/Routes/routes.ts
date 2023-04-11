import { Router } from 'express';
import { getBrands } from '../Controller/brand.controller';

const router = Router();

router.get('/brands', getBrands);

export default router;