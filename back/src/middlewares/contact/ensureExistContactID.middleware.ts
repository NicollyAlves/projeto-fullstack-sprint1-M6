import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../errors/appError';

const ensureExistContactIDMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const contact = req.contact.id;

    if (!contact) {
        throw new AppError('Contact not found', 404);
    }
    else {
        next();
    }
};

export { ensureExistContactIDMiddleware };
