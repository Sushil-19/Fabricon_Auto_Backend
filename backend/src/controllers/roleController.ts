// controllers/roleController.ts

import { Request, Response, NextFunction } from 'express';
import Roles from '../models/role';

export const getAllRoles = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roles = await Roles.findAll();
        res.json(roles);
    } catch (err) {
        next(err);
    }
};

export const getRoleById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const role = await Roles.findByPk(id);
        if (!role) {
            res.status(404).json({ error: 'Role not found' });
            return;
        }
        res.json(role);
    } catch (err) {
        next(err);
    }
};

export const createRole = async (req: Request, res: Response, next: NextFunction) => {
    const { role_name, permissions, created_at } = req.body;
    try {
        const newRole = await Roles.create({ role_name, permissions, created_at });
        res.status(201).json(newRole);
    } catch (err) {
        next(err);
    }
};

export const updateRole = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { role_name, permissions, created_at } = req.body;
    try {
        const role = await Roles.findByPk(id);
        if (!role) {
            res.status(404).json({ error: 'Role not found' });
            return;
        }
        await role.update({ role_name, permissions, created_at });
        res.json(role);
    } catch (err) {
        next(err);
    }
};

export const deleteRole = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const role = await Roles.findByPk(id);
        if (!role) {
            res.status(404).json({ error: 'Role not found' });
            return;
        }
        await role.destroy();
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};
