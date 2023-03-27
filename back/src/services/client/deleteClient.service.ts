import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client.entity';
import { AppError } from '../../errors/appError';

const deleteClientService = async (idClient: string) => {
    const clientRepository = AppDataSource.getRepository(Client);

    const findClient = await clientRepository.findOneBy({ id: idClient });

    if (!findClient) {
        throw new AppError('Client not found', 404);
    }

    const deletedClient = await clientRepository.update(idClient, {
        isActive: false,
    });

    return deletedClient;
};

export { deleteClientService };
