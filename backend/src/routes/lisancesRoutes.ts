// routes/lisancesRoutes.ts

import express from 'express';
import * as lisancesController from '../controllers/lisancesController';

const router = express.Router();

router.get('/', lisancesController.getAllLisances);
router.get('/:id', lisancesController.getLisanceById);
router.post('/', lisancesController.createLisance);
router.put('/:id', lisancesController.updateLisance);
router.delete('/:id', lisancesController.deleteLisance);

export default router;
