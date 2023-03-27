import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client.entity';
import { IContact, IContactResponse } from '../../interfaces/contact.interface';
import { listRespContactSchema } from '../../schemas/contact/contactSchema';

const listContactsByClientService = async (
    clientId: string
): Promise<IContact[] | undefined > => {
    const clientRepository = AppDataSource.getRepository(Client);

    const clientList = await clientRepository.findOne({
        where: { id: clientId },
        relations: { contacts: true },
    });

    
    const returnedList = await listRespContactSchema.validate(
        clientList?.contacts,
        {
            stripUnknown: true,
        }
        );

    return returnedList;
};

export default listContactsByClientService;
