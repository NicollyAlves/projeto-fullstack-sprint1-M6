import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { IContact, IContactRequest, IContactResponse, IContactUpdate } from '../../interfaces/contact.interface';

const respContactSchema: SchemaOf<IContactResponse> = yup.object().shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    contact: yup.string().notRequired(),
    isActive: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
    client: yup.object().shape({
        id: yup.string().notRequired()
    })
});

const listRespContactSchemaWithClientID: SchemaOf<IContactResponse[]> = yup.array(respContactSchema)

const contactSchema: SchemaOf<IContact> = yup.object().shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    contact: yup.string().notRequired(),
    isActive: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired()
});

const listRespContactSchema: SchemaOf<IContact[]> = yup.array(contactSchema);

const reqContactSchema: SchemaOf<IContactRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    contact: yup.string().required(),
});

export const updateSchema: SchemaOf<IContactUpdate> = yup.object().shape({
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    contact: yup.string().notRequired(),
});

export { respContactSchema, listRespContactSchema, contactSchema, reqContactSchema, listRespContactSchemaWithClientID };
