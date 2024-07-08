// routes/paymentRoutes.ts

import express from 'express';
import * as paymentController from '../controllers/paymentController';

const router = express.Router();

router.get('/', paymentController.getAllPayments);
router.get('/:id', paymentController.getPaymentById);
router.post('/', paymentController.createPayment);
router.put('/:id', paymentController.updatePayment);
router.delete('/:id', paymentController.deletePayment);

export default router;
