import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { Client } from '../../entities/client.entity';
import { IContactRequest, IContactResponse } from '../../interfaces/contact.interface';
import { respContactSchema } from '../../schemas/contact/contactSchema';

const createContactService = async (
    { name, email, contact }: IContactRequest,
    ClientId: string
): Promise<IContactResponse> => {
    const ContactRepository = AppDataSource.getRepository(Contact);
    const ClientRepository = AppDataSource.getRepository(Client);

    const client = await ClientRepository.findOneBy({
        id: ClientId,
    });

    const ContactData = ContactRepository.create({
        name: name,
        email: email,
        contact: contact,
        client: client!
    });
    await ContactRepository.save(ContactData);

    const returnedContact = await respContactSchema.validate(
        ContactData,
        {
            stripUnknown: true,
        }
    );
    return returnedContact;
};

export default createContactService;