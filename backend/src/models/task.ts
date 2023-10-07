import { Status } from "../types";

export type Task = {
    title: string;
    description?: string;
    status: Status;
    userId: number;
}