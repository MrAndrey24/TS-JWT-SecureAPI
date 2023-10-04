import { Task } from '../models/task';
import { createTask, updateTask, deleteTask } from '../services/taskServices';
import express from 'express';

export async function createTaskController(req: express.Request, res: express.Response){
    try{
        const { title, description, status, userId } = req.body
        const task: Task = {
            title,
            description,
            status,
            userId
        }
        const newTask = await createTask(task);
        res.status(201).send(newTask);
    }catch(err){
        res.status(500).send(err);
    }
}

export async function updateTaskController(req: express.Request, res: express.Response){
    try{
        const { id } = req.params;
        const { title, description, status, userId } = req.body
        const task: Task = {
            title,
            description,
            status,
            userId
        }
        const updatedTask = await updateTask(parseInt(id), task)
        res.status(200).send(updatedTask);
    }catch(err){
        res.status(500).send(err);
    }
}

export async function deleteTaskController(req: express.Request, res: express.Response){
    try{
        const { id } = req.params;
        const deletedTask = await deleteTask(parseInt(id));
        res.status(200).send(deletedTask);
    }catch(err){
        res.status(500).send(err);
    }
}