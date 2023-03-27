import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client.entity';
import { AppError } from '../../errors/appError';
import { IClientLogin } from '../../interfaces/client.interface';

const loginClientService = async ({ email, password }: IClientLogin) => {
    const clientRepository = AppDataSource.getRepository(Client);

    const findClients = await clientRepository.findOneBy({ email: email });

    if (!findClients) {
        throw new AppError('Password or email incorrect', 403);
    }

    if (findClients!.isActive === false) {
        throw new AppError('Inactive Client', 400);
    }

    const checkPassword = await compare(password, findClients.password);
    if (!checkPassword) {
        throw new AppError('Password or email incorrect', 403);
    }

    const token_client = jwt.sign(
        { isActive: findClients.isActive },
        process.env.SECRET_KEY!,
        {
            subject: findClients.id,
            expiresIn: '24h',
        }
    )
    const id_client = findClients.id
    const returnedResponse = {token_client, id_client}

    return returnedResponse
};

export { loginClientService };
