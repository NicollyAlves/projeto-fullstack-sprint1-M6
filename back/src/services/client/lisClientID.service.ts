import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client.entity';
import { respClientSchema } from '../../schemas/client/clientSchema';

const listClientIDService = async (idClient: string) => {
    const clientRepository = AppDataSource.getRepository(Client);

    const findClient = await clientRepository.findOneBy({ id: idClient });

    const respClient = await respClientSchema.validate(findClient, {
        stripUnknown: true,
    });

    console.log(respClient);
    

    return respClient;
};

export { listClientIDService };
