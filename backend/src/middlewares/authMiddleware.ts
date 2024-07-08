import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import * as config from '../config/config';
import redisClient from '../utils/redisClient';

interface AuthRequest extends Request {
  user?: any; // Define the 'user' property on the Request type
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

export default authMiddleware;
