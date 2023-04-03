import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'yup';
import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client.entity';
import { AppError } from '../../errors/appError';

const ensureExistsClientMiddleware =
    (schema: AnySchema) =>
    async (req: Request, res: Response, next: NextFunction) => {
        const ensureBodyClient = await schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true,
        });

        const clientRepository = AppDataSource.getRepository(Client);
        const ensureClientExist = await clientRepository.findOneBy({
            email: ensureBodyClient.email,
        });

        if (ensureClientExist && req.client.isActive == true) {
            throw new AppError('Existing client', 409);
        }

        next();
    };

export { ensureExistsClientMiddleware };
