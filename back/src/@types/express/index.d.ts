import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      client: {
        id: string;
        isActive: boolean;
      },
      contact: {
        id: string;
        isActive: boolean;
      };
    }
  }
}
export {};
