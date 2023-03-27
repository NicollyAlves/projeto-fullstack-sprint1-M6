import express from "express";
import "express-async-errors"
import 'reflect-metadata';
import { errorIdentify } from "./errors/appError";
import clientRoutes from "./routers/client.routers";
import contactRoutes from "./routers/contact.routers";

export const app = express();

app.use(express.json());

app.use('/clients', clientRoutes);
app.use('/contacts', contactRoutes);

app.use(errorIdentify);
