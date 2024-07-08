// controllers/lisancesController.ts

import { Request, Response, NextFunction } from 'express';
import Lisances from '../models/lisance';

export const getAllLisances = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lisances = await Lisances.findAll();
        res.json(lisances);
    } catch (err) {
        next(err);
    }
};

export const getLisanceById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const lisance = await Lisances.findByPk(id);
        if (!lisance) {
            res.status(404).json({ error: 'Lisance not found' });
            return;
        }
        res.json(lisance);
    } catch (err) {
        next(err);
    }
};

export const createLisance = async (req: Request, res: Response, next: NextFunction) => {
    const { lisance_key, allowed_users, valid_upto, plan_id, payment_id } = req.body;
    try {
        const newLisance = await Lisances.create({ lisance_key, allowed_users, valid_upto, plan_id, payment_id });
        res.status(201).json(newLisance);
    } catch (err) {
        next(err);
    }
};

export const updateLisance = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { lisance_key, allowed_users, valid_upto, plan_id, payment_id } = req.body;
    try {
        const lisance = await Lisances.findByPk(id);
        if (!lisance) {
            res.status(404).json({ error: 'Lisance not found' });
            return;
        }
        await lisance.update({ lisance_key, allowed_users, valid_upto, plan_id, payment_id });
        res.json(lisance);
    } catch (err) {
        next(err);
    }
};

export const deleteLisance = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const lisance = await Lisances.findByPk(id);
        if (!lisance) {
            res.status(404).json({ error: 'Lisance not found' });
            return;
        }
        await lisance.destroy();
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};
