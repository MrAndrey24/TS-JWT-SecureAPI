import { createTask, updateTask, deleteTask } from '../services/task.services';
import { Request, Response } from 'express';
import { toNewTask } from '../utils/utils';

export async function createTaskController(req: Request, res: Response){
    try{
        const task = toNewTask(req.body);
        const newTask = await createTask(task);
        res.status(201).send(newTask);
    }catch(err){
        res.status(500).send(err);
    }
}

export async function updateTaskController(req: Request, res: Response){
    try{
        const { id } = req.params;
        const task = toNewTask(req.body);
        const updatedTask = await updateTask(parseInt(id), task)
        res.status(200).send(updatedTask);
    }catch(err){
        res.status(500).send(err);
    }
}

export async function deleteTaskController(req: Request, res: Response){
    try{
        const { id } = req.params;
        const deletedTask = await deleteTask(parseInt(id));
        res.status(200).send(deletedTask);
    }catch(err){
        res.status(500).send(err);
    }
}