// controllers/userController.ts

import { Request, Response, NextFunction } from 'express';
import PUsers from '../models/puser';

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await PUsers.findAll();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const user = await PUsers.findByPk(id);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json(user);
    } catch (err) {
        next(err);
    }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { fname, username, email, ac_type_id, role_id, org_id, password, is_verified, last_login, lisence_id, contact_number, address, created_at } = req.body;
    try {
        const newUser = await PUsers.create({ fname, username, email, ac_type_id, role_id, org_id, password, is_verified, last_login, lisence_id, contact_number, address, created_at });
        res.status(201).json(newUser);
    } catch (err) {
        next(err);
    }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { fname, username, email, ac_type_id, role_id, org_id, password, is_verified, last_login, lisence_id, contact_number, address, created_at } = req.body;
    try {
        const user = await PUsers.findByPk(id);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        await user.update({ fname, username, email, ac_type_id, role_id, org_id, password, is_verified, last_login, lisence_id, contact_number, address, created_at });
        res.json(user);
    } catch (err) {
        next(err);
    }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const user = await PUsers.findByPk(id);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        await user.destroy();
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};
