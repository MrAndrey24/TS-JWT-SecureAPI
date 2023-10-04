import { Task } from "./task";

export type User = {
    name: string;
    lastName?: string;
    photo?: string;
    email: string
    password: string;
    tasks?: Task[];
}