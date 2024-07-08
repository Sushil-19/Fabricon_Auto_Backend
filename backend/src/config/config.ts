// config.ts
import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
export const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
export const REDIS_PORT = parseInt(process.env.REDIS_PORT as string) || 6379;
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD || 'your_redis_password';
export const DB_NAME = process.env.DB_NAME || 'your_database_name';
export const DB_USER = process.env.DB_USER || 'your_database_user';
export const DB_PASS = process.env.DB_PASS || 'your_database_password';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = parseInt(process.env.DB_PORT as string) || 5432;
export const DB_DIALECT = 'postgres'; 
