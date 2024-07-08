// routes/organizationsRoutes.ts

import express from 'express';
import * as organizationsController from '../controllers/organizationsController';

const router = express.Router();

router.get('/', organizationsController.getAllOrganizations);
router.get('/:id', organizationsController.getOrganizationById);
router.post('/', organizationsController.createOrganization);
router.put('/:id', organizationsController.updateOrganization);
router.delete('/:id', organizationsController.deleteOrganization);

export default router;
