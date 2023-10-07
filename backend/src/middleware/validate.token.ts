import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Payload } from '../types';

export async function TokenValidation(req: Request, res: Response, next: NextFunction){
    const token = req.header('auth-token');
    if(!token) return res.status(401).json('Access denied')
    const payload = jwt.verify(token, process.env.TOKEN_SECRET || 'tokentest') as Payload;
    req.userId = payload._id;

    next();
}