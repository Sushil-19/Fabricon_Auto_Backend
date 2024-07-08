import { Sequelize } from 'sequelize-typescript';
import AccountTypes from '../models/accountTypes';
import Company from '../models/company';
import Lisances from '../models/lisance';
import Organizations from '../models/organization';
import Payment from '../models/payment';
import Plans from '../models/plan';
import PUsers from '../models/puser';
import Roles from '../models/role';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

export default sequelize;
