import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { AppError } from '../../errors/appError';

const deleteContactService = async (idContact: string) => {
    const contactRepository = AppDataSource.getRepository(Contact);

    const findContact = await contactRepository.findOneBy({ id: idContact });

    if (!findContact) {
        throw new AppError('Contact not found', 404);
    }

    const deletedContact = await contactRepository.update(idContact, {
        isActive: false,
    });

    return deletedContact;
};

export { deleteContactService };
