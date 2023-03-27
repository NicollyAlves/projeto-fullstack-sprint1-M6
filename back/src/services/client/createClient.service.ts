import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client.entity';
import { IClientRequest, IClientResponse } from '../../interfaces/client.interface';
import { respClientSchema } from '../../schemas/client/clientSchema';

const createClientService = async (
    date: IClientRequest
): Promise<IClientResponse> => {
    const userRepository = AppDataSource.getRepository(Client);

    const createUser = userRepository.create(date);

    await userRepository.save(createUser);

    const resUser = await respClientSchema.validate(createUser, {
        stripUnknown: true,
    });

    return resUser;
};

export { createClientService };
