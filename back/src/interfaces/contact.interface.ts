export interface IContact {
    id: string;
    name: string;
    email: string;
    contact: string,
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface IContactRequest {
    name: string;
    email: string;
    contact: string;
}

export interface IContactResponse {
    id?: string;
    name?: string;
    email?: string;
    contact?: string;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    client?: IClientID;
}

export interface IClientID {
    id?: string
}

export interface IContactUpdate {
    name?: string;
    email?: string;
    contact?: string;
}
