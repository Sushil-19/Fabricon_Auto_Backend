import dotenv from 'dotenv';
import sequelize from './config/database';
import app from './app'; // Import the configured Express app
import { createClient } from 'redis';

dotenv.config();

const redisClient = createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
    password: process.env.REDIS_PASSWORD,
});

redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});

redisClient.connect().then(() => console.log("Redis connected"));

const startServer = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true }); // Adjust sync options as needed
        console.log('Database connected and synced!');

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();
