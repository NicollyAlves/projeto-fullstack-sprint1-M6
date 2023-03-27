import { Router } from 'express';
import { createContactController, deleteContactController, listContactByIdController, listContactsByClientController, listContactsController, updateContactController } from '../controllers/contact.controller';
import ensureAuthMiddleware from '../middlewares/client/ensureAuth.middleware';
import { ensureExistClientIDMiddleware } from '../middlewares/client/ensureExistClientID.middleware';
import ensureIsActiveMiddleware from '../middlewares/client/ensureIsActive.middleware';
import { ensureExistContactIDMiddleware } from '../middlewares/contact/ensureExistContactID.middleware';
import { ensureExistsContactMiddleware } from '../middlewares/contact/ensureExistsContact.middleware';
import { contactSchema } from '../schemas/contact/contactSchema';

const contactRoutes = Router();

contactRoutes.get('', ensureAuthMiddleware, listContactsController);

contactRoutes.get(
    '/:id',
    ensureAuthMiddleware,
    listContactByIdController
);

contactRoutes.get(
    '/client/:id',
    ensureAuthMiddleware,
    ensureExistClientIDMiddleware,
    listContactsByClientController
);

contactRoutes.patch(
    '/:id',
    ensureAuthMiddleware,
    ensureIsActiveMiddleware,
    updateContactController
);

contactRoutes.post(
    '/:id',
    ensureExistsContactMiddleware(contactSchema),
    createContactController
);

contactRoutes.delete('/:id', ensureAuthMiddleware, deleteContactController);

export default contactRoutes;
