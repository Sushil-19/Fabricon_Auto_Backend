import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import companyRoutes from './routes/companyRoutes';
import companyCRUDRoutes from './routes/companyCRUDRoutes';
import errorHandler from './errors/errorHandler';
import setupSwagger from './utils/swagger'; 
import accountTypesRoutes from './routes/accountTypesRoutes'; 
import lisancesRoutes from './routes/lisancesRoutes';
import organizationsRoutes from './routes/organizationsRoutes';
import paymentRoutes from './routes/paymentRoutes';
import planRoutes from './routes/planRoutes';
import userRoutes from './routes/userRoutes';
import roleRoutes from './routes/roleRoutes';
import cors from 'cors';

dotenv.config();

const app = express();
setupSwagger(app); 

app.options( '*' , cors())

const corsOptions = {
    origin: 'http://localhost:3001', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable sending cookies and other credentials
    optionsSuccessStatus: 204 // Some legacy browsers choke on 204
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Preflight all routes
app.use(bodyParser.json());

// API routes
app.use('/api/company', companyRoutes);
app.use('/api/companyCRUD', companyCRUDRoutes);
app.use('/api/account-types', accountTypesRoutes);
app.use('/api/lisances', lisancesRoutes);
app.use('/api/organizations', organizationsRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/plans', planRoutes);
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);

app.use(errorHandler);

export default app;
