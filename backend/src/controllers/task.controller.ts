import { createTask, updateTask, deleteTask } from '../services/task.services';
import { Request, Response } from 'express';
import { toNewTask } from '../utils/utils';

export async function createTaskController(req: Request, res: Response){
    try{
        const { title, description, status } = req.body
        const userId = parseInt(req.userId);
        const newTask = toNewTask({ title, description, status, userId })
        const savedTask = await createTask(newTask);
        res.status(201).send(savedTask);
    }catch(err: any){
        res.status(400).send(err.message);
    }
}

export async function updateTaskController(req: Request, res: Response){
    try{
        const taskId = parseInt(req.params.id);
        const { title, description, status } = req.body
        const userId = parseInt(req.userId);
        const task = toNewTask({ title, description, status, userId })
        const updatedTask = await updateTask(taskId ,task)
        res.status(200).send(updatedTask);
    }catch(err: any){
        res.status(400).send(err.message);
    }
}

export async function deleteTaskController(req: Request, res: Response){
    try{
        const taskId = parseInt(req.params.id);
        const userId = parseInt(req.userId);
        const deletedTask = await deleteTask(taskId, userId)
        res.status(200).send(deletedTask);
    }catch(err: any){
        res.status(400).send(err.message);
    }
}