import { Task } from "../models/task"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function createTask(task: Task){
    try{
        const createTask = await prisma.task.create({
            data:{
                title: task.title,
                description: task.description,
                status: task.status,
                userId: task.userId
            }
        })

        return createTask
    }catch(err){
        throw err
    }
}

export async function updateTask(id: number, task: Task){
    try{
        const updateTask = await prisma.task.update({
            where:{
                id: id
            },
            data:{
                title: task.title,
                description: task.description,
                status: task.status
            }
        })

        return updateTask
    }catch(err){
        throw err
    }
}

export async function deleteTask(id: number){
    try{
        const deleteTask = await prisma.task.delete({
            where:{
                id: id
            }
        })

        return deleteTask
    }catch(err){
        throw err
    }
}