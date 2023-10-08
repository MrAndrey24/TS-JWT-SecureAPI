import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { createUser, encryptPassword, findUser, findUserById, validatePassword } from "../services/user.services";
import { isString, toNewUser } from "../utils/utils";

export async function signUp(req: Request, res: Response){
    try{

        const newUser = toNewUser(req.body)
        newUser.password = await encryptPassword(newUser.password)
        const saveUser = await createUser(newUser)

        const token = jwt.sign({_id: saveUser.id}, process.env.TOKEN_SECRET || 'tokentest', {
            expiresIn: 60 * 60 * 24
        })
        res.header('auth-token', token).json(saveUser);
    }catch(err: any){
        res.status(400).send(err.message);
    }
}

export async function signIn(req: Request, res: Response){
    try{
        const { email, password } = req.body;
        if (isString(email) !== true || isString(password) !== true) {
            return res.status(400).json('Incorrect or missing email or password');
        }
        const user = await findUser(email);
        if (!user) {
            return res.status(400).json('Email or password is incorrect');
        }

        const validPassword = await validatePassword(password, email);
        if (!validPassword) {
            return res.status(400).json('Invalid password');
        }

        const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET || 'tokentest', {
            expiresIn: 60 * 60 * 24
        });

        res.header('auth-token', token).json(user);
    }catch(err: any){
        res.status(400).send(err.message)
    }
}

export async function profile(req: Request, res: Response){
    try{
        const userId = parseInt(req.userId);
        const user = await findUserById(userId);
        if(!user) return res.status(404).json('User not found');
        res.send(user);
    }catch(err){
        res.status(500).send(err);
    }
}