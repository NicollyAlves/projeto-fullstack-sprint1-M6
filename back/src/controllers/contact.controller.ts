import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { IContactRequest, IContactUpdate } from '../interfaces/contact.interface';
import createContactService from '../services/contact/createContact.service';
import { deleteContactService } from '../services/contact/deleteContact.service';
import listContactByIdService from '../services/contact/lisContactID.service';
import listContactsByClientService from '../services/contact/listAllContactsByClient.service';
import listContactsService from '../services/contact/listContact.service';
import updateContactService from '../services/contact/updateContact.service';

const listContactsController = async (req: Request, res: Response) => {
    const contacts = await listContactsService();
    return res.status(200).json(contacts);
};

const listContactByIdController = async (req: Request, res: Response) => {
    const contactId = req.params.id;
    const listIDContact = await listContactByIdService(contactId);
    return res.status(200).json(listIDContact);
};

const listContactsByClientController = async (req: Request, res: Response) => {
    const paramsId = req.params.id;
    const list = await listContactsByClientService(paramsId);
    return res.status(200).json(list);
};

const updateContactController = async (req: Request, res: Response) => {
    const ContactData: IContactUpdate = req.body;
    const ContactId = req.params.id;
    const updatedContact = await updateContactService(ContactData, ContactId);
    return res.status(200).json(updatedContact);
};

const createContactController = async (req: Request, res: Response) => {
    const { name, email, contact }: IContactRequest =
        req.body;
    const clientId = req.params.id;

    const createdProduct = await createContactService(
        {
            name,
            email,
            contact
        },
        clientId
    );

    return res.status(201).json(createdProduct);
};

const deleteContactController = async (req: Request, res: Response) => {
    const ContactId = req.params.id;
    const deleteContact = await deleteContactService(ContactId);
    return res.status(204).json(deleteContact);
};

export {
    listContactsController,
    listContactByIdController,
    listContactsByClientController,
    updateContactController,
    createContactController,
    deleteContactController,
};
