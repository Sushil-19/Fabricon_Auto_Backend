// controllers/planController.ts

import { Request, Response, NextFunction } from 'express';
import Plan from '../models/plan';

export const getAllPlans = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const plans = await Plan.findAll();
        res.json(plans);
    } catch (err) {
        next(err);
    }
};

export const getPlanById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const plan = await Plan.findByPk(id);
        if (!plan) {
            res.status(404).json({ error: 'Plan not found' });
            return;
        }
        res.json(plan);
    } catch (err) {
        next(err);
    }
};

export const createPlan = async (req: Request, res: Response, next: NextFunction) => {
    const { Plan_type, Plan_Desc, Max_Allowed_Users, Plan_Price, Features, ac_type_id, discount } = req.body;
    try {
        const newPlan = await Plan.create({ Plan_type, Plan_Desc, Max_Allowed_Users, Plan_Price, Features, ac_type_id, discount });
        res.status(201).json(newPlan);
    } catch (err) {
        next(err);
    }
};

export const updatePlan = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { Plan_type, Plan_Desc, Max_Allowed_Users, Plan_Price, Features, ac_type_id, discount } = req.body;
    try {
        const plan = await Plan.findByPk(id);
        if (!plan) {
            res.status(404).json({ error: 'Plan not found' });
            return;
        }
        await plan.update({ Plan_type, Plan_Desc, Max_Allowed_Users, Plan_Price, Features, ac_type_id, discount });
        res.json(plan);
    } catch (err) {
        next(err);
    }
};

export const deletePlan = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const plan = await Plan.findByPk(id);
        if (!plan) {
            res.status(404).json({ error: 'Plan not found' });
            return;
        }
        await plan.destroy();
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};
