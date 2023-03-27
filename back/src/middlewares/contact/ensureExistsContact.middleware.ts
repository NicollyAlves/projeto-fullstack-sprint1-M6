import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'yup';
import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { AppError } from '../../errors/appError';

const ensureExistsContactMiddleware =
    (schema: AnySchema) =>
    async (req: Request, res: Response, next: NextFunction) => {
        const ensureBodyContact = await schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true,
        });

        const contactRepository = AppDataSource.getRepository(Contact);
        const ensureContactExist = await contactRepository.findOneBy({
            email: ensureBodyContact.email,
        });

        if (ensureContactExist) {
            throw new AppError('Existing Contact', 409);
        }

        next();
    };

export { ensureExistsContactMiddleware };
