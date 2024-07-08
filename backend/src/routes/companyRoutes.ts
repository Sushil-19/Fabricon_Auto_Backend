import { Router } from 'express';
import { registerCompany, loginCompany } from '../controllers/companyController';

const router = Router();

router.post('/register', registerCompany);
router.post('/login', loginCompany);

export default router;
