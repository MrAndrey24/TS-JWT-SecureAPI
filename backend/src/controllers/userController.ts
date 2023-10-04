import { User } from "../models/user";
import { getUsers ,createUser, updateUser, deleteUser} from "../services/userServices";
import express from 'express';


export async function getUsersController(req: express.Request, res: express.Response){
    try{
        const users = await getUsers();
        res.status(200).send(users);
    }catch(err){
        res.status(500).send(err);
    }
}

export async function createUserController(req: express.Request, res: express.Response){
    try{
        const { name, lastName, photo, email, password } = req.body
        const user: User = {
            name,
            lastName,
            photo,
            email,
            password
        }
        const newUser = await createUser(user);
        res.status(201).send(newUser);
    }catch(err){
        res.status(500).send(err);
    }
}

export async function updateUserController(req: express.Request, res: express.Response){
    try{
        const { id } = req.params;
        const { name, lastName, photo, email, password } = req.body
        const user: User = {
            name,
            lastName,
            photo,
            email,
            password
        }
        const updatedUser = await updateUser(parseInt(id), user)
        res.status(200).send(updatedUser);
    }catch(err){
        res.status(500).send(err);
    }
}

export async function deleteUserController(req: express.Request, res: express.Response){
    try{
        const { id } = req.params;
        const deletedUser = await deleteUser(parseInt(id));
        res.status(200).send(deletedUser);
    }catch(err){
        res.status(500).send(err);
    }
}