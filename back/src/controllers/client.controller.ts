import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { IClientLogin, IClientRequest, IClientUpdate } from '../interfaces/client.interface';
import { createClientService } from '../services/client/createClient.service';
import { deleteClientService } from '../services/client/deleteClient.service';
import { listClientIDService } from '../services/client/lisClientID.service';
import listAllClientsService from '../services/client/listClient.service';
import { loginClientService } from '../services/client/loginClient.service';
import updateClientService from '../services/client/updateClient.service';

const listClientsController = async (req: Request, res: Response) => {
    const clients = await listAllClientsService();
    return res.status(200).json(instanceToPlain(clients));
};

const listClientByIdController = async (req: Request, res: Response) => {
    const clientId = req.params.id;    
    const listIDClient = await listClientIDService(clientId);
    return res.status(200).json(listIDClient);
};

const updateClientController = async (req: Request, res: Response) => {
    const clientData: IClientUpdate = req.body;
    const clientId = req.params.id;
    const updatedClient = await updateClientService(clientData, clientId);
    return res.status(200).json(updatedClient);
};

const createClientController = async (req: Request, res: Response) => {
    const client: IClientRequest = req.body;
    const createClient = await createClientService(client);
    return res.status(201).json(createClient);
};

const loginClientController = async (req: Request, res: Response) => {
    const loginDate: IClientLogin = req.body;
    const tokenClient = await loginClientService(loginDate);
    return res.status(200).json(tokenClient);
};

const deleteClientController = async (req: Request, res: Response) => {
    const clientId = req.params.id;
    const deleteClient = await deleteClientService(clientId);
    return res.status(204).json(deleteClient);
};

export {
    listClientsController,
    listClientByIdController,
    updateClientController,
    createClientController,
    loginClientController,
    deleteClientController,
};
