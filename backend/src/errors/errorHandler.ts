import { Request, Response, NextFunction } from 'express';
import errorCodes from './errorCodes';

interface Error {
    status?: number;
    message?: string;
    code?: string;
}

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    const statusCode = err.status || 500;
    const errorMessage = err.message || errorCodes.SERVER_ERROR.message;
    const errorCode = err.code || errorCodes.SERVER_ERROR.code;

    res.status(statusCode).json({
        code: errorCode,
        message: errorMessage,
    });
};

export default errorHandler;
