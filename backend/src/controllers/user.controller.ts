import { User } from "../models/user";
import { createUser, updateUser, deleteUser} from "../services/user.services";
import { Request, Response } from 'express';


export async function updateUserController(req: Request, res: Response){
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

export async function deleteUserController(req: Request, res: Response){
    try{
        const { id } = req.params;
        const deletedUser = await deleteUser(parseInt(id));
        res.status(200).send(deletedUser);
    }catch(err){
        res.status(500).send(err);
    }
}