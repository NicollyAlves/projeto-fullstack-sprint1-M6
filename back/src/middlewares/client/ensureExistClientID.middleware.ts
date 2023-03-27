import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../errors/appError';

const ensureExistClientIDMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const Client = req.client.id;

    if (!Client) {
        throw new AppError('Client not found', 404);
    }

    next();
};

export { ensureExistClientIDMiddleware };
