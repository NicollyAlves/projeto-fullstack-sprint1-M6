import { AppDataSource } from '../../data-source';
import { IClientUpdate } from '../../interfaces/client.interface';
import { updateSchema } from '../../schemas/client/clientSchema';
import { Client } from '../../entities/client.entity';

const updateClientService = async (
    data: IClientUpdate,
    ClientId: string
): Promise<IClientUpdate> => {
    const clientRepository = AppDataSource.getRepository(Client);

    const client = await clientRepository.findOneBy({ id: ClientId });

    const updatedClient = clientRepository.create({
        ...client,
        ...data,
    });

    await clientRepository.save(updatedClient);

    const returnedClient = updateSchema.validate(updatedClient, {
        stripUnknown: true,
    });

    return returnedClient;
};

export default updateClientService;
