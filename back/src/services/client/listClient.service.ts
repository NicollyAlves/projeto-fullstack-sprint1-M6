import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client.entity';
import { IClientResponse } from '../../interfaces/client.interface';
import { listRespClientSchema } from '../../schemas/client/clientSchema';

const listClientsService = async (): Promise<IClientResponse[]> => {
    const clientRepository = AppDataSource.getRepository(Client)

    const clients = await clientRepository.find()

    const respClient = await listRespClientSchema.validate(clients, {
        stripUnknown: true,
    })

    return respClient;
};

export default listClientsService;
