import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { IContact, IContactResponse } from '../../interfaces/contact.interface';
import { listRespContactSchema, listRespContactSchemaWithClientID, respContactSchema } from '../../schemas/contact/contactSchema';

const listContactByIdService = async (
    contactId: string
): Promise<IContactResponse> => {
    const contactRepository = AppDataSource.getRepository(Contact);

    console.log(contactId);
    
    const contact = await contactRepository.findOneBy({
        id: contactId,
    });

    const returnedProduct = await respContactSchema.validate(contact, {
        stripUnknown: true,
    });

    console.log(returnedProduct);
    return returnedProduct;
};

export default listContactByIdService;
