// controllers/organizationsController.ts

import { Request, Response, NextFunction } from 'express';
import Organizations from '../models/organization';

export const getAllOrganizations = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const organizations = await Organizations.findAll();
        res.json(organizations);
    } catch (err) {
        next(err);
    }
};

export const getOrganizationById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const organization = await Organizations.findByPk(id);
        if (!organization) {
            res.status(404).json({ error: 'Organization not found' });
            return;
        }
        res.json(organization);
    } catch (err) {
        next(err);
    }
};

export const createOrganization = async (req: Request, res: Response, next: NextFunction) => {
    const { org_name, org_size } = req.body;
    try {
        const newOrganization = await Organizations.create({ org_name, org_size });
        res.status(201).json(newOrganization);
    } catch (err) {
        next(err);
    }
};

export const updateOrganization = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { org_name, org_size } = req.body;
    try {
        const organization = await Organizations.findByPk(id);
        if (!organization) {
            res.status(404).json({ error: 'Organization not found' });
            return;
        }
        await organization.update({ org_name, org_size });
        res.json(organization);
    } catch (err) {
        next(err);
    }
};

export const deleteOrganization = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const organization = await Organizations.findByPk(id);
        if (!organization) {
            res.status(404).json({ error: 'Organization not found' });
            return;
        }
        await organization.destroy();
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};
