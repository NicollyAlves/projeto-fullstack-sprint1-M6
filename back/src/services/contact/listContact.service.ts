import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { IContactResponse } from '../../interfaces/contact.interface';
import { listRespContactSchema, listRespContactSchemaWithClientID } from '../../schemas/contact/contactSchema';

const listContactsService = async (): Promise<IContactResponse[]> => {
    const contactRepository = AppDataSource.getRepository(Contact);

    const contacts = await contactRepository.find();

    const respContact = await listRespContactSchemaWithClientID.validate(contacts, {
        stripUnknown: true,
    });

    return respContact!;
};

export default listContactsService;
