// src/controllers/companyCRUDController.ts
import { Request, Response } from 'express';
import Company from '../models/company';

/**
 * @swagger
 * components:
 *   schemas:
 *     Company:
 *       type: object
 *       required:
 *         - companyName
 *         - industryType
 *         - websiteURL
 *         - contactName
 *         - contactEmail
 *         - contactPhone
 *         - address
 *         - city
 *         - state
 *         - postalCode
 *         - country
 *         - termsAccepted
 *         - username
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the company
 *         companyName:
 *           type: string
 *           description: Name of the company
 *         industryType:
 *           type: string
 *           description: Type of industry
 *         websiteURL:
 *           type: string
 *           description: Company website URL
 *         contactName:
 *           type: string
 *           description: Contact person's name
 *         contactEmail:
 *           type: string
 *           description: Contact person's email
 *         contactPhone:
 *           type: string
 *           description: Contact person's phone number
 *         address:
 *           type: string
 *           description: Company address
 *         city:
 *           type: string
 *           description: Company city
 *         state:
 *           type: string
 *           description: Company state
 *         postalCode:
 *           type: string
 *           description: Company postal code
 *         country:
 *           type: string
 *           description: Company country
 *         termsAccepted:
 *           type: boolean
 *           description: Whether terms are accepted
 *         username:
 *           type: string
 *           description: Username for company login
 *         password:
 *           type: string
 *           description: Password for company login
 *       example:
 *         companyName: "IAS"
 *         industryType: "Software"
 *         websiteURL: "https://www.ias.com"
 *         contactName: "LOLO"
 *         contactEmail: "lolo@ias.com"
 *         contactPhone: "1234567890"
 *         address: "Bridge ke uper"
 *         city: "Pune"
 *         state: "Maharashtra"
 *         postalCode: "123123"
 *         country: "India"
 *         termsAccepted: true
 *         username: "lolo"
 *         password: "1234"
 */

/**
 * @swagger
 * tags:
 *   name: Companies
 *   description: Company management
 */

/**
 * @swagger
 * /api/companyCRUD:
 *   post:
 *     summary: Create a new company
 *     tags: [Companies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Company'
 *     responses:
 *       201:
 *         description: The company was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Company'
 *       500:
 *         description: Some server error
 */
export const createCompany = async (req: Request, res: Response) => {
    try {
        const newCompany = await Company.create(req.body);
        res.status(201).json(newCompany);
    } catch (error) {
        console.error('Error creating company:', error);
        res.status(500).json({ message: 'Failed to create company' });
    }
};

/**
 * @swagger
 * /api/companyCRUD:
 *   get:
 *     summary: Returns the list of all the companies
 *     tags: [Companies]
 *     responses:
 *       200:
 *         description: The list of the companies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Company'
 */
export const getAllCompanies = async (_req: Request, res: Response) => {
    try {
        const companies = await Company.findAll();
        res.status(200).json(companies);
    } catch (error) {
        console.error('Error fetching companies:', error);
        res.status(500).json({ message: 'Failed to fetch companies' });
    }
};

/**
 * @swagger
 * /api/companyCRUD/{id}:
 *   get:
 *     summary: Get the company by id
 *     tags: [Companies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The company id
 *     responses:
 *       200:
 *         description: The company description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Company'
 *       404:
 *         description: The company was not found
 */
export const getCompanyById = async (req: Request, res: Response) => {
    try {
        const company = await Company.findByPk(req.params.id);
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json(company);
    } catch (error) {
        console.error('Error fetching company:', error);
        res.status(500).json({ message: 'Failed to fetch company' });
    }
};

/**
 * @swagger
 * /api/companyCRUD/{id}:
 *   put:
 *     summary: Update the company by the id
 *     tags: [Companies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The company id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Company'
 *     responses:
 *       200:
 *         description: The company was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Company'
 *       404:
 *         description: The company was not found
 *       500:
 *         description: Some error happened
 */
export const updateCompany = async (req: Request, res: Response) => {
    try {
        const [updated] = await Company.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const updatedCompany = await Company.findByPk(req.params.id);
            res.status(200).json(updatedCompany);
        } else {
            res.status(404).json({ message: 'Company not found' });
        }
    } catch (error) {
        console.error('Error updating company:', error);
        res.status(500).json({ message: 'Failed to update company' });
    }
};

/**
 * @swagger
 * /api/companyCRUD/{id}:
 *   delete:
 *     summary: Remove the company by id
 *     tags: [Companies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The company id
 *     responses:
 *       200:
 *         description: The company was deleted
 *       404:
 *         description: The company was not found
 *       500:
 *         description: Some error happened
 */
export const deleteCompany = async (req: Request, res: Response) => {
    try {
        const deletedRowsCount = await Company.destroy({
            where: { id: req.params.id },
        });
        if (deletedRowsCount === 0) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json({ message: 'Company deleted successfully' });
    } catch (error) {
        console.error('Error deleting company:', error);
        res.status(500).json({ message: 'Failed to delete company' });
    }
};
