import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { IClient, IClientRequest, IClientResponse, IClientUpdate } from '../../interfaces/client.interface';

const respClientSchema: SchemaOf<IClientResponse> = yup.object().shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    contact: yup.string().notRequired(),
    isActive: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired()
});

const listRespClientSchema: SchemaOf<IClientResponse[]> = yup.array(respClientSchema);

const clientSchema: SchemaOf<IClientRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    contact: yup.string().required(),
});

export const updateSchema: SchemaOf<IClientUpdate> = yup.object().shape({
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    password: yup.string().notRequired(),
    contact: yup.string().notRequired(),
});

export { respClientSchema, listRespClientSchema, clientSchema };
