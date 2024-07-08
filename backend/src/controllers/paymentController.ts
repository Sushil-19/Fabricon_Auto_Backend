// controllers/paymentController.ts

import { Request, Response, NextFunction } from 'express';
import Payment from '../models/payment';

export const getAllPayments = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payments = await Payment.findAll();
        res.json(payments);
    } catch (err) {
        next(err);
    }
};

export const getPaymentById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const payment = await Payment.findByPk(id);
        if (!payment) {
            res.status(404).json({ error: 'Payment not found' });
            return;
        }
        res.json(payment);
    } catch (err) {
        next(err);
    }
};

export const createPayment = async (req: Request, res: Response, next: NextFunction) => {
    const { transaction_id, amount } = req.body;
    try {
        const newPayment = await Payment.create({ transaction_id, amount });
        res.status(201).json(newPayment);
    } catch (err) {
        next(err);
    }
};

export const updatePayment = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { transaction_id, amount } = req.body;
    try {
        const payment = await Payment.findByPk(id);
        if (!payment) {
            res.status(404).json({ error: 'Payment not found' });
            return;
        }
        await payment.update({ transaction_id, amount });
        res.json(payment);
    } catch (err) {
        next(err);
    }
};

export const deletePayment = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const payment = await Payment.findByPk(id);
        if (!payment) {
            res.status(404).json({ error: 'Payment not found' });
            return;
        }
        await payment.destroy();
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};
