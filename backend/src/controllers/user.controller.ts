import { updateUser, deleteUser, encryptPassword} from "../services/user.services";
import { Request, Response } from 'express';
import { toNewUser } from "../utils/utils";


export async function updateUserController(req: Request, res: Response){
    try{
        const userId = parseInt(req.userId);
        const user = toNewUser(req.body);
        user.password = await encryptPassword(user.password);
        const updatedUser = await updateUser(userId, user)
        
        res.status(200).send(updatedUser);
    }catch(err: any){
        res.status(400).send(err.message)
    }
}

export async function deleteUserController(req: Request, res: Response){
    try{
        const userId = parseInt(req.userId);
        const deletedUser = await deleteUser(userId);
        res.status(200).send(deletedUser);
    }catch(err: any){
        res.status(400).send(err.message);
    }
}