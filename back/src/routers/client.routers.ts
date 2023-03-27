import { Router } from 'express';
import { createClientController, deleteClientController, listClientByIdController, listClientsController, loginClientController, updateClientController } from '../controllers/client.controller';
import ensureAuthMiddleware from '../middlewares/client/ensureAuth.middleware';
import { ensureExistClientIDMiddleware } from '../middlewares/client/ensureExistClientID.middleware';
import { ensureExistsClientMiddleware } from '../middlewares/client/ensureExistsClient.middleware';
import ensureIsActiveMiddleware from '../middlewares/client/ensureIsActive.middleware';
import { clientSchema } from '../schemas/client/clientSchema';

const clientRoutes = Router();

clientRoutes.get('', ensureAuthMiddleware, listClientsController);

clientRoutes.get(
    '/:id',
    ensureAuthMiddleware,
    ensureExistClientIDMiddleware,
    listClientByIdController
);

clientRoutes.patch(
    '/:id',
    ensureAuthMiddleware,
    ensureIsActiveMiddleware,
    updateClientController
);

clientRoutes.post(
    '',
    ensureExistsClientMiddleware(clientSchema),
    createClientController
);

clientRoutes.post(
    '/login',
    loginClientController
);

clientRoutes.delete('/:id', ensureAuthMiddleware, deleteClientController);

export default clientRoutes;
