import { User } from "../models/user";
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'

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

export async function findUser(email: string){
    try{
        const user = await prisma.user.findUnique({
            where:{
                email: email
            }
        })

        return user
    }catch(err){
        throw err
    }
}

export async function findUserById(id: number){
    try{
        const user = await prisma.user.findUnique({
            where:{
                id: id
            }
        })

        return user
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

export async function encryptPassword(password: string){
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}

export async function validatePassword(password: string, email: string){
    const user = await prisma.user.findUnique({
        where:{
            email: email
        }
    })
    if(!user) return false
    const passwordMatch = await bcrypt.compare(password, user.password)
    return passwordMatch
}