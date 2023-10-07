import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { User } from "../models/user";
import { createUser, encryptPassword, findUser, findUserById, validatePassword } from "../services/user.services";

export async function signup(req: Request, res: Response){
    try{
        const { name, lastName, photo, email, password } = req.body
        const user: User = {
            name,
            lastName,
            photo,
            email,
            password
        }
        user.password = await encryptPassword(user.password)
        const saveUser = await createUser(user)

        const token = jwt.sign({_id: saveUser.id}, process.env.TOKEN_SECRET || 'tokentest')
        res.header('auth-token', token).json(saveUser);
    }catch(err){
        res.status(500).send(err);
    }
}

export async function signin(req: Request, res: Response){
    try{
        const { email, password } = req.body
        const user = await findUser(email)
        if(!user) return res.status(400).json('Email or password is incorrect')
        
        const validPassword = await validatePassword(password, email)
        if(!validPassword) return res.status(400).json('Invalid password')

        const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET || 'tokentest', {
            expiresIn: 60 * 60 * 24
        })

        res.header('auth-token', token).json(user)
    }catch(err){
        res.status(500).send(err)
    }
}

export async function profile(req: Request, res: Response){
    try{
        const user = await findUserById(Number(req.userId))
        if(!user) return res.status(404).json('User not found')
        res.send(user)
    }catch(err){
        res.status(500).send(err)
    }
}