import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { IContactUpdate } from '../../interfaces/contact.interface';
import { contactSchema } from '../../schemas/contact/contactSchema';
import { updateSchema } from '../../schemas/contact/contactSchema';

const updateContactService = async (
    data: IContactUpdate,
    contactId: string
): Promise<IContactUpdate> => {
    const contactRepository = AppDataSource.getRepository(Contact);

    const contact = await contactRepository.findOneBy({ id: contactId });

    const updatedContact = contactRepository.create({
        ...contact,
        ...data,
    });

    await contactRepository.save(updatedContact);

    const returnedContact = updateSchema.validate(updatedContact, {
        stripUnknown: true,
    });

    return returnedContact;
};

export default updateContactService;
