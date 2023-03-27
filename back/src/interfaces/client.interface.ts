import { IContactResponse } from "./contact.interface";

export interface IClient {
    id: string;
    name: string;
    email: string;
    contact: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface IClientRequest {
    name: string;
    email: string;
    password: string;
    contact: string;
}

export interface IClientResponse {
    id?: string;
    name?: string;
    email?: string;
    contact?: string;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IClientLogin {
    email: string;
    password: string;
}

export interface IClientUpdate {
    name?: string;
    email?: string;
    password?: string;
    contact?: string;
}
