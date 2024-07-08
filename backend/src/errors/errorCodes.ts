const errorCodes = {
    VALIDATION_ERROR: {
        code: 'VALIDATION_ERROR',
        message: 'Validation failed.',
    },
    AUTHENTICATION_ERROR: {
        code: 'AUTHENTICATION_ERROR',
        message: 'Authentication failed. Invalid credentials.',
    },
    SERVER_ERROR: {
        code: 'SERVER_ERROR',
        message: 'An internal server error occurred.',
    },
    NOT_FOUND: {
        code: 'NOT_FOUND',
        message: 'Resource not found.',
    },
};

export default errorCodes;
