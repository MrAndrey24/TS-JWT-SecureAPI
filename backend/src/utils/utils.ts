import { User } from "../models/user";
import { Task } from "../models/task";
import { Status } from "../types";


// User validation
const parseName = (nameRequest: any): string => {
    if(!isString(nameRequest)){
        throw new Error('Name must be a string')
    }

    return nameRequest
}

const parseLastName = (lastNameRequest: any): string => {
    if(!isString(lastNameRequest)){
        throw new Error('Last name must be a string')
    }

    return lastNameRequest
}

const parsePhoto = (photoRequest: any): string => {
    if(!isString(photoRequest)){
        throw new Error('Photo must be a string')
    }

    return photoRequest
}

const parseEmail = (emailRequest: any): string => {
    if(!isString(emailRequest)){
        throw new Error('Email must be a string')
    }

    return emailRequest
}

const parsePassword = (passwordRequest: any): string => {
    if(!isString(passwordRequest)){
        throw new Error('Password must be a string')
    }

    return passwordRequest
}


// Task validation

const parseTitle = (titleRequest: any): string => {
    if(!isString(titleRequest)){
        throw new Error('Title must be a string')
    }

    return titleRequest
}

const parseDescription = (descriptionRequest: any): string => {
    if(!isString(descriptionRequest)){
        throw new Error('Description must be a string')
    }

    return descriptionRequest
}

const parseStatus = (statusRequest: any): Status => {
    if(!isStatus(statusRequest)){
        throw new Error('Incorrect or messing Status')
    }

    return statusRequest
}


const parseUserId = (userIdRequest: any): number => {
    if(!isNumber(userIdRequest)){
        throw new Error('User id must be a number')
    }

    return userIdRequest
}

// General functions for validation

const isStatus = (status: any): boolean => {
    return Object.values(Status).includes(status)
}

const isString = (string: any): boolean => {
    return typeof string === 'string' || string instanceof String;
}

const isNumber = (number: any): boolean => {
    return typeof number === 'number' || number instanceof Number;
}



// Functions to create new objects
const toNewUser = (object: any): User => {
    const newUser: User = {
        name: parseName(object.name),
        lastName: parseLastName(object.lastName),
        photo: parsePhoto(object.photo),
        email: parseEmail(object.email),
        password: parsePassword(object.password),
    }
    return newUser
}

const toNewTask = (object: any): Task => {
    const newTask: Task = {
        title: parseTitle(object.title),
        description: parseDescription(object.description),
        status: parseStatus(object.status),
        userId: parseUserId(object.userId)
    }
    return newTask
}

export default { toNewUser, toNewTask }