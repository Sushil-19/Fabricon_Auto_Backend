// controllers/accountTypesController.ts

import { Request, Response, NextFunction } from 'express';
import AccountTypes from '../models/accountTypes';

export const getAllAccountTypes = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const accountTypes = await AccountTypes.findAll();
        res.json(accountTypes);
    } catch (err) {
        next(err);
    }
};

export const getAccountTypeById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const accountType = await AccountTypes.findByPk(id);
        if (!accountType) {
            res.status(404).json({ error: 'Account type not found' });
            return;
        }
        res.json(accountType);
    } catch (err) {
        next(err);
    }
};

export const createAccountType = async (req: Request, res: Response, next: NextFunction) => {
    const { type } = req.body;
    try {
        const newAccountType = await AccountTypes.create({ type });
        res.status(201).json(newAccountType);
    } catch (err) {
        next(err);
    }
};

export const updateAccountType = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { type } = req.body;
    try {
        const accountType = await AccountTypes.findByPk(id);
        if (!accountType) {
            res.status(404).json({ error: 'Account type not found' });
            return;
        }
        await accountType.update({ type });
        res.json(accountType);
    } catch (err) {
        next(err);
    }
};

export const deleteAccountType = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const accountType = await AccountTypes.findByPk(id);
        if (!accountType) {
            res.status(404).json({ error: 'Account type not found' });
            return;
        }
        await accountType.destroy();
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};
