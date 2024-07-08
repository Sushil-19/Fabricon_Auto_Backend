import express from 'express';
import * as accountTypesController from '../controllers/accountTypesController';

const router = express.Router();

router.get('/', accountTypesController.getAllAccountTypes);
router.get('/:id', accountTypesController.getAccountTypeById);
router.post('/', accountTypesController.createAccountType);
router.put('/:id', accountTypesController.updateAccountType);
router.delete('/:id', accountTypesController.deleteAccountType);

export default router;
