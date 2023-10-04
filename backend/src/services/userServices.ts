import { User } from "../models/user";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function createUser(user: User){
    try{
        const newUser = await prisma.user.create({
            data: {
                name: user.name,
                lastName: user.lastName,
                photo: user.photo,
                email: user.email,
                password: user.password
            }
        })

        return newUser
    }catch(err){
        throw err
    }
}

export async function updateUser(id: number, user: User){
    try{
        const updateUser = await prisma.user.update({
            where:{
                id: id
            },
            data:{
                name: user.name,
                lastName: user.lastName,
                photo: user.photo,
                password: user.password
            }
        })

        return updateUser
    }catch(err){
        throw err
    }
}

export async function deleteUser(id: number){
    try{
        const deleteUser = await prisma.user.delete({
            where:{
                id: id
            }
        })

        return deleteUser
    }catch(err){
        throw err
    }
}