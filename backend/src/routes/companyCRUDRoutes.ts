import { Router } from 'express';
import { 
    createCompany,
    getAllCompanies, 
    getCompanyById, 
    updateCompany, 
    deleteCompany 
} from '../controllers/companyCRUDController';

const router = Router();

// CRUD routes
router.post('/', createCompany); 
router.get('/', getAllCompanies);
router.get('/:id', getCompanyById);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);

export default router;

