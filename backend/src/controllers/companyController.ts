import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import Company from '../models/company';
import generateToken from '../utils/generateToken';

// Register a new company
export const registerCompany = async (req: Request, res: Response) => {
  try {
    const {
      companyName,
      industryType,
      websiteURL,
      contactName,
      contactEmail,
      contactPhone,
      address,
      city,
      state,
      postalCode,
      country,
      termsAccepted,
      username,
      password,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newCompany = await Company.create({
      companyName,
      industryType,
      websiteURL,
      contactName,
      contactEmail,
      contactPhone,
      address,
      city,
      state,
      postalCode,
      country,
      termsAccepted,
      username,
      password: hashedPassword,
    });

    const token = generateToken(newCompany.id.toString());

    res.status(201).json({ newCompany, token });
  } catch (error) {
    console.error('Error registering company:', error);
    res.status(500).json({ message: 'Failed to register company' });
  }
};

// Login a company
export const loginCompany = async (req: Request, res: Response) => {
  try {
    console.log('login called');
    const { username, password } = req.body;

    const company = await Company.findOne({ where: { username } });

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, company.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(company.id.toString());

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in company:', error);
    res.status(500).json({ message: 'Failed to login company' });
  }
};
